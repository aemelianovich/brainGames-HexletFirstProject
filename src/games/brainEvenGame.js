/// /////////////////////////////////
// Brain-Even game related functions
/// /////////////////////////////////

export const brainEvenName = 'Brain-Even';

// game Rules
export const showBrainEvenRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

// game Question
export const getBrainEvenQuestion = () => {
  // Get random number from 0 to 99
  return String(Math.floor(Math.random() * 100));
};

// get correct answer
export const getBrainEvenCorrectAnswer = (questionExprStr) => {
  if (Number(questionExprStr) % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
