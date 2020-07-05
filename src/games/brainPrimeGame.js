import utils from '../utils.js';

const showGameRules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getGameQuestion = () => utils.getRandomInt(0, 500);

const getCorrectGameAnswer = (question) => {
  if (utils.isPrime(parseInt(question, 10))) {
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
