const e = require("cors");
const { singleNumberReverse, arrayNumberReverse } = require("./reverse-number.service");

const numberReverse = async(req, res) => {

    let reqest = req.body.number;
    if (reqest instanceof Array) {
        await arrayNumberReverse(reqest)
            .then(data => {
                return res.status(200).json({
                    success: 1,
                    data: data
                });
            }).catch(error => {
                return res.status(401).send(error);
            });

    } else if (typeof reqest == 'number') {
        await singleNumberReverse(reqest).then(data => {
            return res.status(200).json({
                success: 1,
                data: data
            });
        }).catch(error => {
            return res.status(401).send(error);
        });
    } else {
        return res.status(400).send('400: failed t ::  \n');
    }
}


module.exports = { numberReverse };