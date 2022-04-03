new Swiper('.examples__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
     },

     loop: true,

    slidesPerView: 3,

    breakpoints: {
        1170: {
            slidesPerView: 3,
        },
        960: {
            slidesPerView: 3,
        },
        720: {
            slidesPerView: 1,
        },

        620: {
            slidesPerView: 1,
        },

        320: {
            slidesPerView: 1,
        },
    },
});


new Swiper('.container__logo', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,

    autoplay: {
        delay: 1000, 
        disableOnInteraction: false,
    },

    slidesPerView: 5,

    breakpoints: {
        1170: {
            slidesPerView: 5,
        },
        960: {
            slidesPerView: 3,
        },
        720: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
        },
    },
});


function changeNav() {
    var header = document.getElementById('header'); 
    var headerClassLists = header.classList; 
    if(headerClassLists.contains('header_mobile')){ 
        headerClassLists.remove('header_mobile'); 
    } else { 
        headerClassLists.add('header_mobile'); 
    }
 }
 