$(document).ready(() => {
    $('.preloader').addClass('preloader-hiden');
    setTimeout(() => {$('.preloader').css('display', 'none')}, 500);
});

// активация кнопки меню
// функция по нажатию на кнопку
$('.menu-btn').on('click', function (e) {
    // добавляю кнопке класс делающей её "крестиком"
    $('.menu-btn').toggleClass('menu-btn_active');
    // отображаю заливку страницы с помощью класса
    $('.fill').toggleClass('fill--active');
    $('.fill').css('opacity', '1')
    // выдвигаю сайдбар меню
    $('.menu').toggleClass('menu--show');
});
// деактивация кнопки меню
// функция по нажатию на заливку
$('.fill').on('click', function () {
    // делаю кнопку меню обычной
    $('.menu-btn').toggleClass('menu-btn_active');
    // выдвигаю сайдбар меню
    $('.menu').toggleClass('menu--show');
    $('.fill').css('opacity', '0')
    setTimeout(() => {
        // убираю заливку
        $('.fill').removeClass('fill--active');
    }, 200)
});