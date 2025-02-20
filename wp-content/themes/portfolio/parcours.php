<?php
/**
 * Template Name: Home Page
 * Description: Template personnalisé pour la page d'accueil.
 */
get_header();
?>
<section class="section-portfolio">
   

    <div class="photo-grid" id="photo-gallery">
    <?php
$args = array(
    'post_type'      => 'portfolios',
    'posts_per_page' => 13,
    'orderby'        => 'date',
    'order'          => 'DESC',
    'offset'         => isset($_POST['offset']) ? intval($_POST['offset']) : 0, // Décalage pour la pagination
);

$photo_query = new WP_Query($args);

if ($photo_query->have_posts()) :
    while ($photo_query->have_posts()) : $photo_query->the_post();
    
      
        // Récupération des champs personnalisés
        $description = get_field('description');
        $competences = get_field('competences');
        $lien = get_field('lien');

       
        ?>
        <div class="photo-item">
        <a href="<?php the_permalink(); ?>">
            <!-- Affichage de l'image à la une en taille large -->
            <?php 
            $image_url = get_the_post_thumbnail_url(get_the_ID(), 'large'); 
            ?>
            <img src="<?php echo esc_url($image_url); ?>" class="photo-full" alt="<?php the_title(); ?>">
        </a>
                    
        <div class="photo-overlay">
        <!-- Icône pour voir la publication -->
        <a href="<?php the_permalink(); ?>" class="icon eye">
            <img src="http://portfolio.local/wp-content/uploads/2024/11/eye.png" alt="Eye Icon">
        </a>
<!-- Icône pour ouvrir l'image en plein écran -->
                <a href="#" 
                    data-lightbox="image-<?php the_ID(); ?>" 
                    class="icon fullscreen" 
                    data-url="<?php echo esc_url( get_the_post_thumbnail_url( get_the_ID(), 'large' ) ); ?>" 
                    data-title="<?php the_title(); ?>" 
                    data-langage="<?php $langages = get_the_terms( get_the_ID(), 'langage' ); 
                        $langage_name = 'Non spécifié'; // Valeur par défaut si aucun terme n'est trouvé
                        if ($langages && !is_wp_error($langages)) {
                            // Si des termes sont trouvés, on prend le nom du premier
                            $langage_name = esc_html($langages[0]->name);
                        }
                        echo $langage_name;
                    ?>"  
                    data-category="<?php 
                        // Récupérer la catégorie liée à la taxonomie 'categorie'
                        $categories = get_the_terms( get_the_ID(), 'categorie' ); 
                        $category_name = 'Non classé'; // Valeur par défaut
                        if (!empty($categories) && !is_wp_error($categories)) {
                            $category_name = esc_html( $categories[0]->name ); // Prendre le nom de la première catégorie
                        }
                        echo $category_name;
                    ?>"
                    data-permalink="<?php the_permalink(); ?>"
                    data-description="<?php echo esc_attr(get_field('description')); ?>" 
                    data-competences="<?php echo esc_attr(get_field('competences')); ?>" 
                    data-link="<?php echo esc_url(get_field('lien')); ?>"> <!-- Ajout des nouveaux champs ici -->
                    <img src="http://portfolio.local/wp-content/uploads/2024/11/Icon_fullscreen.png" alt="icône full-screen">
                </a>


                <div class="text-filtre">   
                <!-- Texte en bas -->
                    <div class="text-filtre-flex">
                        <div>  
                            <?php
                            $langages = get_the_terms(get_the_ID(), 'langage');
                            echo (!empty($langages) && !is_wp_error($langages)) 
                                ? esc_html(implode(', ', wp_list_pluck($langages, 'name'))) 
                                : 'Non défini';
                            ?>
                        </div> <!-- Affichage du langage -->

                        <div>
                            <?php
                            $categories = get_the_terms(get_the_ID(), 'categorie');
                            echo (!empty($categories) && !is_wp_error($categories)) 
                                ? esc_html($categories[0]->name) 
                                : 'Non classé';
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
    endwhile;
    wp_reset_postdata();
    
else :
    echo '<p>Aucune photo trouvée.</p>';
endif;
?>

    </div>

</section>
