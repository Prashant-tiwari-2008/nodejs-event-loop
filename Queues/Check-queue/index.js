const fs = require("fs")

//=============>>>  First Example
// fs.readFile(__filename, () => {
//     console.log("this is readFile 1");
//     setImmediate(() => console.log("this is inner setImmediate inside readFile"))
// })

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimout 1"), 0);

// for (let i = 0; i < 200000000; i++) { }

//=============>>>  Second Example
// fs.readFile(__filename, () => {
//     console.log("this is readFile 1");
//     setImmediate(() => console.log("this is inner setImmediate inside readFile"))
//     process.nextTick(() =>{
//         console.log("this is inner process.nextTick inside readfile")
//     })
//     Promise.resolve().then(() =>{
//         console.log("this is inner Promise.resolve insde readfile")
//     })
// })

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimout 1"), 0);

// for (let i = 0; i < 200000000; i++) { }


//=============>>>  Third Example
setImmediate(() => console.log("this is setImmediate 1"))
setImmediate(() =>{
    console.log("this is setImmediate 2");
    process.nextTick(() => console.log("this is process.nextTick 1"));
    Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
})

setImmediate(() =>console.log("this is setImmediate 3"))