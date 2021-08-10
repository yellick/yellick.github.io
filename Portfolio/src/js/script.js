// данные блога и кейсов  
let cases = document.getElementById('cases');
let blogs = document.getElementById('blogs');

// скролл по кнопке
$('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top
    })
});

// подсчитываю, создаю и добавляю кейсы на страницу
function caseSort() {

    function casesCount(type) {

        // перебираю классы у всех проектов
        data['projects'].forEach((item, i, arr) => {

            // переменная определяющая, будет ли добавлен данный кейс
            let addendum = false;

            // если введённый тип есть в списке то добавляю элемент на страницу
            item['class'].forEach((item, i) => {
                if (type == item) {
                    addendum = true;
                }
            });

            // не в теле forEach потому что и так работает, а в forEach нужно переделывать
            if (addendum) {

                // создаю элементы
                let Case = document.createElement('div');
                let caseFill = document.createElement('div');
                let caseInfo = document.createElement('div');
                let caseTitle = document.createElement('p');
                let caseType = document.createElement('p');
                let caseBtnLink = document.createElement('a');
                let caseBtn = document.createElement('button');

                // задаю для каждого из созданных элементов класс
                caseFill.classList.add('case-fill');
                caseInfo.classList.add('case-info');
                caseTitle.classList.add('case-title');
                caseType.classList.add('case-type');
                caseBtn.classList.add('case-btn');
                caseBtnLink.classList.add('case-btn-link');
                Case.classList.add('case');

                // даю некоторым элементам значение из data
                caseTitle.textContent = item['name'];
                caseType.textContent = item['tools'];
                caseBtn.textContent = 'Узнать больше';

                // item это элемент массива projects
                $(Case).css('background', item['bg']);
                caseBtnLink.setAttribute('onclick', 'enableSlider(' + i + ')');

                // добавляю элементы на страницу
                Case.appendChild(caseFill);
                caseFill.appendChild(caseInfo);
                caseInfo.appendChild(caseTitle);
                caseInfo.appendChild(caseType);
                caseFill.appendChild(caseBtnLink);
                caseBtnLink.appendChild(caseBtn);
                cases.appendChild(Case);
            }
        });
    };

    // удаляю активный класс у всех кнопок
    function activeClass() {
        $('.cases-btn').removeClass('case-btn-active');
    };

    $('#case-btn-all').click(() => {

        activeClass();
        $('#case-btn-all').addClass('case-btn-active');

        let type = 'all';

        cases.innerHTML = '';

        casesCount(type);

    });

    $('#case-btn-html').click(() => {

        activeClass();
        $('#case-btn-html').addClass('case-btn-active');

        let type = 'html';

        cases.innerHTML = '';

        casesCount(type)

    });

    $('#case-btn-js').click(() => {

        activeClass();
        $('#case-btn-js').addClass('case-btn-active');

        let type = 'js';

        cases.innerHTML = '';

        casesCount(type)

    });

    casesCount('all')
};

// создаю блоки блога
data['blog'].forEach((item, i) => {

    let blogBlock = document.createElement('a');
    let blogBlockContent = document.createElement('div');
    let blogBlockImg = document.createElement('img');
    let blogBlockTitle = document.createElement('p');
    let blogBlockDate = document.createElement('p');
    let blogBlockUnderline = document.createElement('div');
    let blogBlockDiscription = document.createElement('p');

    let num = i + 1;
    blogBlock.classList.add('blog-block', 'wow', 'ac-' + num);
    blogBlockContent.classList.add('blog-block-content');
    blogBlockImg.classList.add('blog-block-img');
    blogBlockTitle.classList.add('blog-block-title');
    blogBlockDate.classList.add('blog-block-date');
    blogBlockUnderline.classList.add('blog-block-underline');
    blogBlockDiscription.classList.add('blog-block-disc');


    //blogBlock.setAttribute('onclick', 'completionBlogPage(' + i + ')');
    blogBlock.setAttribute('href', item['link']);
    blogBlockImg.setAttribute('src', item['img'])


    blogBlockTitle.textContent = item['title'];
    blogBlockDate.textContent = item['date'];
    blogBlockDiscription.textContent = item['discription'];


    blogBlockContent.appendChild(blogBlockImg);
    blogBlockContent.appendChild(blogBlockTitle);
    blogBlockContent.appendChild(blogBlockDate);
    blogBlockContent.appendChild(blogBlockDate);
    blogBlockContent.appendChild(blogBlockUnderline);
    blogBlockContent.appendChild(blogBlockDiscription);
    blogBlock.appendChild(blogBlockContent);
    blogs.appendChild(blogBlock);

});

/* изменение активного пункта меню */
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();

    $('.section').each((i, el) => {
        /* - $('nav').outerHeight()  */
        if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance + ($(window).height() * 0.5)) {

            $('nav ul a li').each((i, el) => {

                if ($(el).hasClass('active')) {
                    $(el).removeClass('active');
                }
            });

            $('nav ul a:eq(' + i + ')').find('li').addClass('active');
        };
    });

    if (scrollDistance >= $('header').height()) {
        $('nav').addClass('nav-top')
    } else if (scrollDistance < $('header').height()) {
        $('nav').removeClass('nav-top')
    };
});

// для отложенных анимаций
new WOW().init();

// активация кнопки меню
// функция по нажатию на кнопку
$('.menu-btn').on('click', function (e) {
    // отменяю событие перехода по ссылкке
    e.preventDefault();
    // добавляю кнопке класс делающей её "крестиком"
    $('.menu-btn').toggleClass('menu-btn_active');
    // отображаю заливку страницы с помощью класса
    $('.fill').toggleClass('fill-active');
    $('body').css('overflow', 'hidden')
    // выдвигаю сайдбар меню
    $('.sidebar-menu').toggleClass('sidebar-menu-show');
});
// деактивация кнопки меню
// функция по нажатию на заливку
$('.fill').on('click', function () {
    // делаю кнопку меню обычной
    $('.menu-btn').toggleClass('menu-btn_active');
    // убираю заливку
    $('.fill').toggleClass('fill-active');
    $('body').css('overflow', 'visible')
    // задвигаю сайдбар
    $('.sidebar-menu').toggleClass('sidebar-menu-show');
});
// функция по нажатию на пункт меню
$('.sidebar-menu_item').on('click', function () {
    // делаю кнопку меню обычной
    $('.menu-btn').toggleClass('menu-btn_active');
    // убираю заливку
    $('.fill').toggleClass('fill-active');
    $('body').css('overflow', 'visible')
    // задвигаю сайдбар
    $('.sidebar-menu').toggleClass('sidebar-menu-show');
});

// заполнение шкалы навыков
function intObs() {

    let options = {
        threshole: [0]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.about-my-skills');

    elements.each((i, el) => {
        observer.observe(el);
    });

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                // html
                $('#skillHtmlScale').addClass('skillHtmlScale');
                // css
                $('#skillCssScale').addClass('skillCssScale');
                // js
                $('#skillJsScale').addClass('skillJsScale');
                // react
                $('#skillReactScale').addClass('skillReactScale');
                // angular
                $('#skillAngularScale').addClass('skillAngularScale');
                // node
                $('#skillNodeScale').addClass('skillNodeScale');
                // ruby
                $('#skillRubyScale').addClass('skillRubyScale');
                // design
                $('#skillDesignScale').addClass('skillDesignScale');
                // photoshop
                $('#skillPhotoshopScale').addClass('skillPhotoshopScale');
                // sketch
                $('#skillSketchScale').addClass('skillSketchScale');

            }
        });
    }

};

// отмена функции при отправке формы и вызов алерт
$('form').submit(function (e) {
    e.preventDefault();

    $.ajax({
        type: 'POST',
        url: 'php/mail.php',
        data: $(this).serialize()
    }).done(function () {
        $('.contact-form').find('input').val('');
        $('.contact-form').find('textarea').val('');
        alert('Спасибо за сообщение, оно успешно доставлено!  :)')
    });
    return false
});

// размер модального окна
if (window.screen.width >= 768) {
    $('.case-modal').width($('.case-modal').height());
}

// высчитываюю высоту эллементов модалки
// размеры слайдера
$('#case-modal-slider').height(($('#case-modal-slider').width() / 2))
//размеры контента
$('#case-modal-content').height(($('.case-modal').height() - $('#case-modal-slider').height() - 100))

// модалка в портфолио
function enableSlider(num) {

    let casesData = data['projects'][num];

    // переменные для слайдера
    let index = 0;
    let img = document.getElementById('modal-img');
    let counter = document.getElementById('counter');

    // переменные для заполнения окна
    let client = document.getElementById('client');
    let price = document.getElementById('price');
    let caseLink1 = document.getElementById('case-link1');
    let caseLink2 = document.getElementById('case-link2');
    let aboutProjectTitle = document.getElementById('about-project-title');
    let aboutProjectP = document.getElementById('about-project-p');

    // заполняю контент и аттрибуты
    client.textContent = casesData['modal']['client'];
    client.setAttribute('href',casesData['modal']['clientLink']);
    price.textContent = casesData['modal']['price'];
    counter.textContent = index + 1 + '/' + casesData['modal']['images'].length;
    aboutProjectTitle.textContent = casesData['modal']['projectName'];
    aboutProjectP.textContent = casesData['modal']['aboutProject'];
    caseLink1.setAttribute('href', casesData['modal']['link'])
    caseLink2.setAttribute('href', casesData['modal']['link'])
    img.setAttribute('src', casesData['modal']['images'][index]);
    img.setAttribute('href', casesData['modal']['images'][index]);
    img.classList.add('image-link');
    
    // модалка с картинками
    $('.image-link').magnificPopup({type: 'image'});
    
    // переключатели
    // следующая картинка
    $('#left-arrow').on('click', function () {
        index--;

        if (index < 0) {
            index = casesData['modal']['images'].length - 1;
        }

        counter.textContent = index + 1 + '/' + casesData['modal']['images'].length

        img.setAttribute('src', casesData['modal']['images'][index]);
    });
    // предыдущая картинка
    $('#right-arrow').on('click', function () {
        index++;

        if (index > casesData['modal']['images'].length - 1) {
            index = 0;
        }

        counter.textContent = index + 1 + '/' + casesData['modal']['images'].length

        img.setAttribute('src', casesData['modal']['images'][index]);
    });
}

intObs();
caseSort();

// открытие и закрытие модального окна
$('#close-btn').on('click', function () {
    $('.case-modal-wrap').toggleClass('case-modal-active');
    $('body').css('overflow', 'visible')
});
$('.case-btn-link').on('click', function () {
    $('.case-modal-wrap').toggleClass('case-modal-active');
    $('body').css('overflow', 'hidden')
});
