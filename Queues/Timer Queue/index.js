// note:- we can use both settimeout and setInterval function in this queue

//==========>>> FIRST EXAMPLE
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => console.log("this is setTimeout 2"), 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);
// process.nextTick(() => console.log("this is the process.nextTick 1"))
// process.nextTick(() => {
//     console.log("this is the process.nextTick 2");
//     process.nextTick(() => {
//         console.log("this is the inner next tick inside next tick")
//     })
// })
// process.nextTick(() => console.log("this is the process.nextTick 4"))


// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
// Promise.resolve().then(() => {
//     console.log("this is the Promise.resolve 2");
//     process.nextTick(() => {
//         console.log("this is the inner next tick inside Promise.resolve")
//     })
// })
// Promise.resolve().then(() => console.log("this is Promise.resolve 4"))

//==========>>> SECOND EXAMPLE
setTimeout(() => console.log("this is setTimeout 1"), 0);
setTimeout(() => {
    console.log("this is setTimeout 2")
    process.nextTick(() => console.log("this is the inner next inside the setTimeout"))
}, 0);
setTimeout(() =>  {
    console.log("this is setTimeout 3")
    Promise.resolve().then(() => console.log("this is the inner Promise inside the setTimeout"))
    console.log("this is setTimeout 4")

}, 0);
setTimeout(() => console.log("this is settimtout 5") ,0);

process.nextTick(() => console.log("this is the process.nextTick 1"))
process.nextTick(() => {
    console.log("this is the process.nextTick 2");
    process.nextTick(() => {
        console.log("this is the inner next tick inside next tick")
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
Promise.resolve().then(() => console.log("this is Promise.resolve 3"))

//NOTE :- Callbacks in microtask quesues are executed in b/w the execution of callback in the timer queue

// NOTE :- Timer queue is technically is not a queue it is a mean heap data structure. for understanding we called it as timer queue