const fs = require("fs");

function logReq(filename){
        return(req,res,next)=>{
            fs.appendFile(filename,`\n${Date.now()}:${req.ip}:${req.path}\n`,
        (err,data)=>{
            next();
        })
        }
}
module.exports ={
    logReq
}