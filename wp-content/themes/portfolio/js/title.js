document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector(".main-header");
  const container = document.querySelector(".container");
  const menu = document.querySelector(".menu-header-container");
  const burger = document.querySelector(".burger-menu");
  const footer = document.querySelector(".main-footer");

  const path = window.location.pathname;
  const isHomePage = path === "/" || path.includes("index.html");
  const isPortfolioPage = path.includes("portfolio");
  const isCompetencesPage = path.includes("competences");

  function removeAllClasses() {
    main.classList.remove("portfolio-active", "competences-active");
    container.classList.remove("portfolio-active", "competences-active");
    menu.classList.remove("portfolio-active", "competences-active");
    burger.classList.remove("portfolio-active", "competences-active");
    footer.classList.remove("portfolio-active", "competences-active");
  }

  function applyPageSpecificClasses() {
    removeAllClasses();

    if (isCompetencesPage) {
      main.classList.add("competences-active");
      container.classList.add("competences-active");
      menu.classList.add("competences-active");
      burger.classList.add("competences-active");
      footer.classList.add("competences-active");
    } else if (isPortfolioPage) {
      main.classList.add("portfolio-active");
      container.classList.add("portfolio-active");
      menu.classList.add("portfolio-active");
      burger.classList.add("portfolio-active");
      footer.classList.add("portfolio-active");
    }
  }

  function handleResponsiveDesign() {
    removeAllClasses();

    if (window.innerWidth <= 928) {
    
        // Toutes les autres pages deviennent `portfolio-active`
        main.classList.add("portfolio-active");
        container.classList.add("portfolio-active");
        menu.classList.add("portfolio-active");
        burger.classList.add("portfolio-active");
        footer.classList.add("portfolio-active");
      
    } else {
      // Rétablir les classes normales au-dessus de 928px
      applyPageSpecificClasses();
    }
  }

  // Exécuter au chargement
  applyPageSpecificClasses();
  handleResponsiveDesign();

  // Surveiller les changements de taille d'écran
  window.addEventListener("resize", handleResponsiveDesign);
});
