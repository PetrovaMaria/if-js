const data = [
  {
    id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    id: 'aa560608-a879-48a7-80b6-deff2806b250',
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    id: '4024535d-a498-4274-b7cb-f01ada962971',
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    id: '190221c6-b18f-4dba-97de-e35f0e14c023',
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const blocks = document.querySelector('.blocks');

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

AddItem(blocks, data.slice(0, 4));

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const jsAdult = document.getElementById("js-adult");
const jsChild = document.getElementById("js-child");
const jsRoom = document.getElementById("js-room");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const chooseFormElement = document.getElementById("choose-form-element");

let count1 = Number(p1.value);
let count2 = Number(p2.value);
let count3 = Number(p3.value);


console.log(`${p1.value} Adult`);

button1.addEventListener('click', () => {
  if(count1 > 1 ){
    button2.removeAttribute("disabled");
    p1.value = count1 - 1;
    jsAdult.value = `${p1.value} Adult`;
    count1--;
  }
  else{
    button1.setAttribute("disabled", "");
  }
});


button2.addEventListener('click', () => {
  if(count1 < 30 ){
    button1.removeAttribute("disabled");
    p1.value = count1 + 1;
    jsAdult.value = `${p1.value} Adult`;
    count1++;
  }
  else{
    button2.setAttribute("disabled", "");
  }
});


button3.addEventListener('click', () => {
  if(count2 > 0 && count2 === 1){
    button4.removeAttribute("disabled");
    p2.value = count2 - 1;
    jsChild.value = `${p2.value} Children`;
    count2--;
    const select = document.querySelector('select');
    const p = document.querySelector('p');
    const parent = select.parentNode;
    parent.removeChild(select);
    parent.removeChild(p);
  }
  else   if(count2 > 0){
    button4.removeAttribute("disabled");
    p2.value = count2 - 1;
    jsChild.value = `${p2.value} Children`;
    count2--;
    const select = document.querySelector('select');
    const parent = select.parentNode;
    parent.removeChild(select);
  }
  else  {
    button3.setAttribute("disabled", "");
  }
});

console.log(chooseFormElement);

button4.addEventListener('click', () => {
  if(count2 < 10 && count2 === 0){
    button3.removeAttribute("disabled");
    p2.value = count2 + 1;
    jsChild.value = `${p2.value} Children`;
    count2++;
    const newp = document.createElement("p");
// and give it some content
    const newContent = document.createTextNode("What is the age of the child you’re travelling with?");
// add the text node to the newly created div
    newp.appendChild(newContent);
    chooseFormElement.appendChild(newp);
    const newSelect = document.createElement("select");
    chooseFormElement.appendChild(newSelect);
    for( let i=0; i < 18 ; i++){
      const newOption = document.createElement("option");
      const newOptionContent = document.createTextNode(`${i} years old`);
      newOption.appendChild(newOptionContent);
      newSelect.appendChild(newOption);
    }
  }
  else
  if (count2 < 10){
    button3.removeAttribute("disabled");
    p2.value = count2 + 1;
    jsChild.value = `${p2.value} Children`;
    count2++;
    const newSelect = document.createElement("select");
    chooseFormElement.appendChild(newSelect);
    for( let i=0; i < 18 ; i++){
      const newOption = document.createElement("option");
      const newOptionContent = document.createTextNode(`${i} years old`);
      newOption.appendChild(newOptionContent);
      newSelect.appendChild(newOption);
    }
  }
  else {
    button4.setAttribute("disabled", "");
  }
});

button5.addEventListener('click', () => {
  if(count3 > 1 ){
    button6.removeAttribute("disabled");
    p3.value = count3 - 1;
    jsRoom.value = `${p3.value} Room`;
    count3--;
  }
  else{
    button5.setAttribute("disabled", "");
  }
});


button6.addEventListener('click', () => {
  if(count3 < 30 ){
    button5.removeAttribute("disabled");
    p3.value = count3 + 1;
    jsRoom.value = `${p3.value} Room`;
    count3++;
  }
  else{
    button6.setAttribute("disabled", "");
  }
});

jsAdult.addEventListener('click', () => {
  if(chooseFormElement.style.display === "none"){
    chooseFormElement.style.display = "block";
  }
  else{
    chooseFormElement.style.display = "none";
  }
});

jsChild.addEventListener('click', () => {
  if(chooseFormElement.style.display === "none"){
    chooseFormElement.style.display = "block";
  }
  else{
    chooseFormElement.style.display = "none";
  }
});

jsRoom.addEventListener('click',() => {
  if(chooseFormElement.style.display === "none"){
    chooseFormElement.style.display = "block";
  }
  else{
    chooseFormElement.style.display = "none";
  }
});

