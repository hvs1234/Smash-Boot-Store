// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})