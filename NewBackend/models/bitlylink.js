const mongoose = require("mongoose");

// const bodyParser = require('body-parser');

// app.use(express.urlencoded({extended:true}));


const LinkSchema = new mongoose.Schema({
    UserLink:{
        type:String,
        required:true
    },
    RedirectionId:{
        type:String
    },
    UserClicks:[]
});

// app.use(bodyParser.json());

const LinkModel = mongoose.model('bitlylink', LinkSchema);

module.exports={LinkModel}