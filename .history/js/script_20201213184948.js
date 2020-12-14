'use strict';

function titleClickHandler(event){
  event.preventDefault();

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  const clickedElement = this;
  clickedElement.classList.add('active');

  const activeArticles = document.querySelectorAll('.post.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  const atribute = clickedElement.getAttribute('href');

  const clickedArticles = document.querySelectorAll(atribute);

  for(let clickedArticle of clickedArticles){
    clickedArticle.classList.add('active');
  }
}

const optArticleSelector = '.post', optTitleSelector = '.post-title', optTitleListSelector = '.titles';

function generateTitleLinks(){

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  for (let article of articles){

    const articleId = article.getAttribute('id');

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    html.insertAdjacentElement('afterend', linkHTML);
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');

  for(let link of links){link.addEventListener('click', titleClickHandler);}
}

generateTitleLinks();
