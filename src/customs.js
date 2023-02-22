export const isEvenNumber = (anyNumber) => {
  if (anyNumber % 2 === 0) {
    return true;
  }
  return false;
};

export const getRandomNumber = (max) => Math.floor(Math.random() * max);

// eslint-disable-next-line max-len
export const getRandomOperator = (operations) => operations[Math.floor(Math.random() * operations.length)];
