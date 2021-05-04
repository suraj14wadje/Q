const mongoose = require("mongoose");
const config   = require("config");


mongoose.connect(config.get("db"),{ useUnifiedTopology: true ,useNewUrlParser: true })
    .then(()=> log.info("db connected !"))