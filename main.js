function getArticle() { // display articles
    let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Arctic&api-key=ySHaW8V0KxGoIrnFjYkIUr7Jbm1F6xKS'
    
    fetch(url) // make request to api url  above
        .then(function (response) { // extra JSON data 
            return response.json();

        })
        .then(function (article) {
            // Select container to add articles to add
            let firstContainer = document.querySelector('#Article1-content');

            // display 4 articles onto website
            for (let i = 0; i < 4; i++) {
                let headline = document.createElement('a')
                headline.setAttribute('href', article.response.docs[i].web_url)
                headline.innerText = article.response.docs[i].headline.main
                firstContainer.append(headline)

                let articleDescription = document.createElement('p');
                articleDescription.innerText = article.response.docs[i].abstract;
                firstContainer.append(articleDescription);

                let author = document.createElement('p');
                author.innerText = article.response.docs[i].byline.original;
                firstContainer.append(author)
            }
        })
}



