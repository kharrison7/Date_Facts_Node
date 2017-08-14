// app/index.js

// This calls in the chalk module.
const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));
// This calls in the moment module.
let moment = require('moment');
moment().format();
console.log(moment());

let now = moment().format('LLLL');
let day_of_year = moment().format('DDDo');
// let day_of_year = moment().format('DDDo');

// These 3 give the number of sceonds in the day.
// moment
var mmt = moment();
// Your moment at midnight
var mmtMidnight = mmt.clone().startOf('day');
// Difference in minutes
var diffMinutes = mmt.diff(mmtMidnight, 'seconds');



// moment([2011, 2, 12]).isDST();

console.log(`It is ${chalk.blue(now)}.`);
console.log(`It is ${chalk.magenta(day_of_year)} day of the year.`);
console.log(`It is ${chalk.cyanBright(diffMinutes)} seconds into the day.`);
console.log(`It is ${chalk.green(day_of_year)} during the daylight savings time.`);
console.log(`It is ${chalk.red(day_of_year)} a leap year.`);






console.log(chalk.red('DONE!'));


// From date to moment
// var wrapped = moment(new Date());
// console.log(wrapped);

// From moment to date
// var date = wrapped.toDate();
// console.log(date);




// This calls the readline module.
// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//  rl.question('Would you like to know the date information?', (answer) => {
//   // console.log(`${answer}has ${answer.length} characeters.`);
//   console.log(`You said: ${answer}`);
//   rl.close();
// });
