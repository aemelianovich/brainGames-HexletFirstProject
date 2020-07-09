import utils from '../utils.js';

const getGameRules = () => 'Find the greatest common divisor of given numbers.';

const getGameQuestion = () => {
  const num1 = utils.getRandomInt(0, 100);
  const num2 = utils.getRandomInt(0, 100);

  return [`${num1} ${num2}`, num1, num2];
};

const getCorrectGameAnswer = (num1, num2) => {
  const gcdVal = utils.getGCD(parseInt(num1, 10), parseInt(num2, 10));

  return `${gcdVal}`;
};

const getGameQuestionAndAnswer = () => {
  const [question, num1, num2] = getGameQuestion();
  const correctAnswer = getCorrectGameAnswer(num1, num2);

  return [question, correctAnswer];
};

// Add game functions into map
const gameFunctions = new Map();
gameFunctions.set('getGameRules', getGameRules);
gameFunctions.set('getGameQuestionAndAnswer', getGameQuestionAndAnswer);
export default gameFunctions;
