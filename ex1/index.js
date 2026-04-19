 const circles = require('./circles.js');

 const test = radius => {
    let str = "";
    str += `The circumference of a circle of radius ${radius} is ${circles.circumference(radius)}\n`
    str += `Its area is ${circles.area(radius)}`
    console.log(str);
 }


 const n = Math.floor(Math.random() * 10) + 1;
 test(n);