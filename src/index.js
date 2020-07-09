/// /////////////////////////////////
// Game engine logic:
//
// List of game functions.
//
// Required:
// - getGameRules()
// - getGameQuestion()
// - getCorrectGameAnswer(question)
/// /////////////////////////////////

import readlineSync from 'readline-sync';
import utils from './utils.js';

// /////////////////
// Run Game function
// /////////////////
const runGame = (numberOfRounds = 3, gameFunctions) => {
  // guard conditions
  const minRoundValue = 1;
  if (numberOfRounds < minRoundValue) {
    throw new Error(`Number of rounds should be >= ${minRoundValue}. You passed numberOfRounds: "${numberOfRounds}"`);
  }

  // Init user in the game
  console.log('Welcome to the Brain Games');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello${utils.addCommaPrefixForNonEmptyStr(playerName)}!`);

  // Show game rules
  console.log(`${gameFunctions.getGameRules()}`);

  // Play round iterative recursion
  const playRound = (currRound) => {
    // Termination condition
    if (currRound > numberOfRounds) {
      return true;
    }

    // Build and show game question
    const [question, correctAnswer] = gameFunctions.getGameQuestionAndAnswer();
    console.log(`Question: ${question} `);

    // Get answer
    const answer = readlineSync.question('Your answer: ');

    // Check answer correctness
    if (answer === correctAnswer) {
      console.log('Correct!');
      // Go to the next round
      return playRound(currRound + 1);
    }

    // Show incorrect answer
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);

    return false;
  };

  // Init first round and get game result
  const isWinner = playRound(1);
  if (isWinner) {
    console.log(`Congratulations${utils.addCommaPrefixForNonEmptyStr(playerName)}!`);
  } else {
    console.log(`Let's try again${utils.addCommaPrefixForNonEmptyStr(playerName)}!`);
  }
};

export default runGame;
