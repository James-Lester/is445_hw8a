const moment = require('moment');

const now = moment();
const dt = moment("1976-11-26");
const diff = moment.duration(now.diff(dt));

console.log(now.format('LLLL'));

console.log(`${diff.years()} years ago`);