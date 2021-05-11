const bcrypt = require('bcrypt');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
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
    delete result['password'];
    return result;
}

async function encrypt(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

function validateUser(user) {
    const schema = Joi.object({
        fname: Joi.string().min(3).required(),
        lname:  Joi.string().min(3).required(),
        role: Joi.string().required(),
        emailId: Joi.string().email().required(),
        password: passwordComplexity()
    })
    return schema.validate(user) 
}

module.exports.createUser = createUser;
module.exports.validateUser = validateUser;