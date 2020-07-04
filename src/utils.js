const getRandomInt = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
};

const addCommaPrefixForNonEmptyStr = (str) => {
  const commaStr = (str.length === 0 ? '' : `, ${str}`);
  return commaStr;
};

export default { getRandomInt, addCommaPrefixForNonEmptyStr };
