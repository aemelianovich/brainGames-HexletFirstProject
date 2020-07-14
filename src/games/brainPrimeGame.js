import utils from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameQuestionAndAnswer = () => {
  const question = utils.getRandomInt(0, 500);
  const correctAnswer = (utils.isPrime(question)) ? 'yes' : 'no';

  return { question, correctAnswer };
};

// Add game functions into associated array
const gameFunctionsAndAttrs = { gameRules, getGameQuestionAndAnswer };

export default gameFunctionsAndAttrs;
