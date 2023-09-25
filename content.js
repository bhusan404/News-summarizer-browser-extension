// This is a simplified example; you need to customize this script for different websites.
const articleElement = document.querySelector('.article-content'); // Replace with your article selector
const articleText = articleElement ? articleElement.textContent : '';

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'getArticleText') {
    sendResponse({ text: articleText });
  }
});
