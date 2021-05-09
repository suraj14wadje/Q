require('express-async-errors');
const env = require('dotenv');
const db = require("./db")

module.exports = async ()=>{
    env.config()
    require('./logging')
    log.debug("Selected enviornment : " +  process.env.NODE_ENV )
    await db();
}

