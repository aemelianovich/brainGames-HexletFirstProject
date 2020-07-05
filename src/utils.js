const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const addCommaPrefixForNonEmptyStr = (str) => {
  const commaStr = (str.length === 0 ? '' : `, ${str}`);
  return commaStr;
};

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

const getRandomProgression = (firstElementMaxValue, deltaMaxValue, numOfElements) => {
  const firstNumInProgression = getRandomInt(0, firstElementMaxValue);
  const delta = getRandomInt(1, deltaMaxValue);

  const progressionNumbs = [firstNumInProgression];

  for (let i = 1; i < numOfElements; i += 1) {
    progressionNumbs.push(progressionNumbs[i - 1] + delta);
  }

  return progressionNumbs;
};

export default {
  getRandomProgression,
  getRandomInt,
  addCommaPrefixForNonEmptyStr,
  isPrime,
};
