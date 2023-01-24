const fs = require('fs');

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
    console.log("this is from readablelStream close event callback")
})

setImmediate(() => console.log("this is setImmediate 1"))
setTimeout(() => console.log("this is setTimout 1"), 0)
Promise.resolve().then(() => console.log("this is Promise.resolce 1"));
process.nextTick(() => console.log("this is process.nextTick 1"))