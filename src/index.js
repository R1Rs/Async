import GameSavingLoader from './js/GameSavingLoader';

(async () => {
  const saving = await GameSavingLoader.load();
  console.log(saving);
})();
