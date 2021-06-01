const traversePreOrder = (node) => {
    if (node != null) {
        console.log(node.value);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
    }
}

module.exports = { traversePreOrder }