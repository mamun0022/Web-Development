
const now = new Date();
const date1 = new Date('May 11 2018 9:00');
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);

console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toISOString()) // internationaly use