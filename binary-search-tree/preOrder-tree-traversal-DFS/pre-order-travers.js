const traversePreOrder = (node) => {
    let arr = new Array();
    if (node != null) {
        travers(node, arr);
        return arr;
    }
};

const travers = (node, arr) => {
    if (node != null) {
        arr.push(node.value);
        node.left && travers(node.left, arr);
        node.right && travers(node.right, arr);
    }
};

module.exports = { traversePreOrder }