const express = require('express');
const config = require("config");

const router = require('./routes')

const app = express();

const PORT = config.get("port") || 3000;

app.use("/",router)

const server = app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})  

module.exports = server;