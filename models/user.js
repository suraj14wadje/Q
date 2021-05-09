const moongoose = require('mongoose');

const userSchema = moongoose.Schema({
    fname: String,
    lname: String,
    role: String,
    password: String,
    emailId: String
});

module.exports = userSchema;