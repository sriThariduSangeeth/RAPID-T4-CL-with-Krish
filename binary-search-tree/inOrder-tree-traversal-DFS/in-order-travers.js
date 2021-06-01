const inordertravers = (node) => {
    let arr = new Array();
    if (node != null) {
        traverse(node, arr);
        return arr;
    };
}

const traverse = (node, arr) => {
    if (node != null) {
        node.left && traverse(node.left, arr);
        arr.push(node.value);
        node.right && traverse(node.right, arr);
    };
}

module.exports = { inordertravers }