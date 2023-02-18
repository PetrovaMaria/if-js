
const reverseDate = (date) => {
  return date.replace(/(\d*)-(\d*)-(\d*)/g, (match, p1, p2, p3) => {
    return [p3, p2, p1].join('.');
  });
};

console.log(reverseDate('2020-11-26'));

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const arr = [];
let index = 0;

const countryInclude = (country) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].country.includes(country)) {
      arr[index] = `${data[i].country}, ${data[i].city}, ${data[i].hotel} `;
      index++;
    }
  }
  return arr;
};

  console.log(countryInclude('Germany'));
