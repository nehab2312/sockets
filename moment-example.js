var moment = require('moment');
var now = moment();

console.log(now.format());
var timeStamp = 1456131530666;
var timeStampMoment = moment.utc(timeStamp);
console.log(timeStampMoment.local().format('h:mm a'));


console.log(now.format('MMM Do YYYY ,h:mm:ss a'));