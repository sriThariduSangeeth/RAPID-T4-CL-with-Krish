const router = require("express").Router();

const {
    qOne,
    qtwo,
    qTree,
    qFour
} = require("./rapid.taskone.controller");
router.post("/q-one", qOne);
router.post("/q-two", qtwo);
router.post("/q-tree", qTree);
router.post("/q-four", qFour);

module.exports = router;