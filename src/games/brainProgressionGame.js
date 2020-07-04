import utils from '../utils.js';

const showGameRules = () => console.log('What number is missing in the progression?');

const getRandomProgression = (firstElementMaxValue, deltaMaxValue, numOfElements) => {
  const firstNumInProgression = utils.getRandomInt(0, firstElementMaxValue);
  const delta = utils.getRandomInt(1, deltaMaxValue);

  const progressionNumbs = [firstNumInProgression];

  for (let i = 1; i < numOfElements; i += 1) {
    progressionNumbs.push(progressionNumbs[i - 1] + delta);
  }

  return progressionNumbs;
};

const getGameQuestion = () => {
  // Get 10 elements progression
  const progressionNumbs = getRandomProgression(100, 100, 10);

  // Get progression element to hide as random number from 0 to 9
  const hideIndex = utils.getRandomInt(0, 10);
  progressionNumbs[hideIndex] = '..';

  return progressionNumbs.join(' ');
};

const getCorrectGameAnswer = (question) => {
  const progressionArray = question.split(' ');
  const hideIndex = progressionArray.indexOf('..');

  let delta = 0;
  let result;

  // Find two neighbor elements to calculate delta
  const distanceToMaxElement = (progressionArray.length - 1) - hideIndex;
  // If not the last two we can take two right neighbors for calculation
  if (distanceToMaxElement > 1) {
    delta = progressionArray[hideIndex + 2] - progressionArray[hideIndex + 1];
    result = (progressionArray[hideIndex + 1] - delta);
    return `${result}`;
  }
  // Otherwise we can take two left neighbors for calculation
  delta = progressionArray[hideIndex - 1] - progressionArray[hideIndex - 2];
  result = parseInt(progressionArray[hideIndex - 1], 10) + delta;
  return `${result}`;
};

// Add game functions into map
const gameFunctions = new Map();
gameFunctions.set('showGameRules', showGameRules);
gameFunctions.set('getGameQuestion', getGameQuestion);
gameFunctions.set('getCorrectGameAnswer', getCorrectGameAnswer);

export default gameFunctions;
