<?php
/**
 * Template for displaying Professionnal Projects (Custom Post Type: Portfolios).
 *
 * @package PORTFOLIO
 */

get_header();
?>

<?php
// Récupération des champs ACF
$acf_fields = get_fields(get_the_ID());

// Affichage en JSON dans la console
echo '<script>console.log("Données du Portfolio :", ' . json_encode($acf_fields, JSON_PRETTY_PRINT) . ');</script>';
?>
<section class="section-single">
    <div class="photo">
        <div class="photo-contenair">
            <div class="photo-content-wrapper">
                <!-- Titre -->
                <h2 class="photo-title">
                    <?php 
                        $title = get_the_title();
                        echo $title;
                    ?>
                </h2>

                <?php
                // Récupération des champs ACF
                $lien = get_field('lien');
                $description = get_field('description');
                $competences = get_field('competences');
                $contenu = get_field('contenu'); // Image principale
                $code = get_field('code'); // Image du code
                ?>

                <div class="portfolio-container">
                    <!-- Lien GitHub -->
                    <?php if ($lien) : ?>
                        <div class="portfolio-link">
                            <a href="<?php echo esc_url($lien); ?>" target="_blank">Voir le code sur GitHub</a>
                        </div>
                    <?php endif; ?>

                    <!-- Section Description + Image Contenu -->
                    <div class="portfolio-section">
                        <div class="portfolio-text">
                            <h3>Description</h3>
                            <p><?php echo esc_html($description); ?></p>
                        </div>
                        <div class="portfolio-image">
                            <?php if ($contenu) : ?>
                                <img src="<?php echo esc_url($contenu['sizes']['medium_large']); ?>" alt="<?php echo esc_attr($contenu['alt']); ?>">
                            <?php endif; ?>
                        </div>
                    </div>

                    <!-- Section Compétences + Image Code -->
                    <div class="portfolio-section">
                        <div class="portfolio-text">
                            <h3>Contexte</h3>
                            <p><?php echo esc_html($competences); ?></p>
                        </div>
                        <div class="portfolio-image">
                            <?php if ($code) : ?>
                                <img src="<?php echo esc_url($code['sizes']['medium_large']); ?>" alt="<?php echo esc_attr($code['alt']); ?>">
                            <?php endif; ?>
                        </div>
                    </div>
                </div>

            </div>

            <div class="photo-interactions-wrapper">
            <!-- Bloc bas -->
            <div class="photo-interactions">
                
                    <div class="photo-info">Langages : 
                                <?php
                                $langages = get_the_terms(get_the_ID(), 'langage');
                                echo (!empty($langages) && !is_wp_error($langages)) 
                                    ? esc_html(implode(', ', wp_list_pluck($langages, 'name'))) 
                                    : 'Non défini';
                                ?>
                    </div>
          
                <!-- Miniature et flèches de navigation -->
                <div class="photo-navigation">
                    <!-- Miniature -->
                    <div class="thumbnail-container">
                        <?php 
                        $next_post = get_post(); 
                        ?>
                        <?php if ($next_post) : ?>
                            <a id="thumbnail-link" data-next="<?php echo get_permalink($next_post->ID); ?>">
                                <?php
                                    // Affiche la miniature de la photo suivante
                                    echo get_the_post_thumbnail($next_post->ID, 'thumbnail', ['class' => 'next-thumbnail']);
                                ?>
                            </a>
                        <?php else : ?>
                            <p>Aucun post suivant trouvé.</p> <!-- Optionnel : message si aucun post suivant -->
                        <?php endif; ?>
                    </div>


                    <!-- Flèches sous la miniature -->
                    <div class="arrows-navigation">
                        <?php $prev_post = get_previous_post(); ?>
                        <?php if ($prev_post) : ?>
                            <a href="#" class="nav-link prev-photo" data-url="<?php echo get_permalink($prev_post->ID); ?>" data-id="<?php echo $prev_post->ID; ?>">
                                &#10229; <!-- Flèche gauche -->
                            </a>
                        <?php endif; ?>

                        <?php $next_post = get_next_post(); ?>
                        <?php if ($next_post) : ?>
                            <a href="#" class="nav-link next-photo" data-url="<?php echo get_permalink($next_post->ID); ?>" data-id="<?php echo $next_post->ID; ?>">
                                &#10230; <!-- Flèche droite -->
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

</section>



