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
        var texteLien = $(this).data('texte-lien'); // Nouveau : Texte du lien
        var sousDomaine = $(this).data('sous-domaine');
        var texteSousDomaine = $(this).data('texte-sous-domaine'); // Nouveau : Texte du sous-domaine

        // Ajouter l'image et ses données dans le tableau 'images'
        images.push({
            url: imageUrl,
            title: imageTitle,
            langage: imageLangage,
            category: imageCategory,
            permalink: permalink,
            description: description,
            competences: competences,
            lien: lien,
            texteLien: texteLien, // Nouveau
            sousDomaine: sousDomaine,
            texteSousDomaine: texteSousDomaine // Nouveau
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
        console.log(lien);
        var texteLien = $(this).data('texte-lien'); // Nouveau
        var sousDomaine = $(this).data('sous-domaine');
        var texteSousDomaine = $(this).data('texte-sous-domaine'); // Nouveau

        // Injecter les données dans la modale
        $('#lightbox-photo').attr('src', url);
        $('#lightbox-title').text(title);
        $('#lightbox-langage').text(langage);
        $('#lightbox-category').text(category);
        $('#lightbox-description').text(description);
        $('#lightbox-competences').text(competences);
        
        // Mise à jour du bouton du lien principal
        if (lien) {
            $('#lightbox-link').attr('href', lien).attr('target', '_blank');
        }
        $('#lightbox-link').text(texteLien || "Dossier");

        // Mise à jour du bouton du sous-domaine
        if (sousDomaine) {
            $('#lightbox-sous-domaine').attr('href', sousDomaine).attr('target', '_blank');
        }
        $('#lightbox-sous-domaine').text(texteSousDomaine || "Ouvrir");

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
            currentIndex = images.length - 1;
        }

        var prevImage = images[currentIndex];
        updateLightbox(prevImage);
    });

    // Navigation suivante
    $('#lightbox-next').click(function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        var nextImage = images[currentIndex];
        updateLightbox(nextImage);
    });

    // Fermeture de la lightbox
    $('#close-lightbox').click(function() {
        $('#lightbox').fadeOut();
    });

    // Fonction de mise à jour du contenu de la lightbox
    function updateLightbox(image) {
        $('#lightbox-photo').attr('src', image.url);
        $('#lightbox-title').text(image.title);
        $('#lightbox-langage').text(image.langage);
        $('#lightbox-category').text(image.category);
        $('#lightbox-description').text(image.description);
        $('#lightbox-competences').text(image.competences);

        if (image.lien) {
            $('#lightbox-link').attr('href', image.lien).attr('target', '_blank');
        }
        $('#lightbox-link').text(image.texteLien || "Dossier");

        if (image.sousDomaine) {
            $('#lightbox-sous-domaine').attr('href', image.sousDomaine).attr('target', '_blank');
        }
        $('#lightbox-sous-domaine').text(image.texteSousDomaine || "Ouvrir");
    }
});
