#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
const braincalc = () => {
  console.log('What is the result of the expression?');
  const pair1 = cons(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
  const pair2 = cons(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
  const pair3 = cons(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
  const operations = ['+', '-', '*'];
  const tries = [pair1, pair2, pair3];

  for (let i = 0; i < tries.length; i += 1) {
    const randomOperator = operations[Math.floor(Math.random() * operations.length)];
    console.log(`Question: ${car(tries[i])} ${randomOperator} ${cdr(tries[i])}`);
    const answer = readlineSync.question('Your answer: ');
    if (randomOperator === '+') {
      if (Number(answer) === car(tries[i]) + cdr(tries[i])) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${car(tries[i]) + cdr(tries[i])}'`);
        console.log(`Let's try again, ${userName}!`);
        break;
      }
    }
    if (randomOperator === '-') {
      if (Number(answer) === car(tries[i]) - cdr(tries[i])) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${car(tries[i]) - cdr(tries[i])}'`);
        console.log(`Let's try again, ${userName}!`);
        break;
      }
    }
    if (randomOperator === '*') {
      if (Number(answer) === car(tries[i]) * cdr(tries[i])) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${car(tries[i]) * cdr(tries[i])}'`);
        console.log(`Let's try again, ${userName}!`);
        break;
      }
    }
    if (i === tries.length - 1) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default braincalc;
