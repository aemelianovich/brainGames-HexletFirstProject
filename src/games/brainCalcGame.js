import utils from '../utils.js';

const operations = ['+', '-', '*'];

const getGameRules = () => 'What is the result of the expression?';

const calcExpression = (num1, num2, operation) => {
  // Calculate math expression e.g. 2 + 3
  let res;
  switch (operation) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    default:
      throw new Error(`"${operation}" operation is not supported`);
  }

  return res;
};

const getGameQuestionAndAnswer = () => {
  const num1 = utils.getRandomInt(0, 100);
  const num2 = utils.getRandomInt(0, 100);
  // Get random operation
  const operation = operations[utils.getRandomInt(0, operations.length)];

  const correctAnswer = calcExpression(num1, num2, operation);

  return [`${num1} ${operation} ${num2}`, `${correctAnswer}`];
};

// Add game functions into associated array
const gameFunctions = { getGameRules, getGameQuestionAndAnswer };

export default gameFunctions;
