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

  const attribute = clickedElement.getAttribute('href');
  const clickedArticles = document.querySelectorAll(attribute);
  for(let clickedArticle of clickedArticles){
    clickedArticle.classList.add('active');
  }
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  const articles = document.querySelectorAll(optArticleSelector);
  let html = '';
  for (let article of articles){
    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    html = html + linkHTML;
  }
  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();


function generateTags(){
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles){
    const tagList = article.querySelector(optArticleTagsSelector);
    let html = '';
    const attribute = article.getAttribute('data-tags');
    const articleTags = article.querySelectorAll(attribute);
    const articleTagsArray = articleTags.split(' ');
  }

  /* DONE START LOOP: for every article: */

  /* DONE find tags wrapper */

  /* DONE make html variable with empty string */

  /* DONE get tags from data-tags attribute */

  /* DONE split tags into array */

  /* START LOOP: for each tag */

  /* generate HTML of the link */

  /* add generated code to html variable */

  /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();