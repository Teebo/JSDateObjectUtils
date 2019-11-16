const JSDateUtils = {
  getDayFromDate: (date) =>  date.getDate() < 9 ? `0${date.getDate()}` : date.getDate(),
  getMonthFromDate: (date) =>  {
    console.log(date.getMonth())
    return date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  },
  getYearFromDate: (date) => date.getFullYear(),
  getHoursFromDate: (date) => date.getHours() < 9 ? `0${date.getHours()}` : date.getHours(),
  getMinutesFromDate:(date) => date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes(),
  getTime:({hours, minutes}) => `${hours}:${minutes}`,
  getDateTime:({year, month, day, hours, minutes}) => `${year}-${month}-${day} ${JSDateUtils.getTime({hours, minutes})}`,
  getDateTimeFromDate:(date) => {
    const day = JSDateUtils.getDayFromDate(date);
    const month = JSDateUtils.getMonthFromDate(date);
    const year = JSDateUtils.getYearFromDate(date);
    const hours = JSDateUtils.getHoursFromDate(date);
    const minutes = JSDateUtils.getMinutesFromDate(date)

    return JSDateUtils.getDateTime({year, month, day, hours, minutes});
  }
}

module.exports = JSDateUtils;