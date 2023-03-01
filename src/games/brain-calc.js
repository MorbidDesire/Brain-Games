#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';
import customGame from '../index.js';
import { getRandomNumber } from '../customs.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getRandomOperator = (defOperations) => {
  const randomOperator = defOperations[Math.floor(Math.random() * defOperations.length)];
  return randomOperator;
};

const questionAndAnswer = () => {
  const randomOperator = getRandomOperator(operations);
  const pair = cons(getRandomNumber(10), getRandomNumber(10));
  const question = `${car(pair)} ${randomOperator} ${cdr(pair)}`;
  const calculate = () => {
    let answer = '';
    switch (randomOperator) {
      case '+':
        answer = String(car(pair) + cdr(pair));
        break;
      case '-':
        answer = String(car(pair) - cdr(pair));
        break;
      case '*':
        answer = String(car(pair) * cdr(pair));
        break;
      default:
        break;
    }
    return answer;
  };
  const correctAnswer = calculate(randomOperator);
  return [question, correctAnswer];
};

export default () => {
  customGame(description, questionAndAnswer);
};
