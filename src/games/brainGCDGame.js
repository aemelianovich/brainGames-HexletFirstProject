import readlineSync from 'readline-sync';
import utils from '../utils.js';

const showGameRules = () => console.log('Find the greatest common divisor of given numbers.');

const getGameQuestion = () => {
  const num1 = utils.getRandomInt(0, 100);
  const num2 = utils.getRandomInt(0, 100);

  return `${num1} ${num2}`;
};

const showGameQuestion = (question) => console.log(`Question: ${question} `);

const getAnswer = () => readlineSync.question('Your answer: ');

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
