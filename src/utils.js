const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isPrime = (num) => {
  const minPrimeNumber = 2;
  if (num < minPrimeNumber) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if ((num % i) === 0) {
      return false;
    }
  }

  return true;
};

const getProgression = (firstElement, delta, numOfElements) => {
  const progressionNumbs = [firstElement];

  for (let i = 1; i < numOfElements; i += 1) {
    progressionNumbs.push(progressionNumbs[i - 1] + delta);
  }

  return progressionNumbs;
};

const getGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export default {
  getProgression,
  getRandomInt,
  isPrime,
  getGCD,
  isEven,
};
