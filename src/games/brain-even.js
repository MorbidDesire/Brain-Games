#!/usr/bin/env node
import { isEvenNumber, getRandomNumber } from '../customs.js';
import customGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const QuestionAndAnswer = () => {
  const question = getRandomNumber(100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  customGame(description, QuestionAndAnswer);
};
