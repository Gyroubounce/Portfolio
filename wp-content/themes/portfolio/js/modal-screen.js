jQuery(document).ready(function($) {

    // Array to store the images in the lightbox
    var images = [];
    var currentIndex = 0;  // Initialiser à -1 pour forcer la mise à jour après le premier clic

    // Collecter toutes les images et leurs données dans un tableau
    $('.icon.fullscreen').each(function() {
        var imageUrl = $(this).data('url');
        var imageTitle = $(this).data('title');
        var imageLangage = $(this).data('langage');
        var imageCategory = $(this).data('category');
        var permalink = $(this).data('permalink');
        var description = $(this).data('description');
        var competences = $(this).data('competences');
        var lien = $(this).data('link');
        
        // Ajouter l'image et ses données dans le tableau 'images'
        images.push({
            url: imageUrl,
            title: imageTitle,
            langage: imageLangage,
            category: imageCategory,
            permalink: permalink,
            description: description,
            competences: competences,
            lien: lien
        });
    });

    // Afficher la modale avec les données dynamiques
    $(document).on('click', '.icon.fullscreen', function(e) {
        e.preventDefault();

        // Récupérer les données de l'image
        var url = $(this).data('url');
        var title = $(this).data('title');
        var langage = $(this).data('langage');
        var category = $(this).data('category');
        var permalink = $(this).data('permalink');
        var description = $(this).data('description');
        var competences = $(this).data('competences');
        var lien = $(this).data('link');
        
        // Injecter les données dans la modale
        $('#lightbox-photo').attr('src', url);
        $('#lightbox-title').text(title);
        $('#lightbox-langage').text(langage);
        $('#lightbox-category').text(category);
        $('#lightbox-description').text(description);
        $('#lightbox-competences').text(competences);
        $('#lightbox-link').attr('href', lien);
        $('#lightbox-permalink').attr('href', permalink);
        
        // Afficher la modale
        $('#lightbox').fadeIn();

        // Initialiser currentIndex au moment du premier clic
        currentIndex = images.findIndex(image => image.url === url);
    });

    // Navigation précédente
    $('#lightbox-prev').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1; // Aller à la dernière image si on est au début
        }

        var prevImage = images[currentIndex];
        $('#lightbox-photo').attr('src', prevImage.url);
        $('#lightbox-title').text(prevImage.title);
        $('#lightbox-langage').text(prevImage.langage);
        $('#lightbox-category').text(prevImage.category);
        $('#lightbox-description').text(prevImage.description);
        $('#lightbox-competences').text(prevImage.competences);
        $('#lightbox-link').attr('href', prevImage.lien);
        $('#lightbox-permalink').attr('href', prevImage.permalink);
    });

    // Navigation suivante
    $('#lightbox-next').click(function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Revenir à la première image si on est à la fin
        }

        var nextImage = images[currentIndex];
        $('#lightbox-photo').attr('src', nextImage.url);
        $('#lightbox-title').text(nextImage.title);
        $('#lightbox-langage').text(nextImage.langage);
        $('#lightbox-category').text(nextImage.category);
        $('#lightbox-description').text(nextImage.description);
        $('#lightbox-competences').text(nextImage.competences);
        $('#lightbox-link').attr('href', nextImage.lien);
        $('#lightbox-permalink').attr('href', nextImage.permalink);
    });

    // Fermeture de la lightbox
    $('#close-lightbox').click(function() {
        $('#lightbox').fadeOut();
    });
});
