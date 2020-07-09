import utils from '../utils.js';

const getGameRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameQuestionAndAnswer = () => {
  const num = utils.getRandomInt(0, 100);
  const correctAnswer = (utils.isEven(num)) ? 'yes' : 'no';

  return [num, correctAnswer];
};

// Add game functions into associated array
const gameFunctions = { getGameRules, getGameQuestionAndAnswer };

export default gameFunctions;
