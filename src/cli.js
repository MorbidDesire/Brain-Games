import readlineSync from 'readline-sync';

const pogname = () => {
    var userName = readlineSync.question("May I have your name? ");
    console.log("Hello, " + userName + "!");
};

export default pogname;