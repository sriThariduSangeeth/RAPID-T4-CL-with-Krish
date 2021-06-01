const traversePostOrder = (node) => {

    let arr = new Array();

    if (node != null) {
        travers(node, arr);
        return arr;
    }
}

const travers = (node, arr) => {
    if (node != null) {
        node.left && travers(node.left, arr);
        node.right && travers(node.right, arr);
        arr.push(node.value);
    }
}

module.exports = { traversePostOrder }