const express = require('express');

const bitlyrouter = express.Router();

const {handleGenerateLink,handleGetRedirectionLink}= require('../controllers/bitly')

bitlyrouter.route('/link').post(handleGenerateLink);

bitlyrouter.route('/:id').get(handleGetRedirectionLink);

module.exports= bitlyrouter;