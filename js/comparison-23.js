const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
console.log(highYesterday);
console.log(highToday);
console.log(highTomorrow);
console.log(highIcon);
