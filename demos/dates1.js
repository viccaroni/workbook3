"use strict";

// class Date {
//   month: Number;
// }
// let date = new Date();

// let date = {
//   month: 1,
//   year: 1987,
//   day: 21,
// weekday: 0,
//   toString: function () {
//     return ` month, year, day`;
//   },
// };

// let date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toUTCString());
// console.log(date.toDateString());

// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleString());

// let anticipatedDate = new Date(2023, 5, 22, 7, 15, 30, 10);
// console.log(anticipatedDate.toString());

// let anotherDate = new Date("2023-06-22T07:15:10Z")
// console.log(anotherDate.toString());

// let d5 = new Date("2004-06-25");
// console.log(d5);

let d = new Date();
d.setMonth(1);
d.setDate(9);
d.setFullYear(1963);
console.log((d.toDateString()));
