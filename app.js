const express = require('express');
const setup = require('./setup');
const router = require('./routes')

const app = express();

app.use("/",router)

const startServer = async (PORT,callback)=>{

    await setup();

    const server = app.listen(PORT, ()=>{
        log.info(`Listening on port ${PORT}`);
    }) 

    if(callback) callback(server);
    return server;
}

module.exports = { getApp:()=>app, listen : startServer}