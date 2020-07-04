/// /////////////////////////////////
// Game engine logic:
//
// List of game functions.
//
// Required:
// - showGameRules()
// - getGameQuestion()
// - getCorrectGameAnswer(question)
//
// Optional (default functions will be used instead):
// - showGameQuestion(question)
// - getAnswer()
// - showRoundWinMsg()
// - showRoundLostMsg(answer, correctAnswer)
// - showWinMsg(playerName)
// - showLostMsg(playerName)
/// /////////////////////////////////

import readlineSync from 'readline-sync';
import utils from './utils.js';

// //////////////////////
// Default game functions
// //////////////////////
const showGameQuestionDefaultMsg = (question) => console.log(`Question: ${question} `);

const getDefaultAnswer = () => readlineSync.question('Your answer: ');

const showRoundWinDefaultMsg = () => console.log('Correct!');

const showRoundLostDefaultMsg = (answer, correctAnswer) => console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);

const showWinDefaultMsg = (playerName) => console.log(`Congratulations${utils.addCommaPrefixForNonEmptyStr(playerName)}!`);

const showLostDefaultMsg = (playerName) => console.log(`Let's try again${utils.addCommaPrefixForNonEmptyStr(playerName)}!`);

// /////////////////
// Run Game function
// /////////////////
const runGame = (numberOfRounds = 1, gameFunctions) => {
  // guard conditions
  const minRoundValue = 1;
  if (numberOfRounds < minRoundValue) {
    throw new Error(`Number of rounds should be >= ${minRoundValue}. You passed numberOfRounds: "${numberOfRounds}"`);
  }

  // Init user in the game
  console.log('Welcome to the Brain Games');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello${utils.addCommaPrefixForNonEmptyStr(playerName)}!`);

  // Setup default functions
  if (!gameFunctions.has('showGameQuestion')) {
    gameFunctions.set('showGameQuestion', showGameQuestionDefaultMsg);
  }

  if (!gameFunctions.has('getAnswer')) {
    gameFunctions.set('getAnswer', getDefaultAnswer);
  }

  if (!gameFunctions.has('showRoundWinMsg')) {
    gameFunctions.set('showRoundWinMsg', showRoundWinDefaultMsg);
  }

  if (!gameFunctions.has('showRoundLostMsg')) {
    gameFunctions.set('showRoundLostMsg', showRoundLostDefaultMsg);
  }

  if (!gameFunctions.has('showWinMsg')) {
    gameFunctions.set('showWinMsg', showWinDefaultMsg);
  }

  if (!gameFunctions.has('showLostMsg')) {
    gameFunctions.set('showLostMsg', showLostDefaultMsg);
  }

  // Show game rules
  gameFunctions.get('showGameRules')();

  // Play round iterative recursion
  const playRound = (currRound) => {
    // Termination condition
    if (currRound > numberOfRounds) {
      return true;
    }

    // Build and show game question
    const question = gameFunctions.get('getGameQuestion')();
    gameFunctions.get('showGameQuestion')(question);

    // Get answer
    const answer = gameFunctions.get('getAnswer')();

    // Check answer correctness
    const correctAnswer = gameFunctions.get('getCorrectGameAnswer')(question);
    if (answer === correctAnswer) {
      gameFunctions.get('showRoundWinMsg')();
      // Go to the next round
      return playRound(currRound + 1);
    }

    // Show incorrect answer
    gameFunctions.get('showRoundLostMsg')(answer, correctAnswer);

    return false;
  };

  // Init first round and get game result
  const isWinner = playRound(1);
  if (isWinner) {
    gameFunctions.get('showWinMsg')(playerName);
  } else {
    gameFunctions.get('showLostMsg')(playerName);
  }
};

export default runGame;
