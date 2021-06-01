const BinarySearchTree = require("./binarySearch-tree");
const { inordertravers } = require("./in-order-travers");


const binarytree = new BinarySearchTree();
binarytree.push(52);
binarytree.push(15);
binarytree.push(56);
binarytree.push(9);
binarytree.push(11);
binarytree.push(54);
binarytree.push(3);
binarytree.push(5);
binarytree.push(61);

const rootNode = binarytree.getRootNode();
console.log("InOrder Traversal : ", inordertravers(rootNode));
console.log("Left ->  Root  -> Right");