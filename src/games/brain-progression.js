#!/usr/bin/env node
import customGame from '../index.js';
import { getRandomNumber, getRandomArray, getRandomElement } from '../customs.js';

const description = 'What number is missing in the progression?';

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
