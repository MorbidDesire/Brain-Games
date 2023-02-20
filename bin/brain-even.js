#!/usr/bin/env node
import readlineSync from 'readline-sync';

const firstNumber = Math.floor(Math.random() * 100);
const secondNumber = Math.floor(Math.random() * 100);
const thirdNumber = Math.floor(Math.random() * 100);
const tries = [firstNumber, secondNumber, thirdNumber];

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log("Answer 'yes' if the number is even, otherwise answer 'no'");
for (let i = 0; i < tries.length; i += 1) {
  console.log(`Question: ${tries[i]}`);
  const answer = readlineSync.question('Your answer: ');
  // eslint-disable-next-line no-cond-assign
  const evenNumber = tries[i] % 2 === 0;
  const oddNumber = tries[i] % 2 !== 0;
  if ((answer === 'yes' && evenNumber) || (answer === 'no' && oddNumber)) {
    console.log('Correct!');
  } else if (evenNumber) {
    console.log(`'${answer}' is wrong answer. Correct answer was 'yes'`);
    console.log(`Let's try again, ${userName}!`);
    break;
  } else {
    console.log(`'${answer}' is wrong answer. Correct answer was 'no'`);
    console.log(`Let's try again, ${userName}`);
    break;
  }
  if (i === tries.length - 1) {
    console.log(`Congratulations, ${userName}`);
  }
}
