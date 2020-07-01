import readlineSync from 'readline-sync';

/// /////////////////////////////////
// Game engine logic
/// /////////////////////////////////

const dummyGameFunctions = new Map();
dummyGameFunctions.set('showGameRules', () => console.log('Dummy game. Pass "y" for correct answer'));
dummyGameFunctions.set('getGameQuestion', () => 'y or n');
// eslint-disable-next-line no-unused-vars
dummyGameFunctions.set('getCorrectGameAnswer', (_questionExprStr) => 'y');

// Run Game function
const runGame = (numberOfRounds = 1, playerName = '', gameFunctions = dummyGameFunctions) => {
  // guard conditions
  if (numberOfRounds < 1) {
    throw new Error(`Number of rounds should be >= 1. You passed numberOfRounds: "${numberOfRounds}"`);
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
    const questionExprStr = gameFunctions.get('getGameQuestion')();
    console.log(`Question: ${questionExprStr} `);

    // Get answer
    const answer = readlineSync.question('Your answer: ');

    // Check answer correctness
    const correctAnswer = gameFunctions.get('getCorrectGameAnswer')(questionExprStr);
    if (answer === correctAnswer) {
      console.log('Correct!');
      // Go to the next round
      return playRound(currRound + 1);
    }

    // Show incorrect answer
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);

    return false;
  };

  // Build ,<name> string if name is not empty
  const commaName = (playerName.length === 0 ? '' : `, ${playerName}`);

  // Init first round
  // If all rounds will be ended successfully then congratulation otherwise ask for another try
  if (playRound(1)) {
    console.log(`Congratulations${commaName}!`);
  } else {
    console.log(`Let's try again${commaName}!`);
  }
};

export default runGame;
