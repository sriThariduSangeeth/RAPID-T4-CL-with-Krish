const traversePostOrder = (node) => {
    if (node != null) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        console.log(node.value);
    }
}

module.exports = { traversePostOrder }