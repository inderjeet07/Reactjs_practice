// const mongoose = require('mongoose');
const mongoose=require("mongoose")

async function DatabaseConnection(url){
 return mongoose.connect(url)
}

module.exports = {
    DatabaseConnection,
}