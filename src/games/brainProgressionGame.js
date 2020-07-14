import utils from '../utils.js';

const gameRules = 'What number is missing in the progression?';

const getGameQuestionAndAnswer = () => {
  const progressionLength = 10;
  const firstElement = utils.getRandomInt(0, 100);
  const delta = utils.getRandomInt(1, 100);

  const progressionNumbs = utils.getProgression(firstElement, delta, progressionLength);

  // Get progression element to hide as random number
  const hideIndex = utils.getRandomInt(0, progressionLength);

  let hiddenNum = '..';
  [hiddenNum, progressionNumbs[hideIndex]] = [progressionNumbs[hideIndex], hiddenNum];

  const question = progressionNumbs.join(' ');
  const correctAnswer = String(hiddenNum);

  return { question, correctAnswer };
};

// Add game functions into associated array
const gameFunctionsAndAttrs = { gameRules, getGameQuestionAndAnswer };

export default gameFunctionsAndAttrs;
