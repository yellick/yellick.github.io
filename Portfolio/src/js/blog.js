let blogData = data['blog'];

function completionBlogPage(index) {

    let blogTitle = document.getElementById('title');
    let blogDate = document.getElementById('date');
    let introductionImg = document.getElementById('introductionImg');
    let introductionText = document.getElementById('introduction-text');
    let blogContent = document.getElementById('blog-content')

    // заголовок и дата
    blogTitle.textContent = blogData[index]['title'];
    blogDate.textContent = blogData[index]['date'];

    // создаю картнку
    introductionImg.setAttribute('src', blogData[index]['introductionImg'])

    // создаю текс введения
    blogData[index]['introduction'].forEach((item) => {

        let introductionTextContent = document.createElement('p');
        introductionTextContent.textContent = item;
        introductionText.appendChild(introductionTextContent);

    });

    // Заполняю контент блога
    blogData[index]['content'].forEach((item) => {

        // создаю параграф
        let blogParagraph = document.createElement('div');
        // создаю заголовок параграфа
        let blogParagraphTitle = document.createElement('p');

        blogParagraph.classList.add('blog-paragraph');
        blogParagraphTitle.classList.add('blog-title');


        blogParagraphTitle.textContent = item['secondTitle'];
        // добавляю его в параграф
        blogParagraph.appendChild(blogParagraphTitle);
        // создаю абзацы
        item['text'].forEach((item) => {

            if (typeof (item) == 'object') {

                if (item['type'] == 'link') {

                    // создаю ссылку
                    let blogParagraphLink = document.createElement('a');
                    // добавляю в неё контент
                    blogParagraphLink.textContent = item['linkName'];
                    // добавляю ей аттрибуты
                    blogParagraphLink.setAttribute('href', item['link'])
                    blogParagraphLink.setAttribute('target', '_blank')
                    // добавляю её в параграф
                    blogParagraph.appendChild(blogParagraphLink);

                } else if (item['type'] == 'image') {
                    
                    // создаю картинку
                    let blogParagraphImage = document.createElement('img');
                    // добавляю ей аттрибуты
                    blogParagraphImage.setAttribute('src', item['src'])
                    // добавляю её в параграф
                    blogParagraph.appendChild(blogParagraphImage);

                }

            } else if (typeof (item) == 'string') {

                // создаю абзац
                let blogParagraphText = document.createElement('p');
                // добавляю в него контент
                blogParagraphText.textContent = item;
                // добавляю его в параграф
                blogParagraph.appendChild(blogParagraphText);

            }
        });
        // добавляю параграф на страницу
        blogContent.appendChild(blogParagraph);

    });
};

// получаю хеш страницы, отбрасываю первый символ строки (#), конвертирую строку в число и вызываю с ним функцию.
// document.location - ссылка на эту страницу
// .hash - получаю хеш из ссылки
// .substr(х) - удаляю х символов сначала строки
completionBlogPage(Number(document.location.hash.substr(1)))
