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


var swiper = new Swiper(".blog-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });