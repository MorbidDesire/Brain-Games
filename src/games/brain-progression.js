#!/usr/bin/env node
import customGame from '../index.js';
import getRandomNumber from '../customs.js';

const description = 'What number is missing in the progression?';

const getRandomElement = (max) => Math.floor(Math.random() * max);

const getRandomArray = (firstNumber, step, length) => {
  const Array = [firstNumber];
  for (let i = 0; i < length - 1; i += 1) {
    Array.push(Array[i] + step);
  }
  return Array;
};

const questionAndAnswer = () => {
  const randomArray = getRandomArray(getRandomNumber(10), getRandomNumber(5), 10);
  const randomNumber = randomArray[getRandomElement(randomArray.length)];
  const questionArray = [];
  for (let i = 0; i < randomArray.length; i += 1) {
    if (randomArray[i] === randomNumber) {
      questionArray.push('..');
    } else {
      questionArray.push(randomArray[i]);
    }
  }
  const question = `${questionArray.join(' ')}`;
  const correctAnswer = String(randomNumber);
  return [question, correctAnswer];
};
export default () => {
  customGame(description, questionAndAnswer);
};
