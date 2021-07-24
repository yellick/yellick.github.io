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

            // если введённый тип есть в списке то добавляю элемент на страницу
            if ((type == item['class'][0]) || (type == item['class'][1])) {

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
                Case.classList.add('case');

                // даю некоторым элементам значение из data
                caseTitle.textContent = item['name'];
                caseType.textContent = item['tools'];
                caseBtn.textContent = 'Узнать больше';

                $(Case).css('background', item['bgc']);
                caseBtnLink.setAttribute('href', item['href']);


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

    function activeClass() {
        $('.cases-btn').removeClass('case-btn-active');
    };

    $('#case-btn-all').click(() => {

        activeClass();
        $('#case-btn-all').addClass('case-btn-active');

        let type = 'all';
        console.log(type);

        cases.innerHTML = '';

        casesCount(type);

    });

    $('#case-btn-html').click(() => {

        activeClass();
        $('#case-btn-html').addClass('case-btn-active');

        let type = 'html';
        console.log(type);

        cases.innerHTML = '';

        casesCount(type)

    });

    $('#case-btn-js').click(() => {

        activeClass();
        $('#case-btn-js').addClass('case-btn-active');

        let type = 'js';
        console.log(type);

        cases.innerHTML = '';

        casesCount(type)

    });

    $('#case-btn-ruby').click(() => {

        activeClass();
        $('#case-btn-ruby').addClass('case-btn-active');

        let type = 'ruby';
        console.log(type);

        cases.innerHTML = '';

        casesCount(type)

    });

    casesCount('all')
}


// создаю блоки блога
/*data['blog'].forEach((item, i) => {

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
    blogBlock.setAttribute('target', '_blank');
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
wow.init();

caseSort()
