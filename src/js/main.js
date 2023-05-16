const blocks = document.querySelector('.blocks');
const results = document.querySelector('.results');
const search_result = document.querySelector('.search-result');

function AddItem(Element, HomesData) {
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

fetch('https://if-student-api.onrender.com/api/hotels/popular')
  .then((response) => response.json())
  .then((data) => AddItem(blocks, data.slice(0, 4)));

const country = document.getElementById('places');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  search_result.style.display = 'block';
  fetch(
    'https://if-student-api.onrender.com/api/hotels?search=' + country.value,
  )
    .then((response) => response.json())
    .then((result) => AddItem(results, result.slice(0, 4)));
});
