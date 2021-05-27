const { queationOne } = require("./qOne/rapid.qOne.service");
const { queationTwo } = require("./qTwo/rapid.qTwo.service");
const { queationTree } = require("./qTree/rapid.qTree.service");
const { queationFour } = require("./qFour/rapid.qFour.service");

async function qOne(req, res) {
    const response = await queationOne(req).then(data => {
        res.status(200).json({
            success: 1,
            data: data
        });
    }).catch(error => {
        res.status(404).json({
            success: 0
        });
    });

}

async function qtwo(req, res) {

    const response = await queationTwo(req).then(data => {
        res.status(200).json({
            success: 1,
            data: data
        });
    }).catch(error => {
        res.status(404).json({
            success: 0,
            data: error
        });
    });
}

async function qTree(req, res) {
    const response = await queationTree(req).then(data => {
        res.status(200).json({
            success: 1,
            data: data
        });
    }).catch(error => {
        res.status(404).json({
            success: 0
        });
    });
}

async function qFour(req, res) {
    const response = await queationFour(req).then(data => {
        res.status(200).json({
            success: 1,
            data: data
        });
    }).catch(error => {
        res.status(404).json({
            success: 0
        });
    });
}
module.exports = { qOne, qtwo, qTree, qFour };