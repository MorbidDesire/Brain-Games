export const getRandomNumber = (max) => Math.ceil(Math.random() * max);

export const getRandomElement = (max) => Math.floor(Math.random() * max);

export const getRandomArray = (firstNumber, step, length) => {
  const Array = [firstNumber];
  for (let i = 0; i < length - 1; i += 1) {
    Array.push(Array[i] + step);
  }
  return Array;
};
