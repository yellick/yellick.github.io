$(document).ready(() => {
    $('.preloader').addClass('preloader-hiden');
    setTimeout(() => {
        $('.preloader').css('display', 'none')
    }, 500);
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
    
    if (scrollDistance >= $('.title').height()) {
        $('.header').addClass('header--active')
    } else if (scrollDistance <= 400) {
        $('.header').removeClass('header--active')
    };
});

// работа слайдера
function slider() {


    let data = [
        {
            image: 'img/car.jpg',
            name: 'Каршеринг'
        },
        {
            image: 'img/dala_dala.jpg',
            name: 'Дала-Дала (маршрутка)'
        },
        {
            image: 'img/taxi.jpg',
            name: 'Такси'
        },
    ];

    let index = 0;

    // добавляю точки в слайдер
    function dotsCount() {

        // узнаю кол-во элементов слайдера
        let countElement = data.length;

        for (let i = 1; i <= countElement; i++) {

            let dots = document.getElementById('dots');

            let dot = document.createElement('div');
            dot.classList.add('slider__management__dots__dot');

            dots.appendChild(dot);
        }
    };

    function sliderContent(index) {
        let img = document.getElementById('slider_img');
        let text = document.getElementById('slider_text');
        img.setAttribute('src', data[index]['image']);
        text.textContent = data[index]['name'];
    }

    function changeActiveDot() {
        let dots = document.getElementsByClassName('slider__management__dots__dot');

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('slider__management__dots__dot--active')
        };

        dots[index].classList.add('slider__management__dots__dot--active')
    }


    let btnPrev = document.getElementById('slider__management__btn__prev');
    let btnNext = document.getElementById('slider__management__btn__next');

    $(btnPrev).click(() => {

        if (index == 0) {
            index = data.length - 1;
            sliderContent(index)
            changeActiveDot()
        } else {
            index--;
            sliderContent(index)
            changeActiveDot()
        }
    })

    $(btnNext).click(() => {
        if (index == data.length - 1) {
            index = 0;
            sliderContent(index)
            changeActiveDot()
        } else {
            index++;
            sliderContent(index)
            changeActiveDot()
        }
    })


    dotsCount()
    sliderContent(index)
    changeActiveDot()
}

slider()