const express = require('express');
const config = require("config");

const app = express();

const PORT = config.get("port") || 000;

const server = app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})  

module.exports = server;