const inordertravers = (node) => {
    if (node != null) {
        node.left && inordertravers(node.left);
        console.log(node.value);
        node.right && inordertravers(node.right);
    };
}

module.exports = { inordertravers }