const mongoose = require("mongoose");

async function DataBaseConnections(url){
    return mongoose.connect(url);
    // .then(()=>console.log('Mongodb connected'))
    // .catch(err=>console.log("this is the error ",err))
}
module.exports={
    DataBaseConnections
}