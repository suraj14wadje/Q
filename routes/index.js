const express = require('express');
const router = express.Router();

const error = require("../middleware/error")
const helloWorld = require("./helloWorld")
const user = require('./user');

router.use(express.json())

router.use("/hello",helloWorld)

router.use('/user', user);

router.use(error)

module.exports = router;