/// /////////////////////////////////
// Brain-Progression game related functions
/// /////////////////////////////////

// game Rules
export const showGameRules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

// game Question
// Get random number from 0 to 499
export const getGameQuestion = () => String(Math.floor(Math.random() * 500));

// get correct answer
export const getCorrectGameAnswer = (questionExprStr) => {
  const num = Number(questionExprStr);

  if (num <= 1) {
    return 'no';
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if ((num % i) === 0) {
      return 'no';
    }
  }

  return 'yes';
};

// Add game functions into map
const gameFunctions = new Map();
gameFunctions.set('showGameRules', showGameRules);
gameFunctions.set('getGameQuestion', getGameQuestion);
// eslint-disable-next-line no-unused-vars
gameFunctions.set('getCorrectGameAnswer', getCorrectGameAnswer);

export default gameFunctions;
