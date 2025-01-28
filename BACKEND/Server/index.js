//22.01.25

/*

console.log("hi :)")


//                                                USER INPUT

// import { createInterface } from "readline"    //import modules in ECMA script

const readline = require("readline")     //import in common js (cjs)
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

// r1.question("Enter name:",(data)=>{
//     console.log("hello , ",data)        //printed inside function
// })


let variable = " "
r1.question("enter name:",(data)=>{
    variable = data
    // console.log("Hello,", variable);
})
console.log(variable);                     //printed outside function







//                                                OS MODULE

const os = require("os")          //import os

// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.version());
// console.log(os.freemem());
// console.log(os.userInfo());
// console.log(os.totalmem());
// console.log(os.networkInterfaces());
// console.log(os.uptime());
// console.log(os.type());
// console.log(os.release());
// console.log(os.endianness());
console.log(os.loadavg());


*/



//                                                        PATH MODULE

const { log } = require("console");
const path = require("path")     //import path

//global variable

// console.log(__dirname)           //cwd
// console.log(__filename)          //cw file


// console.log(path.basename("D:\SEMESTER-4\Bootcamp_Fullsack\BACKEND\Server\index.js"));
// console.log(path.extname('sample.txt'));
// console.log(path.join("folder","index.js"));          //important - join
console.log(path.parse("D:\SEMESTER-4\Bootcamp_Fullsack\BACKEND\Server\index.js"));
console.log(path.parse("D:\index.js"));


