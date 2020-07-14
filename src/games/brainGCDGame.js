import utils from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGameQuestionAndAnswer = () => {
  const num1 = utils.getRandomInt(0, 100);
  const num2 = utils.getRandomInt(0, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(utils.getGCD(num1, num2));

  return { question, correctAnswer };
};

// Add game functions into associated array
const gameFunctionsAndAttrs = { gameRules, getGameQuestionAndAnswer };

export default gameFunctionsAndAttrs;
