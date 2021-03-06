const getTime = function() {
  var newYears = Date.UTC(2016, 11, 31, 31, 59, 59);
  var now = Date.parse(new Date);
  var difference = newYears - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var daysToNewYear = Math.floor(difference/day);
  var hoursToNewYear = Math.floor(difference % day / hour);
  var minutesToNewYear = Math.floor((difference % day % hour) / minute);
  var secondsToNewYear = Math.floor((difference % day % hour % minute) / second);

  var time = [
    {
      title: 'days',
      digit: daysToNewYear,
    },
    {
      title: 'hours',
      digit: hoursToNewYear,
    },
    {
      title: 'minutes',
      digit: minutesToNewYear,
    },
    {
      title: 'seconds',
      digit: secondsToNewYear,
    }
  ];

  return time;
};
module.exports = getTime;
