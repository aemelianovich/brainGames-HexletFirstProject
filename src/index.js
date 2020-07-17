/// /////////////////////////////////
// Game engine logic:
//
// List of game functions.
//
// Required:
// - gameRules
// - getCorrectGameAnswer()
/// /////////////////////////////////

import readlineSync from 'readline-sync';

// /////////////////
// Run Game function
// /////////////////
const numberOfRounds = 3;

const runGame = (gameFunctionsAndAttrs) => {
  // guard conditions
  const minRoundValue = 1;
  if (numberOfRounds < minRoundValue) {
    throw new Error(`Number of rounds should be >= ${minRoundValue}. You passed numberOfRounds: "${numberOfRounds}"`);
  }

  // Init user in the game
  console.log('Welcome to the Brain Games');
  const playerName = readlineSync.question('May I have your name? ', { defaultInput: 'Guest' });
  console.log(`Hello, ${playerName}!`);

  // Show game rules
  console.log(gameFunctionsAndAttrs.gameRules);

  // Play round iterative recursion
  const playRound = (currRound) => {
    // Termination condition
    if (currRound > numberOfRounds) {
      return true;
    }

    // Build and show game question
    const { question, correctAnswer } = gameFunctionsAndAttrs.getGameQuestionAndAnswer();
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
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default runGame;
