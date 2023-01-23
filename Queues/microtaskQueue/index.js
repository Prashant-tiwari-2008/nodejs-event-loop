// ============>> first Example
// console.log("console.log -1");
// process.nextTick(() => console.log("this is process.next 1"))
// console.log("console.log -2");

// ============>> Second Example
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
// for (let i = 0; i < 10; i++) {
//     process.nextTick(() => console.log(`this is process.nextTick ${i}`))
// }

//  Note:- process.nextQueue always get more priority than Promise queue
// it first run all the code from the process.nextQueue then only promise queue

// ============>> Third Example
process.nextTick(() => console.log("this is the process.nextTick 1"))
process.nextTick(() => {
    console.log("this is the process.nextTick 2");
    process.nextTick(() => {
        console.log("this is the inner next tick inside next tick")
    })
})
process.nextTick(() => {
    console.log("this is the process.nextTick 3");
    Promise.resolve().then(() => {
        console.log("this is the inner Promise tick inside next tick")
    })
})
process.nextTick(() => console.log("this is the process.nextTick 4"))
  

Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
Promise.resolve().then(() => {
    console.log("this is the Promise.resolve 2");
    process.nextTick(() => {
        console.log("this is the inner next tick inside Promise.resolve")
    })
})
Promise.resolve().then(() => {
    console.log("this is the Promise.resolve 3");
    Promise.resolve().then(() => {
        console.log("this is the inner Promise  inside Promise.resolve")
    })
})
Promise.resolve().then(() => console.log("this is Promise.resolve 4"))
