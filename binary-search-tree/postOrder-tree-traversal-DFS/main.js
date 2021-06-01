const BinarySearchTree = require("./binary-tree");
const { traversePostOrder } = require("./post-order-travers");


const binarytree = new BinarySearchTree();
const numberArray = [218, 99, 57, 80, 37, 243, 162, 141, 188, 54, 143, 243, 137, 50, 42, 52, 15, 56, 9, 11, 54, 3, 5, 61];

numberArray.forEach(number => {
    binarytree.push(number);
});


console.log("PreOrder Traversal : ", traversePostOrder(binarytree.getRootNode()));
console.log("Left  -> Right -> Root ");