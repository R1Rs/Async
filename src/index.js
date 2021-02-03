import GameSavingLoader from './js/GameSavingLoader';
import { saving } from './js/GameSaving';

// eslint-disable-next-line no-shadow
GameSavingLoader.load().then((saving) => {
  console.log(saving);
// eslint-disable-next-line no-unused-vars
}, (error) => {
  console.log('ошибка');
});
