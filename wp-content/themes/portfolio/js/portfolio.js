// Ajoute un événement au clic pour ouvrir la lightbox
document.querySelectorAll('[data-lightbox]').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        // Récupérer les données associées à cette image
        var description = item.getAttribute('data-photo-description');
        var competences = item.getAttribute('data-photo-competences');
        var lien = item.getAttribute('data-photo-link');
        var imageSrc = item.getAttribute('data-photo-url');
        var title = item.getAttribute('data-photo-title');
        var permalink = item.getAttribute('data-photo-permalink');

        // Remplir les champs de la modale
        document.getElementById('lightbox-title').textContent = title;
        document.getElementById('lightbox-photo').src = imageSrc;
        document.getElementById('lightbox-permalink').setAttribute('href', permalink);
        document.getElementById('lightbox-description').textContent = description || 'Aucune description disponible.';
        document.getElementById('lightbox-competences').textContent = competences || 'Aucune compétence disponible.';
        document.getElementById('lightbox-url').setAttribute('href', lien || '#');

        // Afficher la modale
        document.getElementById('lightbox').classList.add('active');
    });
});

// Fermeture de la modale
document.getElementById('close-lightbox').addEventListener('click', function() {
    document.getElementById('lightbox').classList.remove('active');
});
