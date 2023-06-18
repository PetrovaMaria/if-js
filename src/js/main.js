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

const adultSubtraction = document.getElementById("adult-subtraction");
const adultSumma = document.getElementById("adult-summa");
const childSubtraction = document.getElementById("child-subtraction");
const childSumma = document.getElementById("child-summa");
const roomSubtraction = document.getElementById("room-subtraction");
const roomSumma = document.getElementById("room-summa");
const jsAdult = document.getElementById("js-adult");
const jsChild = document.getElementById("js-child");
const jsRoom = document.getElementById("js-room");
const adultLink = document.getElementById("adult-link");
const childLink = document.getElementById("child-link");
const roomLink = document.getElementById("room-link");
const chooseFormElement = document.getElementById("choose-form-element");
const info = document.getElementById("info-block");

let countAdult =adultLink.value = 1;
let countChild =childLink.value = 0;
let countRoom =roomLink.value = 1;


chooseFormElement.addEventListener('click', (event) => {
  if(!event.target.nextElementSibling){
      if (event.target.previousElementSibling === adultLink){
        if(countAdult < 30 ){
          adultSubtraction.removeAttribute("disabled");
          adultLink.value = countAdult + 1;
          jsAdult.value = `${adultLink.value} Adult`;
          countAdult++;
        }
        else {
          event.target.setAttribute("disabled", "");
        }
      }
      else if (event.target.previousElementSibling === childLink){
        if(countChild < 10 && countChild === 0){
          childSubtraction.removeAttribute("disabled");
          childLink.value = countChild + 1;
          jsChild.value = `${childLink.value} Children`;
          countChild++;
          const newp = document.createElement("p");
          const newContent = document.createTextNode("What is the age of the child you’re travelling with?");
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
        if (countChild < 10){
          childSubtraction.removeAttribute("disabled");
          childLink.value = countChild + 1;
          jsChild.value = `${childLink.value} Children`;
          countChild++;
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
          event.target.setAttribute("disabled", "");
        }
      }
      else{
        if(countRoom < 30 ){
          roomSubtraction.removeAttribute("disabled");
          roomLink.value = countRoom + 1;
          jsRoom.value = `${roomLink.value} Room`;
          countRoom++;
        }
        else{
          event.target.setAttribute("disabled", "");
        }
      }
  }
});

adultSubtraction.addEventListener('click', () => {
  if(countAdult > 1 ){
    adultSumma.removeAttribute("disabled");
    adultLink.value = countAdult - 1;
    jsAdult.value = `${adultLink.value} Adult`;
    countAdult--;
  }
  else{
    adultSubtraction.setAttribute("disabled", "");
  }
});

childSubtraction.addEventListener('click', () => {
  if(countChild > 0 && countChild === 1){
    childSumma.removeAttribute("disabled");
    childLink.value = countChild - 1;
    jsChild.value = `${childLink.value} Children`;
    countChild--;
    const select = document.querySelector('select');
    const p = document.querySelector('p');
    const parent = select.parentNode;
    parent.removeChild(select);
    parent.removeChild(p);
  }
  else   if(countChild > 0){
    childSumma.removeAttribute("disabled");
    childLink.value = countChild - 1;
    jsChild.value = `${childLink.value} Children`;
    countChild--;
    const select = document.querySelector('select');
    const parent = select.parentNode;
    parent.removeChild(select);
  }
  else  {
    childSubtraction.setAttribute("disabled", "");
  }
});

roomSubtraction.addEventListener('click', () => {
  if(countRoom > 1 ){
    roomSumma.removeAttribute("disabled");
    roomLink.value = countRoom - 1;
    jsRoom.value = `${roomLink.value} Room`;
    countRoom--;
  }
  else{
    roomSubtraction.setAttribute("disabled", "");
  }
});
info.addEventListener('click', () => {
  if(chooseFormElement.style.display === "none"){
    chooseFormElement.style.display = "block";
  }
  else{
    chooseFormElement.style.display = "none";
  }
});