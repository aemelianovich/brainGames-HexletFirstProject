import readlineSync from 'readline-sync';

// Import specific games to run using game engine
import * as brainEven from './games/brainEvenGame.js';
import * as brainCalc from './games/brainCalcGame.js';
import * as brainGCD from './games/brainGCDGame.js';

// Add game names
const brainGames = [brainEven.gameName, brainCalc.gameName, brainGCD.gameName];

/// /////////////////////////////////
// Game engine logic
/// /////////////////////////////////

// Get Game functions for particular game
const getGameFunctions = (gameName) => {
  const gameFunctions = new Map();

  switch (gameName) {
    // Init brain-even game functions
    case brainEven.gameName:
      // show Game Rules
      gameFunctions.set('showGameRules', brainEven.showGameRules);
      // get Game Question Expression
      gameFunctions.set('getGameQuestion', brainEven.getGameQuestion);
      // get Correct Game Answer
      gameFunctions.set('getCorrectGameAnswer', brainEven.getCorrectGameAnswer);

      return gameFunctions;

    // Init brain-calc game functions
    case brainCalc.gameName:
      // show Game Rules
      gameFunctions.set('showGameRules', brainCalc.showGameRules);
      // get Game Question Expression
      gameFunctions.set('getGameQuestion', brainCalc.getGameQuestion);
      // get Correct Game Answer
      gameFunctions.set('getCorrectGameAnswer', brainCalc.getCorrectGameAnswer);

      return gameFunctions;

    // Init brain-gcd game functions
    case brainGCD.gameName:
      // show Game Rules
      gameFunctions.set('showGameRules', brainGCD.showGameRules);
      // get Game Question Expression
      gameFunctions.set('getGameQuestion', brainGCD.getGameQuestion);
      // get Correct Game Answer
      gameFunctions.set('getCorrectGameAnswer', brainGCD.getCorrectGameAnswer);

      return gameFunctions;

    default:
      throw new Error(`Unable to identify game for passed gameName: "${gameName}"`);
  }
};

// Run Game function
const runGame = (numberOfRounds, playerName = '', gameName) => {
  // guard conditions
  if (!brainGames.includes(gameName)) {
    throw new Error(`Allowed list of games: ${brainGames.toString()}. You passed gameName: "${gameName}"`);
  } else if (numberOfRounds < 1) {
    throw new Error(`Number of rounds should be >= 1. You passed numberOfRounds: "${numberOfRounds}"`);
  }

  // Get game functions for particular game
  const gameFunctions = getGameFunctions(gameName);

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
