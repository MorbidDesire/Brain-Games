#!/usr/bin/env node
import customGame from '../index.js';
import { getDividers, getRandomNumber } from '../customs.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const QuestionAndAnswer = () => {
  const question = getRandomNumber(15);
  const dividers = getDividers(question);
  const firstDivider = dividers[0];
  const secondDivider = dividers[1];
  const correctAnswer = (firstDivider === 1 && secondDivider === question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  customGame(description, QuestionAndAnswer);
};
