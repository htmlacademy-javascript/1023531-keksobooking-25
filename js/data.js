import {generateAvatarNumber, getRandomFloat, generateUniqeArrayValues, getRandomNumber} from './util.js';

const OFFER_COUNT = 10;

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKTIME = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const createOffer = () => ({
  author:{
    avatar:`img/avatars/user${generateAvatarNumber()}.png`
  },
  offer: {
    title: 'Deluxe Apartment',
    address:`${getRandomFloat(35.65000, 35.70000, 5)}, ${getRandomFloat(139.70000, 139.80000, 5)}`,
    price: getRandomNumber(0, 200),
    type: TYPE[getRandomNumber(0, 4)],
    rooms: getRandomNumber(1, 5),
    guests: getRandomNumber(1, 7),
    checkin: CHECKTIME[getRandomNumber(0, 2)],
    checkout: CHECKTIME[getRandomNumber(0, 2)],
    features: generateUniqeArrayValues(FEATURES),
    description: 'The studios and apartments at Marina View Hotel Apartment are decorated in soft colors. They include a flat-screen TV, a full kitchen and a modern bathroom. Guests receive a bathrobe with slippers for extra comfort.',
    photos: generateUniqeArrayValues(PHOTOS)
  },
  location: {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5)
  }
});

export const createOffers = () => Array.from({length: OFFER_COUNT}, createOffer);
