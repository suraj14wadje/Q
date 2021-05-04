const mongoose = require("mongoose");
const config   = require("config");

module.exports = async()=>{
    log.warn("connecting to database....")
    await mongoose.connect(config.get("db"),{ useUnifiedTopology: true ,useNewUrlParser: true });
    log.info("db connected !")
}
