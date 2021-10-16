const swiper = new Swiper('.galleria-slider', {
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
      nextEl: '.slider-next2',
      prevEl: '.slider-prev2',
    },
    thumbs:{
        swiper:{
            el:".image-mini-slider",
            slidesPerView: 5,
            navigation: {
                nextEl: '.slider-next2',
                prevEl: '.slider-prev2',
            },
            breakpoints:{
                320:{
                    slidesPerView:2,
                    spaceBetween: 10,
                },
                700:{
                    slidesPerView: 2,
                },
                1080:{slidesPerView:3,},
                1415:{slidesPerView:4},
                1750:{slidesPerView:5},
            }
        }
    }
  });
  const swiper2 = new Swiper('.slider', {
    // Optional parameters
    loop: true,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
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
  