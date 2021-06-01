const BinarySearchTree = require("./binary-tree");


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

console.log("Leaf Nodes in tree : ", binarytree.displayLeafNodes());

console.log("Print Minmum vlaue in tree : ", binarytree.findMinValue());

console.log("Print Maximum vlaue in tree : ", binarytree.findMaxValue());