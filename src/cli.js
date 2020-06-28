import readlineSync from 'readline-sync';

export const welcomeMsg = (msg='Welcome to the Brain Games') => {
    console.log(msg);
};

export const askUserName = () => {
    let userName = readlineSync.question('May I have your name? ');    
    return userName;
};

export const greetingUser = (userName='') => {
    let showUser = userName.length === 0 ? 'Unknown user' : userName;
    
    console.log(`Hello, ${showUser}!`);
};