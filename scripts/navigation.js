const navButton = document.querySelector("#nav-button");
const nav = document.querySelector('.navigation')


navButton.addEventListener ('click', () => {
    navButton.classList.toggle('show');
    nav.classList.toggle('show');
});


