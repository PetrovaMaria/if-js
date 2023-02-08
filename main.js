function replacer(match, p1, p2, p3) {
  // eslint-disable-next-line no-debugger
  return [p3, p2, p1].join('.');
}

const newString = '2020-11-26'.replace(/(\d*)-(\d*)-(\d*)/g, replacer);

console.log(newString);

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

for (let i = 0; i < data.length; i++) {
  if (data[i].country.includes('Germany') === true) {
    console.log(`${data[i].country}, ${data[i].city}, ${data[i].hotel} `);
  }
}
