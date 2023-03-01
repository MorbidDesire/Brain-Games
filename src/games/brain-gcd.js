#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';
import { getRandomNumber, getDividers, getCommonNumbers } from '../customs.js';
import customGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const questionAndAnswer = () => {
  const pair = cons(getRandomNumber(20), getRandomNumber(20));
  const question = `${car(pair)} ${cdr(pair)}`;
  const firstDividers = getDividers(car(pair));
  const secondDividers = getDividers(cdr(pair));
  const commonDividers = getCommonNumbers(firstDividers, secondDividers);
  const maxDivider = commonDividers[commonDividers.length - 1];
  const correctAnswer = String(maxDivider);
  return [question, correctAnswer];
};

export default () => {
  customGame(description, questionAndAnswer);
};
