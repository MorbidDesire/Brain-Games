#!/usr/bin/env node
import { getRandomNumber } from '../customs.js';
import customGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEvenNumber = (anyNumber) => {
  if (anyNumber % 2 === 0) {
    return true;
  }
  return false;
};

const questionAndAnswer = () => {
  const question = getRandomNumber(100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  customGame(description, questionAndAnswer);
};
