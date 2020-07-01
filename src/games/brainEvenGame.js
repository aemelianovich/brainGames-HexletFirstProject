/// /////////////////////////////////
// Brain-Even game related functions
/// /////////////////////////////////

export const gameName = 'Brain-Even';

// game Rules
export const showGameRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

// game Question
// Get random number from 0 to 99
export const getGameQuestion = () => String(Math.floor(Math.random() * 100));

// get correct answer
export const getCorrectGameAnswer = (questionExprStr) => {
  if (Number(questionExprStr) % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
