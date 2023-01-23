// Note :- Most of the async methods from teh buit-in modules queue the callback funtion in the I/o queue. for this example we are useing fs module

//==============>> First Example
const fs = require("fs");

// fs.readFile(__filename,() =>{
//     console.log('this is readFile 1')
// })

// setTimeout(() =>console.log("this is first timeout 1"), 0);
// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() =>console.log("this is Promise.resolve 1"))

//===============>> Second Exampleff
setTimeout(() =>console.log("this is first timeout 1"), 100);

fs.readFile(__filename,() =>{
    console.log('this is readFile 1')
})