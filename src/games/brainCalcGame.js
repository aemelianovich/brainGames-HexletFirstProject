import utils from '../utils.js';

const showGameRules = () => console.log('What is the result of the expression?');

const getGameQuestion = () => {
  const operations = ['+', '-', '*'];
  const num1 = utils.getRandomInt(0, 100);
  const num2 = utils.getRandomInt(0, 100);
  // Get random operation
  const operation = operations[utils.getRandomInt(0, operations.length)];

  return `${num1} ${operation} ${num2}`;
};

const getCorrectGameAnswer = (question) => {
  // Calculate math expression e.g. 2 + 3
  const [num1, operation, num2] = question.split(' ');
  let res;
  switch (operation) {
    case '+':
      res = parseInt(num1, 10) + parseInt(num2, 10);
      break;
    case '-':
      res = parseInt(num1, 10) - parseInt(num2, 10);
      break;
    case '*':
      res = parseInt(num1, 10) * parseInt(num2, 10);
      break;
    default:
      throw new Error(`"${operation}" operation is not supported`);
  }

  return `${res}`;
};

// Add game functions into map
const gameFunctions = new Map();
gameFunctions.set('showGameRules', showGameRules);
gameFunctions.set('getGameQuestion', getGameQuestion);
gameFunctions.set('getCorrectGameAnswer', getCorrectGameAnswer);

export default gameFunctions;
