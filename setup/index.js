require('dotenv').config()
require('./logging')
require("./db")

log.debug("Selected enviornment : "+ (process.env.NODE_ENV || "dev"))