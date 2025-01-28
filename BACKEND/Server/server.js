//22.01.25
/*
//                                                 HTTP MODULE

const { readFile } = require("fs")
const http = require("http")     //import http


// //                                CHAINING METHOD

// http.createServer((req,res)=>{                          //req-request , res - response
//     console.log("server called")                        //o/p - when in browser 'localhost:3000' bcz,3000 given in listen - here its loads bcz, no respond is given
// }).listen(3000,()=>console.log("server is running")     //intimate that the server is running  [CHAINING]
// )      



//                                     USED VARIABLE

// const fs = require("fs")

// const s = http.createServer((req,res)=>{                          
//     // console.log("server called")
//     console.log(req.url)

//     fs.readFile("indexhtml.html","utf-8",(e,d)=>{          // from indexhtml.html
//         res.writeHead(200,{"Content-Type":"text/html"})    //para - status code,header | o/p - inspect - network - ctrl R 
//         res.end(d)  
//     })

//     // res.end("hello nodemon")    //end response          // o/p - 'hello' in web (localhost:3000) 
  
// })
// s.listen(3000,()=>console.log("server is running")         // port - (hre,3000) can be of 2-4 digits 
// )   




//nodemon - automatically restarts the server when code changes are detected during development.






// =====

const s = require("http");
const u = require("url");

s.createServer((req, res) => {
  let { query } = u.parse(req.url, true);  //to extract query - url module required
  console.log(query.id);
  let { id, name } = query;
  console.log(id);
  console.log(name);

  res.end("hello");
}).listen(14, () => {
  console.log("Server is running on port 14");
});


*/




//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
//                                                   23.01.25


//                                           JSON DATA IN SERVER
const http = require("http")
const fs = require("fs")


const jsonData = fs.readFileSync("product.json","utf8") 
console.log(jsonData)

const server = http.createServer((req,res)=>{
  res.writeHead(200,{"content-type":"application/json"})
  res.end(jsonData)

})
server.listen(1416,()=>{console.log("http://127.0.0.1:1416")})





//                                               ROUTING IN JS

const http = require("http")
const fs = require("fs")


const jsonData = fs.readFileSync("product.json","utf8") 
console.log(jsonData)

const server = http.createServer((req,res)=>{
  // res.writeHead(200,{"content-type":"application/json"})
  // res.end(jsonData)

  let path = req.url                      //routing
  if(path==="/home" || path ==="//"){res.end("home")}
  else if(path === "/contact"){res.end("contact")}
  else if(path === "/about"){res.end("about")}
  else if(path === "/products"){res.end("products")}
  else{res.end("404")}

})
server.listen(1416,()=>{console.log("http://127.0.0.1:1416")})








//                                                      LOCAL SERVER ACCESS - sample

const http = require("http")
const fs = require("fs")
const path = require("path")

const data = fs.readFileSync(path.join(__dirname,"templates","temphtml.html"),"utf8")  //read file from another folder

const s = http.createServer((req,res)=>{
  res.end(data)
  
})
s.listen(89,()=>{console.log("Running in server")})


*/




// //                                              DYNAMIC RENDERING

// const http = require("http")
// const fs = require("fs")


// const jsonData = fs.readFileSync("product.json","utf8") 
// console.log(jsonData)

// const htmlsty = fs.readFileSync("indexhtml.html","utf8")

// const server = http.createServer((req,res)=>{
//   // res.writeHead(200,{"content-type":"application/json"})
//   // res.end(jsonData)

//   let path = req.url                      //routing
//   if(path==="/home" || path ==="//"){
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(htmlsty);
// }
    
//   else if(path === "/contact"){res.end("contact")}
//   else if(path === "/about"){res.end("about")}
//   else if(path === "/products"){res.end("products")}
//   else{res.end("404")}



// })
// server.listen(1416,()=>{console.log("http://127.0.0.1:1416")})













//                                    (REFER BELOW - DYNAMIC ROUTING)

// ref - producthtml.html , product.json 

const http = require("http")
const fs = require("fs")
const p = require("path")
const url = require("url")  //from quering - 'parse' method used

const data = fs.readFileSync(p.join(__dirname,"templates","temphtml.html"),"utf8")  //read file from another folder
const prodata = fs.readFileSync(p.join(__dirname,"templates","producthtml.html"),"utf8")
// console.log(prodata)

const jsonData = JSON.parse(fs.readFileSync("product.json", "utf-8"))  //JSON.parse - used to convert json file to jsobj file
// console.log(jsonData);
let productHtmlArray = jsonData.map((prod)=>{
  let output = prodata.replace("{{%IMAGE%}}",prod.productImage)
  output = output.replace("{{%NAME%}}",prod.name)
  output = output.replace("{{%MODENAME%}}",prod.modeName)
  output = output.replace("{{%MODENUMBER%}}",prod.modelNumber)
  output = output.replace("{{%SIZE%}}",prod.size)
  output = output.replace("{{%CAMERA%}}",prod.camera)
  output = output.replace("{{%PRICE%}}",prod.price)
  output = output.replace("{{%COLOR%}}",prod.color )
  output = output.replace("{{%ID%}}",prod.id )
  return output;    //must return to get o/p
})

function renderProduct(prod){ 
    let output = prodata.replace("{{%IMAGE%}}",prod.productImage)
    output = output.replace("{{%NAME%}}",prod.name)
    output = output.replace("{{%MODENAME%}}",prod.modeName)
    output = output.replace("{{%MODENUMBER%}}",prod.modelNumber)
    output = output.replace("{{%SIZE%}}",prod.size)
    output = output.replace("{{%CAMERA%}}",prod.camera)
    output = output.replace("{{%PRICE%}}",prod.price)
    output = output.replace("{{%COLOR%}}",prod.color )
    output = output.replace("{{%ID%}}",prod.id )
    return output;    //must return to get o/p
  
 } //to render obj

productHtmlArray = productHtmlArray.join(",")
// console.log(productHtmlArray)
// console.log(typeof(productHtmlArray))



const s = http.createServer((req,res)=>{
  // res.end(data)    //- should comment before routing

  let path = req.url                      //routing  starts from here
  path = path.toLowerCase()         //changing path to l.c

  let {query,pathname} = url.parse(req.url,true)     //for quering
  pathname=pathname.toLowerCase()

 console.log(query)
 console.log(path)
 console.log(pathname)




  if(path==="/home"){
   res.end(data.replace("{{%CONTENT%}}","You Are At Home"))
  } 
  else if(path === "/contact"){
   res.end(data.replace("{{%CONTENT%}}","You Are At Contact"))
  }
  else if(path === "/about"){
    res.end(data.replace("{{%CONTENT%}}","You Are At About"))
  }
  else if(pathname === "/products"){  
    console.log(path.indexOf("/products"));    //path can be with query so "indexOf" is used

    if(query.id){
      let id = query.id*1     //to convert string to int
      let findone = jsonData.find(item=>item.id===id)
      // console.log(findone)
      res.end(data.replace("{{%CONTENT%}}",renderProduct(findone)))

      // res.end("Hellooo...")     //use 'Product' as path to print as "Helooo..."
    }else{
    res.end(data.replace("{{%CONTENT%}}",productHtmlArray))
    }

  }
  else{res.end("404")}
  
})
s.listen(89,()=>{console.log("Running in server")})





//NOTE : {{%CONTENT%}} - ginger tag