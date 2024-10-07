const express = require("express");

const mongoose = require("mongoose");

async function DataBaseConnection(fileName) {
    mongoose.connect(fileName);
}

module.exports={
    DataBaseConnection
}

// mongoose.connect('mongodb://localhost:27017/NodeBackend').then(()=>console.log('datbase is working fine'));