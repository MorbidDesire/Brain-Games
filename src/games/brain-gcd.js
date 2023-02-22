#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';
import { getRandomNumber, getCommonDividers } from '../customs.js';
import customGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const QuestionAndAnswer = () => {
  const pair = cons(getRandomNumber(20) + 1, getRandomNumber(20) + 1);
  const question = `${car(pair)} ${cdr(pair)}`;
  const maxDivider = getCommonDividers(car(pair), cdr(pair));
  const correctAnswer = String(maxDivider);
  return [question, correctAnswer];
};

export default () => {
  customGame(description, QuestionAndAnswer);
};
