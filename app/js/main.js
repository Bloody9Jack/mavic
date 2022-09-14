$('.scroll__btn').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 500,
        easing: "swing"
    });

    return false;
});
$(function() {
    $('.products__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '  <button class="slider-btn slider-left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" stroke="white"/></svg></button>',
        nextArrow: ' <button class="slider-btn slider-right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999993 17L9.21838 9L0.999993 1" stroke="white"/></svg></button>',
        infinite: false,
        responsive: [{
                breakpoint: 480,
                settings: {
                    arrows: false,
                }
            }

        ]
    })
    $('.questions__item-title').on('click', function() {
        $('.questions__item').removeClass('questions__item--active');
        $(this).parent().addClass('questions__item--active');
    });

    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
        menu: '#header__nav',
        anchors: ['top', 'products', 'benefits', 'specification', 'questions', 'contacts'],
    });
    $('.menu__btn').on('click', function() {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });
    $('.menu__list-link').on('click', function() {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
    });
});