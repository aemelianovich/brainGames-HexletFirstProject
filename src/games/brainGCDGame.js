/// /////////////////////////////////
// Brain-GCD game related functions
/// /////////////////////////////////

// game Rules
export const showGameRules = () => console.log('Find the greatest common divisor of given numbers.');

// game Question
// Get random number from 0 to 99
export const getGameQuestion = () => {
  // Get random number from 0 to 99 for num1 and num2
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  return `${num1} ${num2}`;
};

// get correct answer
export const getCorrectGameAnswer = (questionExprStr) => {
  // Get two numbers array from string
  const numbs = questionExprStr.split(' ');

  // Find GTC using recursive Wiki example
  const getGDC = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return getGDC(num2, num1 % num2);
  };

  return String(getGDC(Number(numbs[0]), Number(numbs[1])));
};

// Add game functions into map
const gameFunctions = new Map();
gameFunctions.set('showGameRules', showGameRules);
gameFunctions.set('getGameQuestion', getGameQuestion);
// eslint-disable-next-line no-unused-vars
gameFunctions.set('getCorrectGameAnswer', getCorrectGameAnswer);

export default gameFunctions;
