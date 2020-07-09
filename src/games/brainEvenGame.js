import utils from '../utils.js';

const getGameRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameQuestion = () => utils.getRandomInt(0, 100);

const getCorrectGameAnswer = (question) => {
  if (utils.isEven(parseInt(question, 10))) {
    return 'yes';
  }
  return 'no';
};

const getGameQuestionAndAnswer = () => {
  const question = getGameQuestion();
  const correctAnswer = getCorrectGameAnswer(question);

  return [question, correctAnswer];
};

// Add game functions into map
const gameFunctions = new Map();
gameFunctions.set('getGameRules', getGameRules);
gameFunctions.set('getGameQuestionAndAnswer', getGameQuestionAndAnswer);

export default gameFunctions;
