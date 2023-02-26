#!/usr/bin/env node
import customGame from '../index.js';
import { getRandomNumber, getRandomArray } from '../customs.js';

const description = 'What number is missing in the progression?';

const QuestionAndAnswer = () => {
  const randomArray = getRandomArray(getRandomNumber(10), getRandomNumber(5), 10);
  const randomNumber = randomArray[getRandomNumber(randomArray.length)];
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
  customGame(description, QuestionAndAnswer);
};
