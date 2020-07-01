/// /////////////////////////////////
// Brain-Progression game related functions
/// /////////////////////////////////

export const gameName = 'Brain-Progression';

// game Rules
export const showGameRules = () => console.log('What number is missing in the progression?');

// game Question
// Get random number from 0 to 99
export const getGameQuestion = () => {
  // Get first element in progression as random number from 0 to 99
  const firstNum = Math.floor(Math.random() * 100);
  // Get progression delta as random number from 1 to 100
  const delta = Math.floor(Math.random() * 100) + 1;
  // Get progression element to hide as random number from 0 to 9
  const hideIndex = Math.floor(Math.random() * 10);

  // Build progression with 10 elements
  // add first element
  const progressionArray = [firstNum];
  // add all other elements
  for (let i = 1; i < 10; i += 1) {
    progressionArray.push(progressionArray[i - 1] + delta);
  }
  // hide random element
  progressionArray[hideIndex] = '..';

  return progressionArray.join(' ');
};

// get correct answer
export const getCorrectGameAnswer = (questionExprStr) => {
  // Get progression array from string
  const progressionArray = questionExprStr.split(' ');
  // Get hide number index
  const hideIndex = progressionArray.indexOf('..');

  let delta = 0;

  // Find two neighbor elements to calculate delta
  if (((progressionArray.length - 1) - hideIndex) > 1) {
    // If not the last two we can take two right neighbors for calculation
    delta = progressionArray[hideIndex + 2] - progressionArray[hideIndex + 1];
    return String(progressionArray[hideIndex + 1] - delta);
  }
  // Otherwise we can take two left neighbors for calculation
  delta = progressionArray[hideIndex - 1] - progressionArray[hideIndex - 2];
  return String(Number(progressionArray[hideIndex - 1]) + delta);
};
