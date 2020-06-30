import readlineSync from 'readline-sync';

// Import specific games to run using game engine
import * as brainEven from './games/brainEvenGame.js';
import * as brainCalc from './games/brainCalcGame.js';

// Add game names
const brainGames = [brainEven.brainEvenName, brainCalc.brainCalcName];

/// /////////////////////////////////
// Game engine logic
/// /////////////////////////////////

// show Game Rules
const showGameRules = (gameName) => {
  switch (gameName) {
    case brainEven.brainEvenName:
      brainEven.showBrainEvenRules();
      break;
    case brainCalc.brainCalcName:
      brainCalc.showBrainCalcRules();
      break;
    default:
      throw new Error(`Unable to identify game for passed gameName: "${gameName}"`);
  }
};

// get Game Question Expression
const getGameQuestion = (gameName) => {
  switch (gameName) {
    case brainEven.brainEvenName:
      return brainEven.getBrainEvenQuestion();
    case brainCalc.brainCalcName:
      return brainCalc.getBrainCalcQuestion();
    default:
      throw new Error(`Unable to identify game for passed gameName: "${gameName}"`);
  }
};

// get Correct Game Answer
const getCorrectGameAnswer = (gameName, questionExprStr) => {
  switch (gameName) {
    case brainEven.brainEvenName:
      return brainEven.getBrainEvenCorrectAnswer(questionExprStr);
    case brainCalc.brainCalcName:
      return brainCalc.getBrainCalcCorrectAnswer(questionExprStr);
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

  // Show game rules
  showGameRules(gameName);

  // Play round iterative recursion
  const playRound = (currRound) => {
    // Termination condition
    if (currRound > numberOfRounds) {
      return true;
    }

    // Build and show game question
    const questionExprStr = getGameQuestion(gameName);
    console.log(`Question: ${questionExprStr} `);

    // Get answer
    const answer = readlineSync.question('Your answer: ');

    // Check answer correctness
    const correctAnswer = getCorrectGameAnswer(gameName, questionExprStr);
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
