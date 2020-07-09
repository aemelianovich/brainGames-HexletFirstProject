import utils from '../utils.js';

const getGameRules = () => 'What number is missing in the progression?';

const getGameQuestionAndAnswer = () => {
  // Get 10 elements progression
  const progressionNumbs = utils.getRandomProgression(100, 100, 10);

  // Get progression element to hide as random number from 0 to 9
  const hideIndex = utils.getRandomInt(0, 10);
  let hiddenNum = '..';
  [hiddenNum, progressionNumbs[hideIndex]] = [progressionNumbs[hideIndex], hiddenNum];

  return [progressionNumbs.join(' '), `${hiddenNum}`];
};

// Add game functions into associated array
const gameFunctions = { getGameRules, getGameQuestionAndAnswer };

export default gameFunctions;
