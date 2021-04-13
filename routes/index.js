const express = require('express');
const router = express.Router();

const error = require("../middleware/error")
const helloWorld = require("./helloWorld")

router.use(express.json())

router.use("/hello",helloWorld)

router.use(error)

module.exports = router;