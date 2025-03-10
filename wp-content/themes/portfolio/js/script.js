document.addEventListener("DOMContentLoaded", function () {
    // Gestion des boutons individuels "Contact" avec des références spécifiques
    const contactLinks = document.querySelectorAll(".contact-link");

    if (contactLinks.length > 0) {
        console.log(`Trouvé ${contactLinks.length} boutons Contact.`);

        contactLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault(); // Empêche le comportement par défaut

                console.log("Clic sur le bouton Contact !");

              
            });
        });
    }

    // Gestion du lien "Contact" dans le menu
    const contactLink = document.querySelector("a[href='#contact']");

    if (contactLink) {
        

        contactLink.addEventListener("click", function (e) {
            e.preventDefault(); // Empêche le comportement par défaut du lien
            console.log("Clic sur le lien Contact !");
            openModal(); // Ouvre la modale
        });
    }

    // Fonction pour ouvrir la modale
    function openModal() {
        const modal = document.querySelector(".modal-overlay");
        if (modal) {
            modal.classList.add("open");
            console.log("La classe 'open' a été ajoutée à la modale.");
        } else {
            console.error("Modale introuvable !");
        }
    }

    // Fonction pour fermer la modale
    function closeModal() {
        const modal = document.querySelector(".modal-overlay");
        if (modal) {
            modal.classList.remove("open");
            console.log("La classe 'open' a été retirée de la modale.");
        }
    }

    // Sélection du bouton de fermeture et ajout des événements pour fermer la modale
    const modal = document.querySelector(".modal-overlay");
    const closeModalButton = document.querySelector(".modal-close");

    if (modal && closeModalButton) {
       
        // Ferme la modale en cliquant sur le bouton de fermeture
        closeModalButton.addEventListener("click", function () {
            console.log("Bouton de fermeture cliqué !");
            closeModal();
        });

        // Ferme la modale en cliquant en dehors de son contenu
        window.addEventListener("click", function (e) {
            if (e.target === modal) {
                console.log("Clic en dehors de la modale détecté !");
                closeModal();
            }
        });
    } else {
        console.log("Bouton de fermeture ou modale non trouvé.");
    }
});
