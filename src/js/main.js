const blocks = document.querySelector('.blocks');
const results = document.querySelector('.results');
const searchResult = document.querySelector('.Available-hotels');

function addItem(Element, HomesData) {
  HomesData.forEach((item) => {
    const article = document.createElement('article');
    article.innerHTML += `<article class="block js-loves-block">
    <img class="img-guests" src=${item.imageUrl} alt=${item.name} />
    <h3 class="hotel-title">${item.name}</h3>
    <p class="text-hotel">${item.city}, ${item.country}</p>
    </article>`;
    Element.appendChild(article);
  });
}

const request = function (results, Url) {
  fetch(
    'https://if-student-api.onrender.com/api/hotels' + Url,
  )
    .then((response) => response.json())
    .then((result) => addItem(results, result.slice(0, 4)));
};

const country = document.getElementById('places');
const searchButton = document.getElementById('search-button');

const searchUrl = '?search=' + country.value;
const Url = '/popular';
request(blocks, Url);

searchButton.addEventListener('click', () => {
  searchResult.style.display = 'block';
  request(results, searchUrl);
});
