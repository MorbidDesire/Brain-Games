#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';
import { getRandomNumber } from '../customs.js';
import customGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getDividers = (number) => {
  const dividers = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      dividers.push(i);
    }
  }
  return dividers;
};

const getCommonNumbers = (firstArray, secondArray) => {
  const commonNumbers = [];
  for (let a = 0; a < firstArray.length; a += 1) {
    for (let b = 0; b < secondArray.length; b += 1) {
      if (firstArray[a] === secondArray[b]) {
        commonNumbers.push(secondArray[b]);
        break;
      }
    }
  }
  return commonNumbers;
};

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
