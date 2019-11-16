const JSDateUtils = require('./index');
const date = new Date();
console.log('day', JSDateUtils.getDayFromDate(date));
console.log('month', JSDateUtils.getMonthFromDate(date));
console.log('year', JSDateUtils.getYearFromDate(date));
console.log('hours', JSDateUtils.getHoursFromDate(date));
console.log('minutes', JSDateUtils.getMinutesFromDate(date));
console.log('time', JSDateUtils.getTime({
  hours: JSDateUtils.getHoursFromDate(date),
  minutes: JSDateUtils.getMinutesFromDate(date),
}));

console.log('datetime', JSDateUtils.getDateTime({
  year: JSDateUtils.getYearFromDate(date),
  month: JSDateUtils.getMonthFromDate(date),
  day: JSDateUtils.getDayFromDate(date),
  hours: JSDateUtils.getHoursFromDate(date),
  minutes: JSDateUtils.getMinutesFromDate(date),
}));

console.log(JSDateUtils.getDateTimeFromDate(date));



