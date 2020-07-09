import utils from '../utils.js';

const getGameRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameQuestion = () => utils.getRandomInt(0, 500);

const getCorrectGameAnswer = (question) => {
  if (utils.isPrime(parseInt(question, 10))) {
    return 'yes';
  }

  return 'no';
};

const getGameQuestionAndAnswer = () => {
  const question = getGameQuestion();
  const correctAnswer = getCorrectGameAnswer(question);

  return [question, correctAnswer];
};

// Add game functions into map
const gameFunctions = new Map();
gameFunctions.set('getGameRules', getGameRules);
gameFunctions.set('getGameQuestionAndAnswer', getGameQuestionAndAnswer);

export default gameFunctions;
