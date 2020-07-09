import utils from '../utils.js';

const getGameRules = () => 'Find the greatest common divisor of given numbers.';

const getGameQuestionAndAnswer = () => {
  const num1 = utils.getRandomInt(0, 100);
  const num2 = utils.getRandomInt(0, 100);

  const gcdVal = utils.getGCD(parseInt(num1, 10), parseInt(num2, 10));

  return [`${num1} ${num2}`, `${gcdVal}`];
};

// Add game functions into associated array
const gameFunctions = { getGameRules, getGameQuestionAndAnswer };

export default gameFunctions;
