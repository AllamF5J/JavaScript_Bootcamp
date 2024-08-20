let date = new Date(); // ! Output => Tue Aug 20 2024 04:14:26 GMT+0300 (Eastern European Standard Time)

const monthsOfYear = [ "Jan", "Feb", "Mar", "April", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
date.setDate(-1);

console.log(`Previous Month Is ${monthsOfYear[date.getMonth()]} And Last Day Is ${date.getDate()}`);
// ! Output => Previous Month Is Jul And Last Day Is 30