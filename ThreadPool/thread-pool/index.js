const crypto = require("node:crypto");

//===========>>>  Syncronus and blocking ==>> Nodejs using single thread
// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// console.log("Hash: ", Date.now() - start)
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
// console.log("Hash: ", Date.now() - start)
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
// console.log("Hash: ", Date.now() - start)

//asyn and non blocking    ==>> Nodejs using multiple thread
const Max_Calls = 8;
const start = Date.now();
for (let i = 0; i < Max_Calls; i++) {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log(`Hash : ${i + 1} `, Date.now() - start)
    });
}

//Note:- A few asyn methods like fs.readFile and crypt.pbkdf2 run on a separate thread in libuv's thread pool. They do run synchronously in their own thread but as far as the main thread is concerned, it appears as if the method is running asyn.s