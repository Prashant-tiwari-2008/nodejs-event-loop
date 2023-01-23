const fs = require("fs");

fs.readFile(__filename, () => {
    console.log("this is readFile 1")
})

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is promise.resolve 1"))

setTimeout(() => console.log("this is setTimeout 1"), 0)
setImmediate(() => console.log("this is setImmediate"))

for (let i = 0; i < 2000000000; i++) { }

//Note :- I/O events are polled and callback functions are added to the I/O
// queue only after the I/O is complete