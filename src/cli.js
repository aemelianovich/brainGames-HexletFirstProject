import readlineSync from 'readline-sync';

export const showWelcomeMsg = (msg = 'Welcome to the Brain Games') => {
  console.log(msg);
};

export const askUserName = (question = 'May I have your name? ') => {
  const userName = readlineSync.question(question);
  return userName;
};

export const showGreetingUser = (userName = '') => {
  const showUser = userName.length === 0 ? 'Unknown user' : userName;

  console.log(`Hello, ${showUser}!`);
};
