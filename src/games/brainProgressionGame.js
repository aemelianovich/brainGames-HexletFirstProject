import utils from '../utils.js';

const getGameRules = () => 'What number is missing in the progression?';

const getGameQuestion = () => {
  // Get 10 elements progression
  const progressionNumbs = utils.getRandomProgression(100, 100, 10);

  // Get progression element to hide as random number from 0 to 9
  const hideIndex = utils.getRandomInt(0, 10);
  let hiddenNum = '..';
  [hiddenNum, progressionNumbs[hideIndex]] = [progressionNumbs[hideIndex], hiddenNum];

  return [progressionNumbs.join(' '), hiddenNum];
};

const getGameQuestionAndAnswer = () => {
  const [question, hiddenNum] = getGameQuestion();
  return [question, `${hiddenNum}`];
};

// Add game functions into map
const gameFunctions = new Map();
gameFunctions.set('getGameRules', getGameRules);
gameFunctions.set('getGameQuestionAndAnswer', getGameQuestionAndAnswer);

export default gameFunctions;
