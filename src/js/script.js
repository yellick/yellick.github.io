let typeSite;
let design;
let adaptability;
let cost = 0;

function calcSiteCost() {
    if (confirm('Расчитать примерную стоимость сайта?')) {
        getTypeSite();
    };
}

function getTypeSite() {
    typeSite = prompt('Какой сайт вам нужен? \n 1) Сайт-визитка (5000 р.) \n 2) Лендинг (5000 р.) \n 3) Другое (...) \n 4) Связаться со мной');

    if (typeSite == 1) {
        cost += 5000;
        getStyle();
    } else if (typeSite == 2) {
        cost += 5000;
        getStyle();
    } else if (typeSite == 3) {
        cost += 0;
        getTypeSiteOther()
    } else if (typeSite == 4) {
        alert('Спуститесь в самый низ сайта либо нажмите на кнопку "контакты" в меню')
    } else if (typeSite === null) {
        /* кнопка отмены */
    } else {
        alert('Некорректный ввод, повторите снова');
        getTypeSite();
    };
};

function getTypeSiteOther() {
    typeSite = prompt('Другие типы: \n 1) Корпоративный сайт (20000 р.) \n 2) Интрернет магазин (20000 р.) \n 3) Блог (10000 р.) \n\n Не нашли нужный ваи тип или не знаете какой именно нужен? Вернитесь назад (цифра 4) и выберите пункт "Связаться со мной" \n\n 4) Назад')

    if (typeSite == 1) {
        cost += 20000;
        getStyle();
    } else if (typeSite == 2) {
        cost += 20000;
        getStyle();
    } else if (typeSite == 3) {
        cost += 20000;
        getStyle();
    } else if (typeSite == 4) {
        getTypeSite();
    } else if (typeSite === null) {
        /* кнопка отмены */
    } else {
        alert('Некорректный ввод, повторите снова');
        getTypeSiteOther();
    };
};

function getStyle() {
    design = prompt('Какой дизайн вы хотите? \n 1) Шаблонный дизайн (2000 р.) \n 2) По макету (2000 р.) \n 3) Уникальный дизайн (...) \n 4) Связаться со мной');

    if (design == 1) {
        cost += 2000;
        getAdaptability();
    } else if (design == 2) {
        cost += 2000;
        getAdaptability();
    } else if (design == 3) {
        cost += 3000;
        getAdaptability();
    } else if (design == 4) {
        alert('Спуститесь в самый низ сайта либо нажмите на кнопку "контакты" в меню')
    } else if (design === null) {
        /* кнопка отмены */
    } else {
        alert('Некорректный ввод, повторите снова');
        getStyle();
    };
};

function getAdaptability() {
    adaptability = prompt('Как будет адаптирован ваш сайт? \n 1) Только под компьютеры (1000 р.) \n 2) Только под телефоны (1500 р.) \n 3) Полностью адаптивный (2500 р.) \n 4) Связаться со мной');

    if (adaptability == 1) {
        cost += 1000;
        showCostSite();
    } else if (adaptability == 2) {
        cost += 1500;
        showCostSite();
    } else if (adaptability == 3) {
        cost += 3000;
        showCostSite();
    } else if (adaptability == 4) {
        alert('Спуститесь в самый низ сайта либо нажмите на кнопку "контакты" в меню')
    } else if (adaptability === null) {
        /* кнопка отмены */
    } else {
        alert('Некорректный ввод, повторите снова');
        getAdaptability();
    };

};

function showCostSite() {
    alert('Примерная стоимость такого сайта: ' + cost + ' р. \n\n ВНИМАНИЕ: стоимость ПРИМЕРНАЯ а значит может меняться в большую или меньшую сторону в зависимости от объёма работы по моему усмотрению \n\n Для офоормления заказа свяжитесь со мной нажав на кнопку "контакты" либо пролистав сайт до конца. \n\n Сроки выполнения зависят от сложности заказа и могут обсуждаться');
};

setTimeout(calcSiteCost, 1000);