document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.menu-header-container'); // Menu mobile
    const footer = document.querySelector('.main-footer'); // Sélection du footer

    if (burgerMenu && mobileMenu && footer) {
       

        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileMenu.classList.toggle('menu-open');
            footer.classList.toggle('footer-visible'); // Ajoute une classe pour afficher le footer
            

        });

      /*  window.addEventListener('scroll', () => {
            burgerMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileMenu.classList.toggle('menu-open');
            footer.classList.toggle('footer-visible'); // Ajoute une classe pour afficher le footer
            

        });*/

        mobileMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                burgerMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
                mobileMenu.classList.remove('menu-open');
                footer.classList.remove('footer-visible'); // Cache le footer

            }
        });
    } else {
        console.log('Burger Menu, Mobile Menu, or Footer not found!');
    }
});
