export const isEvenNumber = (anyNumber) => {
  if (anyNumber % 2 === 0) {
    return true;
  }
  return false;
};

export const getRandomNumber = (max) => Math.floor(Math.random() * max);

// eslint-disable-next-line max-len
export const getRandomOperator = (operations) => operations[Math.floor(Math.random() * operations.length)];

export const getCommonDividers = (firstNumber, secondNumber) => {
  const firstdividers = [];
  const seconddividers = [];
  const commondividers = [];
  for (let i = 1; i <= firstNumber; i += 1) {
    if (firstNumber % i === 0) {
      firstdividers.push(i);
    }
  }
  for (let i = 1; i <= secondNumber; i += 1) {
    if (secondNumber % i === 0) {
      seconddividers.push(i);
    }
  }
  for (let a = 0; a < firstdividers.length; a += 1) {
    for (let b = 0; b < seconddividers.length; b += 1) {
      if (firstdividers[a] === seconddividers[b]) {
        commondividers.push(seconddividers[b]);
        break;
      }
    }
  }
  return commondividers[commondividers.length - 1];
};

export const getRandomArray = (firstNumber, step, length) => {
  const Array = [firstNumber];
  for (let i = 0; i < length - 1; i += 1) {
    Array.push(Array[i] + step);
  }
  return Array;
};

export const getDividers = (number) => {
  const dividers = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      dividers.push(i);
    }
  }
  return dividers;
};
