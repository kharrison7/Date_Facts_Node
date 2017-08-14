// app/index.js

// This calls in the chalk module.
const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));
// This calls in the moment module.
let moment = require('moment');
moment().format();
console.log(moment());

let now = moment().format('LLLL');

console.log(`It is ${chalk.blue(now)}.`);
// console.log(`It is ${chalk.blue(moment(now, "MM-DD-YYYY").toDate())}`);







// From date to moment
// var wrapped = moment(new Date());
// console.log(wrapped);

// From moment to date
// var date = wrapped.toDate();
// console.log(date);




// This calls the readline module.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 rl.question('Would you like to know the date information?', (answer) => {
  // console.log(`${answer}has ${answer.length} characeters.`);
  console.log(`You said: ${answer}`);
  rl.close();
});
