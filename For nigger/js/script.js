let nextSect = 2;

function progress() {
    let delay = 100;
    let i = 0;

    let progressFilling = setInterval(() => {
        $('#progress-bar--value').html(i);
        $('#progress-bar--bar').css('width', i + '%');
        i++;

        /* appending circle every */
        if (i % 10 == 0) {
            appendCircle();
        };
        /* exit from setInterval */
        if (i == 101) {

            $('.section').removeClass('section--active');
            setTimeout(() => {
                $('.sect-' + nextSect).addClass('section--active');
                nextSect++;
                showCongratulation();
            }, 500)

            clearInterval(progressFilling);
        };
    }, delay);

}

function appendCircle() {
    let circle = document.createElement('div');
    let circleCont = document.createElement('div');
    let circleBox = document.createElement('div');
    $(circle).addClass('circle');
    $(circleCont).addClass('circle-cont');
    $(circleBox).addClass('circle-box');
    $(circleBox).append(circle)
    $(circleCont).append(circleBox)
    $('.circles').append(circleCont)
};

function appendPhrases() {
    let phrase1 = document.createElement('div');
    let phrase2 = document.createElement('div');
    let phrase3 = document.createElement('div');
    let phrase4 = document.createElement('div');
    let phrase5 = document.createElement('div');

    $(phrase1).addClass('phrase');
    $(phrase2).addClass('phrase');
    $(phrase3).addClass('phrase');
    $(phrase4).addClass('phrase');
    $(phrase5).addClass('phrase');

    phrase1.setAttribute('id', 'phrase-1')
    phrase2.setAttribute('id', 'phrase-2')
    phrase3.setAttribute('id', 'phrase-3')
    phrase4.setAttribute('id', 'phrase-4')
    phrase5.setAttribute('id', 'phrase-5')

    $('.sect-3').append(phrase1)
    $('.sect-3').append(phrase2)
    $('.sect-3').append(phrase3)
    $('.sect-3').append(phrase4)
    $('.sect-3').append(phrase5)
    console.log(1)
}

function showCongratulation() {
    let congratulation = [
        '',
        'Ну что же',
        'Сегодня у тебя день рождения',
        '16 лет бывает раз в жизни, как и любой другой возраст',
        '',

        'Чего бы тебе пожелать...',
        '',
        'Учись нормально',
        'Не болей',
        'Будь счастлива',

        'Ты ахуенная)',
        'У тебя красивое лицо, что бы ты не говорила',
        'Ты милая',
        'Весёлая',
        'И просто лучшая',

        'Ты добрая и заботливая',
        'Я',
        'Тебя',
        'Люблю',
        'И обожаю)',

        '',
        '',
        'Спасибо за то что ты есть!',
        '',
        ''
    ]

    appendPhrases();

    let i = 0;
    $('#phrase-1').html(congratulation[i]);
    $('#phrase-2').html(congratulation[i + 1]);
    $('#phrase-3').html(congratulation[i + 2]);
    $('#phrase-4').html(congratulation[i + 3]);
    $('#phrase-5').html(congratulation[i + 4]);
    i += 5;

    let interval = setInterval(() => {

        $('#phrase-1').html(congratulation[i]);
        $('#phrase-2').html(congratulation[i + 1]);
        $('#phrase-3').html(congratulation[i + 2]);
        $('#phrase-4').html(congratulation[i + 3]);
        $('#phrase-5').html(congratulation[i + 4]);
        i += 5;
        if (i >= 25) {
            setTimeout(() => {
                $('.section').removeClass('section--active');
                setTimeout(() => {
                    $('.sect-' + nextSect).addClass('section--active');
                    nextSect++;
                }, 500)
            }, 5000)

            clearInterval(interval);
        }
    }, 8000)
}


$('#start').click(function () {
    appendCircle()

    $('.section').removeClass('section--active');
    setTimeout(() => {
        $('.sect-' + nextSect).addClass('section--active');
        nextSect++;
        progress();
    }, 500)
});
