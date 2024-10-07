const {LinkModel} = require('../models/bitlylink');

const shortid = require('shortid');

const bodyParser = require('body-parser');

async function handleGenerateLink(req,res) {

    console.log("Body: ", req.body.url);

    const newId = shortid.generate();

      const insert_data = await LinkModel.create( {  UserLink: req.body.url,
        RedirectionId:newId, } )

      res.json(`URL is : ${"http://localhost:"+8000+"/"+newId}`)
    
}

async function handleGetRedirectionLink(req,res) {
    const find_data= await LinkModel.findOneAndUpdate({RedirectionId:req.params.id},{
        $push:{
            UserClicks: Date.now()

        }
    })

    if (!find_data) {
        return res.status(404).send("Link not found");
    }

    console.log("find_data", find_data.UserLink);

    // Redirect to the UserLink
    res.redirect(find_data.UserLink); 
}

module.exports={
    handleGenerateLink,handleGetRedirectionLink
}