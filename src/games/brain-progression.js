#!/usr/bin/env node
import customGame from '../index.js';
import getRandomNumber from '../customs.js';

const description = 'What number is missing in the progression?';

const getProgression = (startNum, step) => {
  const progression = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + step * i);
  } return progression;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(0, 50);
  const step = getRandomNumber(2, 8);
  const progression = getProgression(firstNumber, step);
  const randomIndex = getRandomNumber(0, 9);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => {
  customGame(description, getQuestionAndAnswer);
};
