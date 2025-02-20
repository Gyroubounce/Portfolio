<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PORTFOLIO</title>
    <?php wp_head(); ?> <!-- Ajoute les hooks nécessaires pour que WordPress charge automatiquement les styles et scripts -->
</head>
<body <?php body_class(); ?>>

    <header class="main-header">
        <div class="container">
    
            <a href="/" class="logo">
                <h1>Web Your Progress</h1>
            </a>
            
            <!-- Bouton Menu Burger -->
            <button class="burger-menu" aria-label="Menu">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
            <!-- Menu principal -->
            
            <?php
            
            wp_nav_menu([
                'theme_location' => 'main-menu', // Emplacement du menu
                'container'      => 'nav',        // Conteneur du menu
                'menu_class'     => 'main-menu',  // Classe du <ul>
                'menu_id'        => 'primary-menu', // ID du <ul>
                'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>', // Formattage des éléments du menu
                'link_before'    => '<span>',     // Ajoute un élément autour du texte du lien
                'link_after'     => '</span>',    // Ajoute un élément après le texte du lien
                'walker'          => new Custom_Walker_Nav_Menu(), // Exemple d'ajout d'un walker personnalisé pour Bootstrap (facultatif)
                'add_li_class'    => 'menu-item-class' // Ajoute une classe à chaque <li>
            ]);
            ?>
            
        </div>
        
    </header>
  