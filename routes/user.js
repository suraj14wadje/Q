const express = require('express');
const user = require('../services/user');
const router = express.Router();

router.post('/register', async (req, res) => {
    await user.createUser(req.body)
    res.status(200).send(`${req.body.fname} registered successfully!`)
});

module.exports = router;