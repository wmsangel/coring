$(function () {

    // SWIPER
    const welcomeSwiper = new Swiper('.js-welcome-swiper', {
        slidesPerView: "auto",
        spaceBetween: 34,
        navigation: {
            nextEl: '.js-welcome-swiper-next',
            prevEl: '.js-welcome-swiper-prev',
        },
        breakpoints: {
            320: {
                spaceBetween: 20
            },
            767: {
                spaceBetween: 34,
            },
        }

    });




    // THINK
    $('body').on('click', '.js-think-data-link', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('is-selected')) {
            let currentLinkData = $(this).data('think-status')
            $('.js-think-status-block, .js-think-data-link').removeClass('is-selected')
            let parent = $(this).parents('.c-think-data-links__info');

            $('.is-cloned').remove();
            $('.js-think-status-block[data-think-status="'+currentLinkData+'"]').clone().addClass('is-cloned').insertAfter(parent);
            $('.js-think-status-block[data-think-status="'+currentLinkData+'"]').addClass('is-selected')
            $(this).addClass('is-selected')
        }
    })



    // MENU
    $('body').on('click', '.js-menu', function (e) {
        e.preventDefault();
        let currentMenu = $(this).data('menu');
        if (!$(this).hasClass('is-selected')) {
            $('body, .js-site-menu[data-menu="'+currentMenu+'"]').addClass('is-menu-opened');
            $(this).addClass('is-selected')
        } else {
            $('body, .js-site-menu[data-menu="'+currentMenu+'"]').removeClass('is-menu-opened');
            $(this).removeClass('is-selected')
        }
    })
})