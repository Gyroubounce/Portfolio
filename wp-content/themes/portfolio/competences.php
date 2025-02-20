<?php
/*
Template Name: Compétences
*/
?>

<?php get_header(); ?>
    <main>
        <div class="skills-banner">
            <div class="banner-image">
                <img src="http://portfolio.local/wp-content/uploads/2025/02/Sens.jpg" alt="Image de compétences">
            </div>
            <div class="banner-content">
                <h1>Mes Compétences</h1>
                <p>en développement Front-End</p>
                <div class="button-group">
                    <button class="skills-button" data-category="techniques">Techniques</button>
                    <button class="skills-button" data-category="methodologiques">Méthodologiques</button>
                    <button class="skills-button" data-category="relationnelles">Relationnelles</button>
                </div>
            </div>
            <div class="skill-list">
            <div class="card" id="skill-card">
                <h2 id="card-title">"J'ai progressé avec enthousiasme tout au long de ma formation de développeur Front-End sur OpenClassrooms. Ce métier demande de la rigueur dans l’application des méthodes, une solide logique dans la structuration, un sens aigu de l’analyse et une capacité à tirer parti de l’intelligence artificielle. J’aborde avec optimisme et énergie les nombreuses perspectives offertes par l’innovation numérique."

                </h2>
                <ul id="skills-list">
                    <!-- Liste des compétences sera ajoutée dynamiquement ici -->
                </ul>
                <div class="lightbox-comp">
                    <div class="lightbox-content">
                        <span class="close">&times;</span>
                        <h3 class="lightbox-title"></h3>
                        <img class="lightbox-image" src="" alt="">
                        <ul class="lightbox-list"></ul>
                    </div>
                </div>
            </div>
        </div>    
            </div>
        </div>

    </main>

    <?php get_template_part('template-parts/modal-contact'); ?>

    <?php get_footer(); ?>