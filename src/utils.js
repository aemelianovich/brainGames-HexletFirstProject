const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const addCommaPrefixForNonEmptyStr = (str) => {
  const commaStr = (str.length === 0 ? '' : `, ${str}`);
  return commaStr;
};

export default { getRandomInt, addCommaPrefixForNonEmptyStr };
