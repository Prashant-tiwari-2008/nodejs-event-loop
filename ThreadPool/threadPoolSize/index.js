//Note :- libuv's thread pool has 4 threads. we can increse the thread pool size

const crypto = require("node:crypto");

//increasing thread pool size
process.env.UV_THREADPOOL_SIZE = 8
const Max_Calls = 8;
const start = Date.now();
for (let i = 0; i < Max_Calls; i++) {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log(`Hash : ${i + 1} `, Date.now() - start)
    });
}

// Note :- By increasing the thread pool size, we are able to imporve the total time taken to run multiple calls of an asynchronous method like pbkdf2.but if we increase thread pool size beyond the CPU core size. the average time taken by per method also increases.

