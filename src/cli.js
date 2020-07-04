import readlineSync from 'readline-sync';

const askUserName = (question = 'May I have your name? ') => {
  const userName = readlineSync.question(question);
  return userName;
};

export default { askUserName };
