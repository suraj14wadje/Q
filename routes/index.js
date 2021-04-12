const express = require('express');
const router = express.Router();

const helloWorld = require("./helloWorld")

router.use(express.json())

router.use("/hello",helloWorld)

module.exports = router;