import readlineSync from 'readline-sync';
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

const showGameQuestion = (question) => console.log(`Question: ${question} `);

const getAnswer = () => readlineSync.question('Your answer: ');

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

const showRoundWinMsg = () => console.log('Correct!');

const showRoundLostMsg = (answer, correctAnswer) => console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);

const showWinMsg = (playerName) => {
  const commaName = (playerName.length === 0 ? '' : `, ${playerName}`);
  console.log(`Congratulations${commaName}!`);
};

const showLostMsg = (playerName) => {
  const commaName = (playerName.length === 0 ? '' : `, ${playerName}`);
  console.log(`Let's try again${commaName}!`);
};

// Add game functions into map
const gameFunctions = new Map();
gameFunctions.set('showGameRules', showGameRules);
gameFunctions.set('getGameQuestion', getGameQuestion);
gameFunctions.set('showGameQuestion', showGameQuestion);
gameFunctions.set('getAnswer', getAnswer);
gameFunctions.set('getCorrectGameAnswer', getCorrectGameAnswer);
gameFunctions.set('showRoundWinMsg', showRoundWinMsg);
gameFunctions.set('showRoundLostMsg', showRoundLostMsg);
gameFunctions.set('showWinMsg', showWinMsg);
gameFunctions.set('showLostMsg', showLostMsg);

export default gameFunctions;
