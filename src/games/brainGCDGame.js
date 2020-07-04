import utils from '../utils.js';

const showGameRules = () => console.log('Find the greatest common divisor of given numbers.');

const getGameQuestion = () => {
  const num1 = utils.getRandomInt(0, 100);
  const num2 = utils.getRandomInt(0, 100);

  return `${num1} ${num2}`;
};

// Find GCD using recursive
const getGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};

const getCorrectGameAnswer = (question) => {
  // Get two numbers array from string
  const [num1, num2] = question.split(' ');

  const gcdVal = getGCD(parseInt(num1, 10), parseInt(num2, 10));

  return `${gcdVal}`;
};

// Add game functions into map
const gameFunctions = new Map();
gameFunctions.set('showGameRules', showGameRules);
gameFunctions.set('getGameQuestion', getGameQuestion);
gameFunctions.set('getCorrectGameAnswer', getCorrectGameAnswer);

export default gameFunctions;
