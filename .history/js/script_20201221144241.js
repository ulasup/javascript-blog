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

  const articleSelector = clickedElement.getAttribute('href');
  const targetArticle = document.querySelector(articleSelector);
  targetArticle.classList.add('active');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optTagsListSelector = '.tags.list',
  optArticleAuthorSelector = '.post-author',
  optCloudClassCount = 5,
  optCloudClassPrefix = 'tag-size-';

function generateTitleLinks(customSelector = ''){

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  const articles = document.querySelectorAll(optArticleSelector + customSelector);
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

function calculateTagsParams(tags){
  const params = {
    max: 0,
    min: 999999
  };
  for(let tag in tags){
    if(tags[tag] > params.max){
      params.max = tags[tag];
    }
    if(tags[tag] < params.min){
      params.min = tags[tag];
    }
  }
  return params;
}

function calculateTagClass(count, params){

}

function generateTags(){
  let allTags = {};
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles){
    const tagList = article.querySelector(optArticleTagsSelector);
    let html = '';
    const articleTags = article.getAttribute('data-tags');
    const articleTagsArray = articleTags.split(' ');
    for (let tag of articleTagsArray){
      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      html = html + linkHTML;
      if(!allTags.hasOwnProperty(tag)){
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
    }
    tagList.innerHTML = html;
  }
  const tagList = document.querySelector('.tags');
  const tagsParams = calculateTagsParams(allTags);
  let allTagsHTML = '';
  for(let tag in allTags){
    const linkAllTagsHTML = '<li><a href="#tag-' + tag + '">' + tag + ' (' + allTags[tag] + ') </a></li>';
    allTagsHTML = allTagsHTML + linkAllTagsHTML
  }
  tagList.innerHTML = allTagsHTML;

}

generateTags();

function tagClickHandler(event){
  event.preventDefault();

  const clickedElement = this;
  const href = clickedElement.getAttribute('href');
  const tag = href.replace('#tag-', '');

  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  for(let activeTag of activeTags){
    activeTag.classList.remove('active');
  }

  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
  for (let tagLink of tagLinks){
    tagLink.classList.add('active');
  }

  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  const links =  document.querySelectorAll('.post-tags .list a');
  for(let link of links){
    link.addEventListener('click', tagClickHandler);
  }
}

addClickListenersToTags();

function generateAuthors(){
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles){
    const authorsList = article.querySelector(optArticleAuthorSelector);
    const articleAuthor = article.getAttribute('data-author');
    const linkHTML = '<a href="' + articleAuthor + '"><span>by ' + articleAuthor + '</span></a>';
    authorsList.innerHTML = linkHTML;
  }
}

generateAuthors();

function authorClickHandler(event){
  event.preventDefault();

  const clickedElement = this;
  console.log(clickedElement);
  const author = clickedElement.getAttribute('href');

  const activeAuthors = document.querySelectorAll('a.active');
  for(let activeAuthor of activeAuthors){
    activeAuthor.classList.remove('active');
  }

  const authorLinks = document.querySelectorAll(author);
  for (let authorLink of authorLinks){
    authorLink.classList.add('active');
  }

  generateTitleLinks('[data-author="' + author + '"]');

}

function addClickListenersToAuthors(){
  const links =  document.querySelectorAll('.post-author a');
  for(let link of links){
    link.addEventListener('click', authorClickHandler);
  }
}

addClickListenersToAuthors();
