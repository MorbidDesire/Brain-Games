#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';
import customGame from '../index.js';
import { getRandomNumber, getRandomOperator } from '../customs.js';

const description = 'What is the result of the expression?';

const QuestionAndAnswer = () => {
  const operations = ['+', '-', '*'];
  const randomOperator = getRandomOperator(operations);
  const pair = cons(getRandomNumber(10), getRandomNumber(10));
  const question = `${car(pair)} ${randomOperator} ${cdr(pair)}`;
  let correctAnswer = '';
  switch (randomOperator) {
    case '+':
      correctAnswer = String(car(pair) + cdr(pair));
      break;
    case '-':
      correctAnswer = String(car(pair) - cdr(pair));
      break;
    case '*':
      correctAnswer = String(car(pair) * cdr(pair));
      break;
    default:
      break;
  }
  return [question, correctAnswer];
};

export default () => {
  customGame(description, QuestionAndAnswer);
};
