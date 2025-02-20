<?php
/*
Template Name: Default page
*/
?>

<?php get_header(); ?>
<main>
    <section class="about-page">
        
        <div class="about-content">
            <?php
            if (have_posts()) :
                while (have_posts()) : the_post();
                    the_content();
                endwhile;
            endif;
            ?>
        </div>
    </section>
</main>
<?php get_template_part('template-parts/modal-contact'); ?>

<?php get_footer(); ?>
<?php get_header(); ?>


