const moongoose = require('mongoose');

const userSchema = moongoose.Schema({
    fname: String,
    lname: String,
    role: String,
    password: String,
    emailId: String
});

const User = moongoose.model('User', userSchema);

module.exports = User;