document.addEventListener("DOMContentLoaded", function () {
  const portfolioSection = document.querySelector(".section-portfolio");
  const menu = document.querySelector(".menu-header-container");
  const burger = document.querySelector(".burger-menu");
  const footer = document.querySelector(".main-footer");

  const isPortfolioPage = window.location.pathname.includes("portfolio");

  if (isPortfolioPage || portfolioSection) {
    // Ajouter la classe 'portfolio-active' au menu, au burger et au footer
    menu.classList.add("portfolio-active");
    burger.classList.add("portfolio-active");
    footer.classList.add("portfolio-active");
  } else {
    // Enlever la classe si on n'est pas sur la page Portfolio
    menu.classList.remove("portfolio-active");
    burger.classList.remove("portfolio-active");
    footer.classList.remove("portfolio-active");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector(".main-header");
  const container = document.querySelector(".container");
  const menu = document.querySelector(".menu-header-container");
  const burger = document.querySelector(".burger-menu");
  const footer = document.querySelector(".main-footer");

  const isCompetencesPage = window.location.pathname.includes("competences");

  if (isCompetencesPage) {
    // Ajouter une classe spécifique au menu pour la page compétences
    main.classList.add("competences-active");
    container.classList.add("competences-active");
    menu.classList.add("competences-active");
    burger.classList.add("competences-active");
    footer.classList.add("competences-active");
  } else {
    // Optionnel : Retirer la classe si nécessaire
    main.classList.remove("competences-active");
    container.classList.remove("competences-active");
    menu.classList.remove("competences-active");
    burger.classList.remove("competences-active");
    footer.classList.remove("competences-active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector(".main-header");
  const container = document.querySelector(".container");
  const menu = document.querySelector(".menu-header-container");
  const burger = document.querySelector(".burger-menu");
  const footer = document.querySelector(".main-footer");

  const isCompetencesPage = window.location.pathname.includes("competences");

  function updateMenuOnResize() {
    if (window.innerWidth <= 928) {
      // À une taille d'écran <= 928px, basculer vers portfolio-active
      main.classList.remove("competences-active");
      container.classList.remove("competences-active");
      menu.classList.remove("competences-active");
      burger.classList.remove("competences-active");
      footer.classList.remove("competences-active");

      main.classList.add("portfolio-active");
      container.classList.add("portfolio-active");
      menu.classList.add("portfolio-active");
      burger.classList.add("portfolio-active");
      footer.classList.add("portfolio-active");
    } else {
      // À une taille d'écran > 928px, garder competences-active
      if (isCompetencesPage) {
        main.classList.add("competences-active");
        container.classList.add("competences-active");
        menu.classList.add("competences-active");
        burger.classList.add("competences-active");
        footer.classList.add("competences-active");

        main.classList.remove("portfolio-active");
        container.classList.remove("portfolio-active");
        menu.classList.remove("portfolio-active");
        burger.classList.remove("portfolio-active");
        footer.classList.remove("portfolio-active");
      }
    }
  }

  // Appeler la fonction de mise à jour au chargement initial
  updateMenuOnResize();

  // Ajouter un événement pour écouter les changements de taille de la fenêtre
  window.addEventListener("resize", updateMenuOnResize);
});
