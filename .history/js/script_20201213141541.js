'use strict';

function titleClickHandler(event){
    event.preventDefault();
    console.log('Link was clicked!');
    console.log(event);

  /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
    }

  /* [DONE] add class 'active' to the clicked link */
    const clickedElement = this;
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');

    for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
    }

  /* [DONE] get 'href' attribute from the clicked link */
    const atribute = clickedElement.getAttribute('href');
    console.log(atribute);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const clickedArticles = document.querySelectorAll(atribute);
    console.log(clickedArticles);

  /* [DONE] add class 'active' to the correct article */
  for(let clickedArticle of clickedArticles){
    clickedArticle.classList.add('active');
    }
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
      optTitleSelector = '.post-title',
      optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */

  /* for each article */

    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

}

generateTitleLinks();