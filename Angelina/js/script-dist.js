$(document).ready(() => {
    $('.preloader').addClass('preloader-hiden');
    setTimeout(() => {$('.preloader').css('display', 'none')}, 500);
});

// активация кнопки меню
// функция по нажатию на кнопку
$('.menu-btn').on('click', function (e) {
    // добавляю кнопке класс делающей её "крестиком"
    $('.menu-btn').addClass('menu-btn_active');
    // отображаю заливку страницы с помощью класса
    $('.fill').addClass('fill--active');
    $('.fill').css('opacity', '1')
    // выдвигаю сайдбар меню
    $('.menu').addClass('menu--show');
});
// деактивация кнопки меню
// функция по нажатию на заливку
$('.fill').on('click', function () {
    // делаю кнопку меню обычной
    $('.menu-btn').removeClass('menu-btn_active');
    // выдвигаю сайдбар меню
    $('.menu').removeClass('menu--show');
    $('.fill').css('opacity', '0')
    setTimeout(() => {
        // убираю заливку
        $('.fill').removeClass('fill--active');
    }, 200)
});
// функция по нажатию на пункт меню
$('.menu_item').on('click', function () {
    // делаю кнопку меню обычной
    $('.menu-btn').removeClass('menu-btn_active');
    // выдвигаю сайдбар меню
    $('.menu').removeClass('menu--show');
    $('.fill').css('opacity', '0')
    setTimeout(() => {
        // убираю заливку
        $('.fill').removeClass('fill--active');
    }, 200)
});

// скролл по кнопке
$('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 75
    })
});

// изменение активного пункта меню
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();

    $('.paragraph').each((i, el) => {
        if ($(el).offset().top - $('header').outerHeight() <= scrollDistance + ($(window).height() * 0.5)) {

            $('nav a span').each((i, el) => {

                if ($(el).hasClass('menu_item--active')) {
                    $(el).removeClass('menu_item--active');
                }
            });

            $('nav a:eq(' + i + ')').find('span').addClass('menu_item--active');
        };
    });
});