document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card1, .card2, .card3");

    cards.forEach(card => {
        const lightbox = card.querySelector(".lightbox-comp");
        const closeBtn = lightbox.querySelector(".close");
        const lightboxTitle = lightbox.querySelector(".lightbox-title");
        const lightboxImage = lightbox.querySelector(".lightbox-image");
        const lightboxList = lightbox.querySelector(".lightbox-list");

        // Récupérer les informations de la carte
        const title = card.getAttribute("data-title");
        const listItems = card.getAttribute("data-list").split(", ");
        const imgSrc = card.querySelector("img") ? card.querySelector("img").src : "";

        // Affichage des informations dans la lightbox
        lightboxTitle.textContent = title;
        lightboxImage.src = imgSrc;
        lightboxList.innerHTML = "";
        
        listItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            lightboxList.appendChild(li);
        });

        // Affichage de la lightbox sur hover (sur desktop)
        card.addEventListener("mouseenter", () => {
            if (!isMobile()) {
                lightbox.style.display = "flex";
            }
        });

        // Masquage de la lightbox lorsque le curseur quitte la carte (sur desktop)
        card.addEventListener("mouseleave", () => {
            if (!isMobile()) {
                lightbox.style.display = "none";
            }
        });

        // Affichage de la lightbox au clic (sur mobile)
        card.addEventListener("click", () => {
            if (isMobile()) {
                lightbox.style.display = "flex";
            }
        });

        // Fermeture de la lightbox lorsque l'on clique sur la croix
        closeBtn.addEventListener("click", () => {
            lightbox.style.display = "none";
        });

        // Fermeture de la lightbox en cliquant en dehors de la lightbox
        lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    });

    // Fonction pour détecter si l'utilisateur est sur un appareil mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const skillsData = {
        techniques: [
            {
                category: "Front-end",
                description: "Connaissance dans les langages HTML5, CSS3, PHP, JavaScript, SASS/SCSS"
            },
            {
                category: "WordPress",
                description: "Personnalisations avancées des theme avec les langages PHP et JavaScript"
            },
            {
                category: "Performance et SEO",
                description: "Optimisation des performances, stratégies de référencement, amélioration de l'accessibilité"
            },
            {
                category: "Environnement",
                description: "Utilisation de Git, GitHub, VSCode, Local WP, XAMPP pour un workflow efficace"
            },
        ],
        methodologiques: [
            {
                category: "Gestion de projet",
                description: "Compréhension des méthodologies, planification et documentation technique"
            },
            {
                category: "Intégration",
                description: "Responsive design, maquettage, découpage avec Figma"
            },
            {
                category: "Qualité",
                description: "Tests unitaires et fonctionnels, debugging, Green IT"
            },
            {
                category: "Veille",
                description: "Suivi des évolutions techniques et bonnes pratiques"
            }
        ],
        relationnelles: [
            {
                category: "Communication",
                description: " Présentation en Visio de projets Professionnalisant"
            },
            {
                category: "Documentation",
                description: "Outils de curation et de productivité (Wakelet, Notion) et de création avec Power-Point"
            },
            {
                category: "Soft-Skills",
                description: "Travail en équipe, empathie, écoute active, gestion du stress"
            }
        ]
    };

    const buttons = document.querySelectorAll(".skills-button");

    function displaySkills(category) {
        if (!skillsData[category]) return;

       

        const skillsList = document.getElementById("skills-list");
        skillsList.innerHTML = ""; // Clear previous skills

        // Create a card for each skill
        skillsData[category].forEach(skill => {
            const card = document.createElement("div");
            card.classList.add("skill-card");

            const skillCategory = document.createElement("h3");
            skillCategory.textContent = skill.category;

            const skillDescription = document.createElement("p");
            skillDescription.textContent = skill.description;

            card.appendChild(skillCategory);
            card.appendChild(skillDescription);
            skillsList.appendChild(card);
        });
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const category = button.getAttribute("data-category");
         
              // Affiche les compétences correspondant au bouton cliqué
              displaySkills(category);

            // Supprime la classe active de tous les boutons
            buttons.forEach(btn => btn.classList.remove("active"));

            // Ajoute la classe active au bouton cliqué
            button.classList.add("active");

            const cardTitle = document.getElementById("card-title");
            if (cardTitle) {
                cardTitle.classList.add("hidden");

            }

        });
    });
});
