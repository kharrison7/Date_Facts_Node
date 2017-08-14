// app/index.js
// This calls in the chalk module.
const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));
// This calls in the moment module.
let moment = require('moment');
moment().format();
// console.log(moment());

// These give today's date information and day of the year.
let now = moment().format('LLLL');
let day_of_year = moment().format('DDDo');

// These 3 give the number of sceonds in the day.
var mmt = moment();
// today at midnight
var mmtMidnight = mmt.clone().startOf('day');
// Difference in seconds
var diffMinutes = mmt.diff(mmtMidnight, 'seconds');

// This checks to see if it is dst (Daylight Savings Time).
let tof = moment(mmt).isDST();
let dst = 'is';
if (tof !== true){
  dst = 'is not';
}

// This checks to see if it is a leap year.
let is_leap = moment(mmt).isLeapYear();
let leap_year = 'is not';
if (is_leap === true){
  leap_year = 'is';
}

// These console.log out the information to the terminal.
console.log(`It is ${chalk.blue(now)}.`);
console.log(`It is ${chalk.magenta(day_of_year)} day of the year.`);
console.log(`It is ${chalk.cyanBright(diffMinutes)} seconds into the day.`);
console.log(`It ${chalk.green(dst)} during Daylight Savings time.`);
console.log(`It ${chalk.red(leap_year)} a leap year.`);
console.log(chalk.red('DONE!'));
