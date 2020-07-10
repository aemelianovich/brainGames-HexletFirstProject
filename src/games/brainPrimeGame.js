import utils from '../utils.js';

const getGameRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameQuestionAndAnswer = () => {
  const num = utils.getRandomInt(0, 500);
  const correctAnswer = (utils.isPrime(num)) ? 'yes' : 'no';

  return [String(num), correctAnswer];
};

// Add game functions into associated array
const gameFunctions = { getGameRules, getGameQuestionAndAnswer };

export default gameFunctions;
