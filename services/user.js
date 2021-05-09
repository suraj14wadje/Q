const bcrypt = require('bcrypt');
const User = require('../models/user');

async function createUser(data) {
    const userData = {    
        fname: data.fname,
        lname: data.lname,
        role: data.role,
        emailId: data.emailId,
        password: data.password
    }
    userData.password = await encrypt(userData.password)
    const user = new User(userData);
    const result = await user.save();
    throw new Error('message');
}

async function encrypt(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

module.exports = {createUser};