require('./logging')

log.debug("Selected enviornment : "+ (process.env.NODE_ENV || "dev"))