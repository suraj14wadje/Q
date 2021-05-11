const express = require('express');
const user = require('../services/user');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { error} = user.validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const result = await user.createUser(req.body);
    res.status(200).send(result);
});

module.exports = router;