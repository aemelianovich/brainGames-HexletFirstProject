import readlineSync from 'readline-sync';

const allowedValues = ['yes', 'no'];
const trueValues = ['yes'];

const isEven = (num) => (num % 2 === 0);

const checkAnswer = (checkValue, arr) => arr.includes(checkValue);

const runEvenGame = (numberOfRounds, playerName = '') => {
  // guard condition
  if (numberOfRounds < 1) {
    throw new Error('Number of rounds should be >= 1');
  }
  // Show game rules
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // Play round iterative recursion
  const playRound = (currRound, maxRound) => {
    // Termination condition
    if (currRound > maxRound) {
      return true;
    }

    // Generate question with random number
    const randomNum = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNum} `);

    // Get answer
    const answer = readlineSync.question('Your answer: ');

    // Check correctness
    const isEvenResult = isEven(randomNum);
    const isTrueAnswerResult = checkAnswer(answer, trueValues);

    if (checkAnswer(answer, allowedValues)) {
      if ((isEvenResult && isTrueAnswerResult)
          || (!isEvenResult && !isTrueAnswerResult)) {
        console.log('Correct!');
        // Go to the next round
        return playRound(currRound + 1, maxRound);
      }
    }

    // Show incorrect answer
    if (isEvenResult) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
    }
    return false;
  };

  // Build ,<name> string if name is not empty
  const commaName = (playerName.length === 0 ? '' : `, ${playerName}`);

  // Init first round
  // If all rounds will be ended successfully then congrat otherwise ask for another try
  if (playRound(1, numberOfRounds)) {
    console.log(`Congratulations${commaName}!`);
  } else {
    console.log(`Let's try again${commaName}!`);
  }
};

export default runEvenGame;
