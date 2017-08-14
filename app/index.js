// app/index.js
// const calc = require('./calc')

// This calls the readline module.
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the input text?', (answer) => {

// This sends the data to calc and reurns a result.
// const result = calc.sum(numbersToAdd1, numbersToAdd2)
let double;

function sum (num) {
    double = num*2;
    return double;
  }

sum(answer);

  // console.log(`${answer}has ${answer.length} characeters.`);
  console.log(`${answer} doubled is: ${double}`);
  rl.close();
});
