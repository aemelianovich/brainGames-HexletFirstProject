import readlineSync from 'readline-sync';
import utils from '../utils.js';

const showGameRules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getGameQuestion = () => utils.getRandomInt(0, 500);

const showGameQuestion = (question) => console.log(`Question: ${question} `);

const getAnswer = () => readlineSync.question('Your answer: ');

const isPrime = (num) => {
  const minPrimeNumber = 2;
  if (num < minPrimeNumber) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if ((num % i) === 0) {
      return false;
    }
  }

  return true;
};

const getCorrectGameAnswer = (question) => {
  if (isPrime(parseInt(question, 10))) {
    return 'yes';
  }

  return 'no';
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
