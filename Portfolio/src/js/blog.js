let blogData = data['blog'];

function completionBlogPage(index){
    
    console.log(index)
    
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
    
    
    blogData[index]['content'].forEach((item) => {
        
        let blogParagraph = document.createElement('div');
        let blogParagraphTitle = document.createElement('p');
        
        blogParagraph.classList.add('blog-paragraph');
        blogParagraphTitle.classList.add('blog-title');
        
        blogParagraphTitle.textContent = item['secondTitle'];
        
        
        blogParagraph.appendChild(blogParagraphTitle);
        item['text'].forEach((item) => {
            
            let blogParagraphText = document.createElement('p');
            blogParagraphText.textContent = item;
            blogParagraph.appendChild(blogParagraphText);
            
        });
        introductionText.appendChild(blogParagraph);
        
    });
    
};