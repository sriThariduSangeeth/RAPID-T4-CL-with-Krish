const router = require("express").Router();

const { numberReverse } = require("./reverse-number.controller");

router.post("/number-reverse", numberReverse);

module.exports = router;