<?php


// Enregistrer le menu
function portfolio_register_menus() {
    register_nav_menus([
        'main-menu' => __('Menu Principal', 'portfolio'),
        'footer-menu' => __('Menu Footer', 'portfolio'), 
    ]);
}
add_action('after_setup_theme', 'portfolio_register_menus');


// Charger les styles et scripts
function portfolio_enqueue_assets() {

    wp_enqueue_script('jquery');
  

    // Scripts JS
    wp_enqueue_script('custom-modal-script', get_template_directory_uri() . '/js/script.js');
    wp_enqueue_script('photo-navigation', get_template_directory_uri() . '/js/photo-navigation.js');
    wp_enqueue_script('header-burger', get_template_directory_uri() . '/js/header.js');
 


    // filtre-photo
    wp_enqueue_script('filtre-photo', get_template_directory_uri() . '/js/filtre-photo.js');
    
      // Localiser l'URL AJAX en utilisant wp_add_inline_script
      $script = 'var ajaxurl = "' . admin_url('admin-ajax.php') . '";';
      wp_add_inline_script('filtre-photo', $script);

      // lightbox projet
    wp_enqueue_script('moodal-screen', get_template_directory_uri() . '/js/modal-screen.js');

    // lightbox compétences
    wp_enqueue_script('competences-screen', get_template_directory_uri() . '/js/competences.js');

    // pour que le titre ne chevauche pas la barre de menu
    wp_enqueue_script('title-screen', get_template_directory_uri() . '/js/title.js');

    // Charger le CSS de Select2
    wp_enqueue_style('select2-css', 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css');
    // Charger le JS de Select2
    wp_enqueue_script('select2-js', 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js');
    // Charger votre script de personnalisation
    wp_enqueue_script('custom-select2-init', get_template_directory_uri() . '/js/select2-init.js');



   

    // Styles CSS
    wp_enqueue_style('portfolio-style', get_stylesheet_uri());
    wp_enqueue_style('main-style', get_template_directory_uri() . '/scss/main.css', [], '1.0');
}
add_action('wp_enqueue_scripts', 'portfolio_enqueue_assets');

// Action AJAX pour les utilisateurs connectés (et non connectés)
add_action('wp_ajax_your_action', 'handle_ajax_request');
add_action('wp_ajax_nopriv_your_action', 'handle_ajax_request');





class Custom_Walker_Nav_Menu extends Walker_Nav_Menu {
    // Ajouter une classe CSS aux éléments de menu
    function start_lvl( &$output, $depth = 0, $args = null ) {
        $output .= '<ul class="custom-class">';
    }

    function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
        $output .= '<li class="custom-li-class"><a href="' . $item->url . '">' . $item->title . '</a></li>';
    }
}



function load_filtered_photos() {
    // Récupérer les paramètres envoyés via AJAX
    $category = isset($_POST['category']) ? sanitize_text_field($_POST['category']) : '';
    $format = isset($_POST['format']) ? sanitize_text_field($_POST['format']) : '';
    $sort = isset($_POST['sort']) ? sanitize_text_field($_POST['sort']) : 'date_desc';
    $offset = isset($_POST['offset']) ? intval($_POST['offset']) : 0;
    $posts_per_page = isset($_POST['posts_per_page']) ? intval($_POST['posts_per_page']) : 13;

    // Arguments pour la requête WP_Query
    $args = array(
        'post_type' => 'portfolios',
        'posts_per_page' => $posts_per_page,
        'offset' => $offset,
        'orderby' => 'date',
        'order' => $sort === 'date_asc' ? 'ASC' : 'DESC',
        'tax_query' => array(),
    );

    // Filtrer par catégorie
    if ($category) {
        $args['tax_query'][] = array(
            'taxonomy' => 'categorie',
            'field' => 'slug',
            'terms' => $category,
            'operator' => 'IN',
        );
    }

    // Filtrer par format/langage
    if ($format) {
        $args['tax_query'][] = array(
            'taxonomy' => 'langage',
            'field' => 'slug',
            'terms' => $format,
            'operator' => 'IN',
        );
    }

    // Exécuter la requête avec les arguments filtrés
    $photo_query = new WP_Query($args);

    if ($photo_query->have_posts()) :
        while ($photo_query->have_posts()) : $photo_query->the_post();
            $image_url = get_the_post_thumbnail_url(get_the_ID(), 'large');
            $description = get_field('description');
            $competences = get_field('competences');
            $lien = get_field('lien');
            $sous_domaine = get_field('sous-domaine'); // Récupération du champ personnalisé



            // Récupération des langages
            $langages = get_the_terms(get_the_ID(), 'langage');
            $langage_name = (!empty($langages) && !is_wp_error($langages)) 
                ? esc_html(implode(', ', wp_list_pluck($langages, 'name'))) 
                : 'Non défini';

            // Récupération des catégories
            $categories = get_the_terms(get_the_ID(), 'categorie');
            $category_name = (!empty($categories) && !is_wp_error($categories)) 
                ? esc_html($categories[0]->name) 
                : 'Non classé';
            ?>
            <div class="photo-item">
                <a href="<?php the_permalink(); ?>">
                    <img src="<?php echo esc_url($image_url); ?>" class="photo-full" alt="<?php the_title(); ?>">
                </a>
                <div class="photo-overlay">
                    <!-- Icône de lien vers la publication -->
                    <a href="<?php echo esc_url($sous_domaine); ?>" class="icon eye">
                      <img src="/wp-content/uploads/2024/11/eye.png" alt="Eye Icon">
                    </a>
                        <!-- Icône fullscreen avec données supplémentaires -->
                    <a href="#" 
                        data-lightbox="image-<?php the_ID(); ?>" 
                        class="icon fullscreen" 
                        data-url="<?php echo esc_url($image_url); ?>" 
                        data-title="<?php the_title(); ?>" 
                        data-langage="<?php echo $langage_name; ?>" 
                        data-category="<?php echo $category_name; ?>"
                        data-description="<?php echo esc_attr($description); ?>" 
                        data-competences="<?php echo esc_attr($competences); ?>" 
                        data-link="<?php echo esc_url($lien); ?>"
                        data-sous-domaine="<?php echo esc_url(get_field('sous-domaine')); ?>">>
                        <img src="/wp-content/uploads/2024/11/Icon_fullscreen.png" alt="icône full-screen">
                    </a>
                    <div class="text-filtre">
                        <div class="text-filtre-flex">
                            <div><?php echo $langage_name; ?></div> <!-- Affichage du langage -->
                            <div><?php echo $category_name; ?></div> <!-- Affichage de la catégorie -->
                        </div>
                    </div>
                </div>
            </div>
            <?php
        endwhile;
    else :
        echo 'Aucune photo ne correspond à vos critères.';
    endif;

    // Réinitialiser les données de la requête
    wp_reset_postdata();

    // Fin de la requête AJAX
    wp_die();
}

// Actions AJAX pour les utilisateurs connectés et non connectés
add_action('wp_ajax_load_filtered_photos', 'load_filtered_photos');
add_action('wp_ajax_nopriv_load_filtered_photos', 'load_filtered_photos');


