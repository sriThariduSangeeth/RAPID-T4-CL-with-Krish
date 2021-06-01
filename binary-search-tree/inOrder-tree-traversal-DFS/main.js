const BinarySearchTree = require("./binarySearch-tree");
const { inordertravers } = require("./in-order-travers");


const binarytree = new BinarySearchTree();
const numberArray = [218, 99, 57, 80, 37, 243, 162, 141, 188, 54, 143, 243, 137, 50, 42, 52, 15, 56, 9, 11, 54, 3, 5, 61];

numberArray.forEach(number => {
    binarytree.push(number);
});

const rootNode = binarytree.getRootNode();
console.log("InOrder Traversal : ", inordertravers(rootNode));
console.log("Left ->  Root  -> Right");