// 22.01.25

/* */

//                                                            FILE SYSTEM MODULE (FS MODULE)



const fs = require("fs")       //import fs

//                                                       WRITE FILE

// fs.writeFile("sample.txt","created a file using fs" , (err)=>{})     //()=>{} - used to handle error
// fs.writeFile("sample.txt","hello this is a write file.Here overwriting ocuured" , (err)=>{}) 


// fs.appendFile("sample.txt","\n \nhere we use 'appendFile' method to avoid overwriting",(err)=>{})     //appended method



//                                                     READ FILE

// fs.readFile("sample.txt",(err,data)=>{
//     console.log(data)                              //buffer data outputed here
// })


// fs.readFile("sample.txt",(err,data)=>{
//     console.log(data.toString())                      //actual data outputed here
// })



// fs.readFile("sample.txt","utf8",(err,data)=>{         // parameter added for actual data
//     console.log(data)                                 //actual data outputed here
// })



// fs.unlink("sample.txt",()=>{})                          // to delete file






//                                                          ERROR HANDLING IN FS


// fs.writeFile("sample1.txt","error handling",(err)=>{})

// fs.readFile("sample1.txt","utf8",(err,data)=>{
//     console.log(data)
// })



// try{                                                   // error handling - traditional method
//     fs.readFile("sample1.tt","utf8",(err,data)=>{
//         if(err){
//             throw err
//         }
//         console.log(data)
//     })
// }catch(error){
//     console.log(error.message)
// }



// fs.readFile("sample.txt","utf8",(err,data)=>{            //method-2
//     console.log(data)
// })
// process.on("uncaughtException",(err)=>{
//     console.log(err.message)
// })


// fs.readFile("sample.tt",(err, data) => {                 //method-2
//     console.log(data);          
// }); 
// process.on("uncaughtException", (err) => {
//     console.log(err.message);    
// })



//                                                  FOLDER CREATION / DELETION


// fs.mkdir("folder",(err)=>{});            //to create folder
// fs.rmdir("folder",(err)=>{});               // to remove folder







//                                                   THREADING

 
//                            EVENT LOOP

// fs.writeFile("thread.txt","threading......",(err)=>{})
// fs.readFile("thread.txt","utf8",(err,data)=>{
//     console.log(data)
// })
// console.log("shumma :)")  
// /*                      
//    O/P : shumma :)  
//         threading...... 
//  - bcz,readfile take some time to execute its no possible to hold the code so it prints like this(readfile goes to background) 
// */



// //                        SYNCHRONOUS THREAD
// const filedata = fs.readFileSync("thread.txt","utf-8")
// console.log(filedata);

// console.log("summa :)")
// /*
// O/P:  threading......
//       summa :)   */





// TASK - Data Of OldFile Should Given As Parameter Of NewFile - Without 'readFileSync()'

//                             CALLBACK HELL

// fs.writeFile("firstfile.txt","first file data",(e)=>{
//     fs.appendFile("firstfile.txt","\nappended data",(e)=>{       //run in order (synchronous operation)
//         fs.readFile("firstfile.txt","utf8",(e,d)=>{
//             console.log(d)
//         })
//     })        
// })




// TASK - Data Of OldFile Should Given As Parameter Of NewFile - With 'readFileSync()'

// fs.writeFileSync("firstfile1.txt", "first file data 1",(err)=>{});  
// fs.appendFileSync("firstfile1.txt", "\nappended data 1",(err)=>{});  
// const data = fs.readFileSync("firstfile1.txt", "utf8");  
// console.log(data);  

//                        (OR)

const w = fs.writeFileSync("firstfile1.txt", "first file data 1");  
fs.appendFileSync("firstfile1.txt", "\nappended data 1");  
const r = fs.readFileSync("firstfile1.txt", "utf8");  
console.log(r);  
