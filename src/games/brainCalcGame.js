/// /////////////////////////////////
// Brain-Calc game related functions
/// /////////////////////////////////

// game Rules
const showGameRules = () => console.log('What is the result of the expression?');

// game Question
const getGameQuestion = () => {
  const operations = ['+', '-', '*'];
  // Get random number from 0 to 99 for num1 and num2
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  // Get random operation
  const operation = operations[Math.floor(Math.random() * operations.length)];

  return `${num1} ${operation} ${num2}`;
};

// get correct answer
// Calculate math expression e.g. 2 + 3
// eslint-disable-next-line no-new-func
const getCorrectGameAnswer = (questionExprStr) => String(new Function(`return ${questionExprStr};`)());

// Add game functions into map
const gameFunctions = new Map();
gameFunctions.set('showGameRules', showGameRules);
gameFunctions.set('getGameQuestion', getGameQuestion);
// eslint-disable-next-line no-unused-vars
gameFunctions.set('getCorrectGameAnswer', getCorrectGameAnswer);

export default gameFunctions;
