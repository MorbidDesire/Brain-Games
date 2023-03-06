#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';
import customGame from '../index.js';
import getRandomNumber from '../customs.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getRandomOperator = (defOperations) => {
  const randomOperator = defOperations[Math.floor(Math.random() * defOperations.length)];
  return randomOperator;
};

const calculate = (userOperator, firstNumber, secondNumber) => {
  let answer = '';
  switch (userOperator) {
    case '+':
      answer = String(firstNumber + secondNumber);
      break;
    case '-':
      answer = String(firstNumber - secondNumber);
      break;
    case '*':
      answer = String(firstNumber * secondNumber);
      break;
    default:
      break;
  }
  return answer;
};

const getQuestionAndAnswer = () => {
  const randomOperator = getRandomOperator(operations);
  const pair = cons(getRandomNumber(10), getRandomNumber(10));
  const question = `${car(pair)} ${randomOperator} ${cdr(pair)}`;

  const correctAnswer = calculate(randomOperator, car(pair), cdr(pair));
  return [question, correctAnswer];
};

export default () => {
  customGame(description, getQuestionAndAnswer);
};
