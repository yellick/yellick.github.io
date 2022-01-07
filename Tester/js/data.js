let siteName = 'Tester';

// lessons list
let lessons = [
    {
        lesson: 'math',
        lessonName: 'Математика',
    },
    {
        lesson: 'lang_ru',
        lessonName: 'Русский язык',
    },
    {
        lesson: 'social_studies',
        lessonName: 'Обществознание',
    },
];

// all tests
let tests = [
    // математика
    {
        lesson: lessons[0]['lesson'],
        lessonName: lessons[0]['lessonName'],
        name: 'Сложение и вычитание',
        class: '1',
        questions: [
            {
                question: 'Сколько будет 2+2?',
                answers: ['2', '3', '4', '5'],
            },
            {
                question: 'Сколько будет 2+4?',
                answers: ['5', '6', '7', '8'],
            },
            {
                question: 'Сколько будет 3-1?',
                answers: ['2', '3', '4', '5'],
            },
            {
                question: 'Сколько будет 5+2?',
                answers: ['1', '3', '5', '7'],
            },
            {
                question: 'Сколько будет 5-5?',
                answers: ['0', '1', '2', '3'],
            },
        ],
        answers: ['2', '1', '0', '3', '0'],
    }, // 1
    {
        lesson: lessons[0]['lesson'],
        lessonName: lessons[0]['lessonName'],
        name: 'Сложение и вычитание',
        class: '11',
    },
    // русский язык
    {
        lesson: lessons[1]['lesson'],
        lessonName: lessons[1]['lessonName'],
        name: 'Текст и признаки текста',
        class: '2',
        questions: [
            {
                question: 'Является ли данная запись текстом?<br><br>Солнце часто прячется за тучи. Космонавты готовились к полёту. Коля читал интересную книгу. Мама пошла в магазин.',
                answers: [ 'да', 'нет'],
            },
            {
                question: 'Из чего состоит текст?',
                answers: [ 'предложений', 'звуков', 'слов'],
            },
            {
                question: 'Выберите правильное утверждение:',
                answers: [ 'предложения в тексте связаны между собой по смыслу', 'предложения в тексте не связаны между собой по смыслу'],
            },
            {
                question: 'Выделите ту последовательность предложений, которая представляет собой текст.<br><br>1. Молодое дерево теперь будет здорово.<br>2. Старый садовник осматривал деревья в саду.<br>3. Садовник закрыл трещину.<br>4. Он заметил трещину на стволе грушевого дерева.',
                answers: [ '1, 2, 3, 4', '2, 3, 4, 1', '2, 4, 3, 1', '4, 1, 3, 2'],
            },
            {
                question: 'Найдите лишнее предложение в тексте:<br><br>1)Быстро пролетело короткое северное лето.<br>2)Незаметно подкралась осень.<br>3)В октябре пошли холодные дожди.<br>4)Летом я люблю кататься на велосипеде.<br>5)Ночью уныло завывал ветер.<br>6)Он нагонял тяжёлые тучи.',
                answers: [ '1', '2', '3', '4', '5', '6'],
            },
        ],
        answers: [ '1', '0', '0', '2', '3'],
    }, // 2
    {
        lesson: lessons[1]['lesson'],
        lessonName: lessons[1]['lessonName'],
        name: 'Простые и сложные предложения',
        class: '3',
        questions: [
            {
                question: 'Сколько грамматических основ в сложном предложении?',
                answers: [ 'одна', 'две'],
            },
            {
                question: 'Какое это предложение?<br><br>По берегам реки растёт ива.',
                answers: [ 'простое', 'сложное'],
            },
            {
                question: 'Какое из предложений сложное:',
                answers: [ 'Лес встретил нас звонкими голосами птиц.', 'В саду поспели груши, яблоки, сливы.', 'Наступила зима, пришли морозы.'],
            },
            {
                question: 'Какое из предложений простое:',
                answers: [ 'Наступила весна, расцвели подснежники.', 'В лесу собирают подосиновики, подберёзовики, сыроежки.', 'Одеяло убежало, улетела простыня.'],
            },
            {
                question: 'Квкое это предложение? Когда я ступил на порог, мать кинулась мне на шею с объятьями.',
                answers: [ 'сложное', 'простое'],
            },
        ],
        answers: [ '1', '0', '2', '1', '0'],
    }, // 3
    {
        lesson: lessons[1]['lesson'],
        lessonName: lessons[1]['lessonName'],
        name: 'Орфография',
        class: '4',
        questions: [
            {
                question: 'Какое слово верно разделено для переноса?',
                answers: [ 'дли-нный', 'под-ъезд', 'сту-лья', 'тро-йка'],
            },
            {
                question: 'Укажи слово с удвоенной согласной "с".',
                answers: [ 'ка(с/сс)трюля', 'пере(с/сс)казал', 'прекра(с/сс)ная', 'ра(с/сс)тояние '],
            },
            {
                question: 'В каком прилагательном пишется окночание -ий?',
                answers: [ 'горяч... плиты', 'свеж... карп', 'син... рекой'],
            },
            {
                question: 'Найди проверочное слово к слову "сливать".',
                answers: [ 'слива', 'сливал', 'слил'],
            },
            {
                question: 'Отметь слово, в котором допущена ошибка.',
                answers: [ 'гладкий', 'лехкий', 'ловкий', 'меткий'],
            },
        ],
        answers: [ '2', '3', '1', '2', '1'],
    }, // 4
    {
        lesson: lessons[1]['lesson'],
        lessonName: lessons[1]['lessonName'],
        name: 'Правописание личных окончаний глаголов',
        class: '5',
        questions: [
            {
                question: 'В каком слове пишется буква "е"?',
                answers: [ 'Напиш..т', 'Постро..т', 'Вид..шь', 'Накле..шь'],
            },
            {
                question: 'В каком слове пишется буква "и"?',
                answers: [ 'На гитаре игра..т', 'В диване виднее..тся', 'Отскоч..т быстро', 'В блокноте запиш..т'],
            },
            {
                question: 'В каком слове пишется буква "е"?',
                answers: [ 'Мы наблюда..м', 'Держ..м за руки', 'Хорошо слыш..м', 'Около ступеньки останов..мся'],
            },
            {
                question: 'В каком слове пишется буква "и"?',
                answers: [ 'Выслушива..шь нотации', 'По сосульке снукн..т', 'Около волнушки увид..т', 'К веревке привяж..т'],
            },
            {
                question: 'В каком слове пишется буква "е"?',
                answers: [ 'В церкви рассмотр..шь', 'На стройке увид..м', 'Без собаки охраняя..т', 'Притвор..м дверь'],
            },
        ],
        answers: [ '0', '1', '0', '2', '2'],
    }, // 5
    // общество
    {
        lesson: lessons[2]['lesson'],
        lessonName: lessons[2]['lessonName'],
        name: 'Семья и семейные отношения',
        class: '5',
        questions: [
            {
                question: 'Как называется тип семей, в которых помимо родителей проживают бабушки и дедушки?',
                answers: ['двухпоколенные', 'трехпоколенные', 'четырехпоколенные'],
            },
            {
                question: 'Семьи, состоящие из скольких детей, получают материнский капитал?',
                answers: [ 'из двух', 'из трех', 'из четырех'],
            },
            {
                question: 'Как называется семья, в которой только один родитель?',
                answers: [ 'полная', 'неполная', 'неполноценная'],
            },
            {
                question: 'Где прописаны права ребёнка?',
                answers: [ 'в Детском кодексе', 'в Уголовном кодексе', 'в Семейном кодексе'],
            },
            {
                question: 'Кто изначально берет на себя ответственность и заботу о ребенке, если его родители лишены родительских прав?',
                answers: [ 'другая семья', 'государство', 'полиция'],
            },
            {
                question: 'Какова главная обязанность семьи?',
                answers: [ 'воспитание детей', 'забота о старших родственниках', 'забота о себе'],
            },
            {
                question: 'Кому традиционно принадлежит главенство в семье?',
                answers: [ 'отцу', 'матери', 'ребенку'],
            },
            {
                question: 'Кто традиционно руководил хозяйством в семье?',
                answers: [ 'дед', 'большуха', 'отец'],
            },
            {
                question: 'Кто такая большуха?',
                answers: [ 'женщина, жена, мать', 'женщина, мать, бабушка'],
            },
        ],
        answers: ['1', '0', '1', '2', '1', '0', '0', '1', '0'],
    }, // 5
    {
        lesson: lessons[2]['lesson'],
        lessonName: lessons[2]['lessonName'],
        name: 'Человек — личность',
        class: '6',
        questions: [
            {
                question: 'Как одним словом, назвать совокупность качеств человека, которые приобретаются им в процессе жизни в обществе, в деятельности и общении с другими людьми?',
                answers: ['характер', 'личность', 'нрав'],
            },
            {
                question: 'Укажите правильное определение слова «сознание».',
                answers: ['познавательная деятельность человека', 'направленность и сосредоточенность на определенном предмете', 'отношение человека к миру, понимание того, что он делает, как живет, о чем мечтает'],
            },
            {
                question: 'Кому свойственно сознание?',
                answers: ['человеку', 'животному', 'взрослым'],
            },
            {
                question: 'Какие качества необходимы для успешной учебы в школе?',
                answers: ['хитрость, скрытность, лживость', 'старательность, воля, целеустремленность', 'физическая сила, ловкость, гибкость'],
            },
            {
                question: 'Что отличает одного человека от другого?',
                answers: ['индивидуальность', 'цвет глаз', 'характер'],
            },
            {
                question: 'Определенные черты индивидуальности человек получает по наследству, другие благодаря социальным факторам. Перечислите их.',
                answers: ['семья, образование, друзья', 'генетика', 'режим отдыха и питания'],
            },
            {
                question: 'Кто из перечисленных деятелей обладал силой воли?',
                answers: ['Людвиг Ван Бетховен', 'Валерий Брумель', 'Михаил Ломоносов', 'все'],
            },
            {
                question: 'Чем прославился юноша-грек Герострат из Эфеса?',
                answers: ['победил Геракла', 'создал Троянского коня', 'поджег храм Артемиды'],
            },
            {
                question: 'В чем заключалась индивидуальность А. С. Пушкина?',
                answers: ['в умении логически мыслить', 'в способности к поэтическому творчеству', 'в ловкости в фехтовании'],
            },
            {
                question: 'Почему про человека говорят, что он «существо социальное»?',
                answers: ['развивается среди людей', 'живет в человеческом обществе', 'и то, и другое'],
            },
        ],
        answers: [ '1', '2', '0', '1', '0', '0', '3', '2', '1', '2',],
    }, // 6
    {
        lesson: lessons[2]['lesson'],
        lessonName: lessons[2]['lessonName'],
        name: 'Деньги, их функции',
        class: '7',
        questions: [
            {
                question: 'Что являлось самой ранней формой рыночных отношений?',
                answers: ['натуральный обмен', 'использование товаров-эквивалентов', 'металлические деньги'],
            },
            {
                question: 'Сколько функций денег принято выделять?',
                answers: ['у денег нет функций', 'пять функций', 'количество функций зависит от конкретной ситуации использования денег'],
            },
            {
                question: 'Деньги выступают в форме меры стоимости, так как...',
                answers: ['деньги отображают цену конкретного товара', 'деньгами можно измерить некоторые физические характеристики', 'деньги не отображают взаимоотношение стоимостей различных товаров'],
            },
            {
                question: 'Почему деньги могут выступать как средство обращения?',
                answers: ['деньги пришли на смену бартеру', 'не обязательно фактическое присутствие денег для совершения обмена', 'деньги являются мерой стоимости, а, следовательно, и средством обращения'],
            },
            {
                question: 'Что такое конвертируемость?',
                answers: ['возможность денег перемещаться из одно банка в другой', 'право использования конвертов для передачи денежных средств', 'способность одной валюты обмениваться на другую'],
            },
            {
                question: 'Что такое мировые деньги?',
                answers: ['деньги, потраченные на обеспечение мира в странах', 'средства осуществления международных связей', 'деньги всего мира, равно принадлежащие каждому человеку'],
            },
            {
                question: 'Где впервые появились деньги в форме монет?',
                answers: ['на территории Древнего Египта', 'в Вавилоне и Междуречье', 'в Китае и Малой Азии'],
            },
            {
                question: 'Как назывались бумажные деньги в России?',
                answers: ['ассигнации', 'банкноты', 'чеки'],
            },
            {
                question: 'По какому принципу государства стараются выпускать деньги?',
                answers: ['количество денег может быть неограниченным', 'денежная масса должна соответствовать товарной', 'государство выпускает деньги только в случае чрезвычайной ситуации'],
            },
            {
                question: 'Почему деньги выполняют функцию средства накопления?',
                answers: ['деньги возможно хранить, исходя из соответствующей потребности', 'деньги имеют свойство расти сами по себе'],
            },
        ],
        answers: [ '0', '1', '0', '0', '2', '1', '2', '0', '1', '0',],
    }, // 7
    {
        lesson: lessons[2]['lesson'],
        lessonName: lessons[2]['lessonName'],
        name: 'Мировое хозяйство и международная торговля',
        class: '8',
        questions: [
            {
                question: 'Мировое хозяйство появилось',
                answers: ['в конце XVII веке', 'в середине XIX века', 'в начале XX века'],
            },
            {
                question: 'Родина гиганта электроники Sony',
                answers: ['США', 'Китай', 'Япония'],
            },
            {
                question: 'В каком году Россия вступила в ВТО?',
                answers: ['в 1998 году', 'в 2012 году', 'Россия не является членом ВТО'],
            },
            {
                question: 'Откуда в Средние века привозили пряности в Европу?',
                answers: ['из стран Востока', 'из северных стран', 'ниоткуда не привозили, пряности выращивали в Европе'],
            },
            {
                question: 'Чему равен внешнеторговый оборот?',
                answers: ['объему импорта', 'объему экспорта', 'сумме стоимостей импорта и экспорта'],
            },
            {
                question: 'В международном разделении труда Россия представлена как поставщик...',
                answers: ['энергоресурсов', 'черных и цветных металлов', 'всего вышеперечисленного'],
            },
            {
                question: 'Если в стране начинает действовать политика протекционизма — это значит, что...',
                answers: ['доступ иностранных товаров на рынок ограничивается', 'поставки товаров на иностранные рынки сокращается', 'внутри страны повышаются цены на товары собственного производства'],
            },
            {
                question: '«Фритредерство» образовано от англоязычного выражения, означающего...',
                answers: ['«свободная торговля»', '«внутренняя торговля»', '«внешняя торговля»'],
            },
            {
                question: 'Кто устанавливает фиксированный курс валют?',
                answers: ['Национальный центральный банк', 'Валютная биржа', 'все вышеперечисленные организации'],
            },
            {
                question: 'В ходе формирования мирового хозяйства появился...',
                answers: ['Международный валютный фонд', 'Всемирный банк', 'Международная торговая организация', 'все вышеперечисленные организации'],
            },
        ],
        answers: [ '1', '2', '1', '0', '2', '2', '0', '0', '0', '3',],
    }, // 8
    {
        lesson: lessons[2]['lesson'],
        lessonName: lessons[2]['lessonName'],
        name: 'Правоотношения и субъекты права',
        class: '9',
        questions: [
            {
                question: 'К элементам, необходимым для правоотношений, не относится...',
                answers: ['объект правоотношений', 'субъект правоотношений', 'содержание правоотношений', 'форма правоотношений'],
            },
            {
                question: 'Обязанности участников правоотношений называют...',
                answers: ['моральными', 'практическими', 'юридическими'],
            },
            {
                question: 'Права участника правоотношений ограничивает...',
                answers: ['край дозволенного', 'ничего не ограничивает'],
            },
            {
                question: 'Ответственность за оскорбление чести и достоинства предусматривает...',
                answers: ['Уголовный кодекс РФ', 'Административный кодекс РФ', 'Гражданский кодекс РФ'],
            },
            {
                question: 'К физическим лицам в России относят...',
                answers: ['граждан РФ', 'иностранных граждан', 'беженцев', 'всех вышеперечисленных'],
            },
            {
                question: 'К юридическим лицам относят...',
                answers: ['коммерческие организации', 'некоммерческие организации', 'все вышеперечисленное'],
            },
            {
                question: 'С рождения у граждан РФ появляется...',
                answers: ['правоспособность', 'дееспособность', 'все вышеперечисленное'],
            },
            {
                question: 'С какого возраста дети несут ответственность за кражу?',
                answers: ['с 12 лет', 'с 14 лет', 'с 18 лет'],
            },
            {
                question: 'В каком возрасте граждане РФ получают паспорт?',
                answers: ['в 14 лет', 'в 16 лет', 'в 18 лет'],
            },
            {
                question: 'Что могут самостоятельно купить малолетние дети (от 6 до 14 лет)?',
                answers: ['билет в кино', 'мороженое', 'книгу', 'все вышеперечисленное'],
            },
        ],
        answers: [ '3', '2', '0', '1', '3', '2', '0', '1', '0', '3'],
    }, // 9
    {
        lesson: lessons[2]['lesson'],
        lessonName: lessons[2]['lessonName'],
        name: 'Духовная культура общества',
        class: '10',
        questions: [
            {
                question: 'Многообразие создаваемых человеком предметов это...',
                answers: ['материальная культура', 'духовная культура', 'культура'],
            },
            {
                question: 'Как называется продукт творческой работы духа над природными условиями?',
                answers: ['материальная культура', 'духовная культура', 'культура'],
            },
            {
                question: 'Через что проявляется духовная культура?',
                answers: ['искусство', 'различные формы общественного сознания', 'литературные памятники человеческой деятельности'],
            },
            {
                question: 'Что выражают мировоззренческо-философские ценности?',
                answers: ['самые основы человеческого бытия, соотносящие человека с миром', 'отношения между людьми с позиции противостояния должного и предписанного', 'представления о зле и добре'],
            },
            {
                question: 'Укажите ключевое мировоззренческое понятие:',
                answers: ['гуманизм', 'добро и зло', 'жизнь и смерть'],
            },
            {
                question: 'Что относится к числу нравственных ценностей в сфере личной жизни?',
                answers: ['дружба', 'справедливость', 'память'],
            },
            {
                question: 'Какие ценности связанны с выявлением, переживанием, созданием гармонии?',
                answers: ['религиозные', 'нравственные', 'эстетические'],
            },
            {
                question: 'Укажите религиозную ценность:',
                answers: ['красота', 'милосердие', 'достоинство'],
            },
            {
                question: 'К какой функции культуры относится отбор ценностей, обогащение традиций?',
                answers: ['оценочной', 'регулятивной', 'информативной'],
            },
            {
                question: 'Для какой культуры характерно отсутствие автора?',
                answers: ['элитарной', 'массовой', 'народной', 'всех'],
            },
        ],
        answers: [ '0', '2', '1', '0', '2', '0', '2', '1', '0', '2'],
    }, // 10
    {
        lesson: lessons[2]['lesson'],
        lessonName: lessons[2]['lessonName'],
        name: 'Демографическая ситуация в современной России',
        class: '11',
        questions: [
            {
                question: 'Что такое демография?',
                answers: ['Наука о наследственном здоровье человека и путях его улучшения, о методах влияния на наследственные качества будущих поколений с целью их совершенствования', 'Наука о естественном человеческом языке вообще и обо всех языках мира как индивидуальных его представителях', 'Наука о численности, составе и тенденциях изменения народонаселения'],
            },
            {
                question: 'Сколько составила численность населения Российской Федерации после переписи населения, проведенной в 2010 году?',
                answers: ['125,8 млн человек', '142,9 млн человек', '157,8 млн человек'],
            },
            {
                question: 'Какое место в мире занимает Российская Федерация по числу жителей?',
                answers: ['первое место', 'пятое место', 'девятое место'],
            },
            {
                question: 'Сколько по итогам переписи населения 2010 года составил средний возраст жителя Российской Федерации?',
                answers: ['39', '45', '65'],
            },
            {
                question: 'Что такое депопуляция?',
                answers: ['Демографический термин, характеризующий количество родившихся за определенный период', 'Убыль населения, при котором уровень рождаемости недостаточен для компенсации даже очень низкого уровня смертности', 'Переселение людей из одного региона в другой'],
            },
            {
                question: 'Какой процент от общего процента миграции населения, по данным на 2009 год, составила внутренняя миграция в Российской Федерации?',
                answers: ['50%', '60%', '85%'],
            },
            {
                question: 'В каком федеральном округе проживает более четверти (26%) россиян?',
                answers: ['Центральный', 'Уральский', 'Южный'],
            },
            {
                question: 'Сколько % россиян находятся в возрасте 65 лет и старше?',
                answers: ['6%', '8,6%', '12,9%'],
            },
            {
                question: 'По данным учета (за 2003-2009 гг.) сколько человек участвовало во внутрироссийских миграциях?',
                answers: ['почти 15 млн человек', 'почти 20 млн человек', 'почти 25 млн человек'],
            },
            {
                question: 'Сколько в 2013 году составляла сумма материнского капитала?',
                answers: ['около 409 000 рублей', 'около 615 000 рублей'],
            },
        ],
        answers: [ '2', '1', '2', '0', '1', '2', '0', '2', '0', '0',],
    }, // 11
];

/*
    0 - math
    1 - ru lang
    2 - общество + история
    
    {
        lesson: lessons[  number of lesson  ]['lesson'],
        lessonName: lessons[  number of lesson  ]['lessonName'],
        name: '',
        class: '',
        questions: [
            {
                question: '',
                answers: [],
            },
        ],
        answers: [],
    },
*/