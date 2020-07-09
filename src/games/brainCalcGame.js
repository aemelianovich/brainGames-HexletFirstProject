import utils from '../utils.js';

const getGameRules = () => 'What is the result of the expression?';

const getGameQuestion = () => {
  const operations = ['+', '-', '*'];
  const num1 = utils.getRandomInt(0, 100);
  const num2 = utils.getRandomInt(0, 100);
  // Get random operation
  const operation = operations[utils.getRandomInt(0, operations.length)];

  return [`${num1} ${operation} ${num2}`, num1, num2, operation];
};

const getCorrectGameAnswer = (num1, num2, operation) => {
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

  return `${res}`;
};

const getGameQuestionAndAnswer = () => {
  const [question, num1, num2, operation] = getGameQuestion();
  const correctAnswer = getCorrectGameAnswer(num1, num2, operation);

  return [question, correctAnswer];
};

// Add game functions into map
const gameFunctions = new Map();
gameFunctions.set('getGameRules', getGameRules);
gameFunctions.set('getGameQuestionAndAnswer', getGameQuestionAndAnswer);

export default gameFunctions;
