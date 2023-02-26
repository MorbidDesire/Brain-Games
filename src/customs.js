export const isEvenNumber = (anyNumber) => {
  if (anyNumber % 2 === 0) {
    return true;
  }
  return false;
};

export const getRandomNumber = (max) => Math.ceil(Math.random() * max);

// eslint-disable-next-line max-len
export const getRandomOperator = (operations) => operations[Math.floor(Math.random() * operations.length)];

export const getCommonNumbers = (firstArray, secondArray) => {
  const commonNumbers = [];
  for (let a = 0; a < firstArray.length; a += 1) {
    for (let b = 0; b < secondArray.length; b += 1) {
      if (firstArray[a] === secondArray[b]) {
        commonNumbers.push(secondArray[b]);
        break;
      }
    }
  }
  return commonNumbers;
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
