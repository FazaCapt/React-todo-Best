var moment = require('moment');

console.log(moment().format());

// january 1st 1970 @12.00am -> 0
// january 1st 1970 @12.01am -> -60

var now = moment();

console.log('Current timeStamp ', now.unix());

var timeStamp = 1496391675;
var currentMoment = moment.unix(timeStamp);
console.log('current moment ', currentMoment.format('MMM D, YYY @ h:mm a'));

// january 3rd, 2016 @ 12:13 AM
console.log('current moment ', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
