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

binarytree.displayLeafNodes(binarytree.getRootNode());