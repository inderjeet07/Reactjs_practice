const http=require("http");
const fs= require("fs");
const { log } = require("console");

const NewBackend=http.createServer((req,res)=>{
    // console.log("New Request recive",req.headers);
    const log=`${Date.now()}: New Req Recived\n`
    fs.appendFile('log.txt',log,(err,data)=>{

        switch(req.url){
            case '/':
                res.end('This is homepage');
                break;
            case '/about':
                res.end('This is inderjeet');
                break;
            case '/contact':
                res.end('This is contact page');
                break;
            default:
                res.end('404 page not found');
                break;
        }
      
        // res.end('Hello from server')
        
    })
});
NewBackend.listen(8000,()=>console.log('server started'));