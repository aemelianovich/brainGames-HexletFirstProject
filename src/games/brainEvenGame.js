import utils from '../utils.js';

const showGameRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getGameQuestion = () => utils.getRandomInt(0, 100);

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getCorrectGameAnswer = (question) => {
  if (isEven(parseInt(question, 10))) {
    return 'yes';
  }
  return 'no';
};

// Add game functions into map
const gameFunctions = new Map();
gameFunctions.set('showGameRules', showGameRules);
gameFunctions.set('getGameQuestion', getGameQuestion);
gameFunctions.set('getCorrectGameAnswer', getCorrectGameAnswer);

export default gameFunctions;
