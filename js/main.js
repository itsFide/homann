const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//  Burger
let burger = document.querySelector(".header-burger")
let mobileMenu = document.querySelector(".mobile-menu")
burger.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('active')
    burger.classList.toggle('active')
})
