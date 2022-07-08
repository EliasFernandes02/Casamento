let menu = document.querySelector('#menu-bar');

let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');

});

window.onscroll = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
}
