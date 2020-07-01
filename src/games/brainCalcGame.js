/// /////////////////////////////////
// Brain-Calc game related functions
/// /////////////////////////////////

export const brainCalcName = 'Brain-Calc';

// game Rules
export const showBrainCalcRules = () => console.log('What is the result of the expression?');

// game Question
export const getBrainCalcQuestion = () => {
  const operations = ['+', '-', '*'];
  // Get random number from 1 to 99 for num1 and num2
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  // Get random operation
  const operation = operations[Math.floor(Math.random() * operations.length)];

  return `${num1} ${operation} ${num2}`;
};

// get correct answer
// eslint-disable-next-line no-new-func
export const getBrainCalcCorrectAnswer = (questionExprStr) => String(new Function(`return ${questionExprStr};`)());
