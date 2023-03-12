import { cons, car, cdr } from '@hexlet/pairs';
import getRandomNumber from '../customs.js';
import customGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (y > x) {
    return getGcd(y, x);
  } if (!y) {
    return x;
  }
  return getGcd(y, x % y);
};

const getQuestionAndAnswer = () => {
  const pair = cons(getRandomNumber(1, 20), getRandomNumber(1, 20));
  const question = `${car(pair)} ${cdr(pair)}`;
  const correctAnswer = String(getGcd(car(pair), cdr(pair)));
  return [question, correctAnswer];
};

export default () => {
  customGame(description, getQuestionAndAnswer);
};
