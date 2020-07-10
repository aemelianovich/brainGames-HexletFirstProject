import utils from '../utils.js';

const getGameRules = () => 'Find the greatest common divisor of given numbers.';

const getGameQuestionAndAnswer = () => {
  const num1 = utils.getRandomInt(0, 100);
  const num2 = utils.getRandomInt(0, 100);

  const gcdVal = utils.getGCD(num1, num2);

  return [`${num1} ${num2}`, String(gcdVal)];
};

// Add game functions into associated array
const gameFunctions = { getGameRules, getGameQuestionAndAnswer };

export default gameFunctions;
