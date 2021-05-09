const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const moongoose = require('mongoose');
const userSchema = require('../models/user');

router.post('/register', (req, res) => {
    const user = {    
        fname: req.body.fname,
        lname: req.body.lname,
        role: req.body.role,
        emailId: req.body.emailId,
        password: req.body.password
    }
    createUser(user);
    res.status(200).send(`${user.fname} registered successfully!`);
});

// function getPassword(user) {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(user.password, salt, (err, hash) => {
//             console.log(hash);
//         });
//     });
// }

const User = moongoose.model('User', userSchema);

async function createUser(data) {
    const user = new User({
        fname: data.fname,
        lname: data.lname,
        role: data.role,
        emailId: data.emailId,
        password: await getPassword(data.password) 
    });

    const result = await user.save();
    console.log(result);
}

async function getPassword(simplePassword) {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(simplePassword, salt);
    return password;
};

module.exports = router;