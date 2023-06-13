import {
  urlAddress,
  fixUrl,
  getDataFromStorage,
  blocks,
  Url,
  searchUrl,
  results,
  searchResult,
  searchButton,
} from './variable.js';
function addItem(element, homesData) {
  homesData.forEach((item) => {
    const article = document.createElement('article');
    article.innerHTML += `<article class="block js-loves-block">
    <img class="img-guests" src=${item.imageUrl} alt=${item.name} />
    <h3 class="hotel-title">${item.name}</h3>
    <p class="text-hotel">${item.city}, ${item.country}</p>
    </article>`;
    element.appendChild(article);
  });
}

const request = function (results, url) {
  if (!sessionStorage.getItem(urlAddress)) {
    fetch(fixUrl + url)
      .then((response) => response.json())
      .then((result) => {
        const data = result.slice(0, 4);
        sessionStorage.setItem(urlAddress, JSON.stringify(data));
        console.log(JSON.parse(getDataFromStorage));
        addItem(results, JSON.parse(getDataFromStorage));
      });
  } else {
    addItem(results, JSON.parse(getDataFromStorage));
  }
};

request(blocks, Url);

searchButton.addEventListener('click', () => {
  searchResult.style.display = 'block';
  request(results, searchUrl);
});
