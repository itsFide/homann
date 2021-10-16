const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 20,
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
let burgerClose = document.querySelector(".mobile-menu-close")
let mobileMenu = document.querySelector(".mobile-menu")
burger.addEventListener('click', ()=>{
    mobileMenu.classList.add('active')
    burger.classList.add('active')
    
})
burgerClose.addEventListener('click', ()=>{
    mobileMenu.classList.remove('active')
})
