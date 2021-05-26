function queationOne(res) {
    return new Promise((resolve, reject) => {
        console.log(res.body.array);
        resolve("this method call");
    });
};

module.exports = { queationOne };