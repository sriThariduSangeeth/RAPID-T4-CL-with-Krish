const BinarySearchTree = require("./binary-tree");


const binarytree = new BinarySearchTree();
// binarytree.push(52);
// binarytree.push(15);
// binarytree.push(56);
// binarytree.push(9);
// binarytree.push(11);
// binarytree.push(54);
// binarytree.push(3);
// binarytree.push(5);
// binarytree.push(61);

const numberArray = [218, 99, 57, 80, 37, 243, 162, 141, 188, 54, 143, 243, 137, 50, 42, 52, 15, 56, 9, 11, 54, 3, 5, 61];

numberArray.forEach(number => {
    binarytree.push(number);
});
console.log("Leaf Nodes in tree : ", binarytree.displayLeafNodes());

console.log("Print Minmum vlaue in tree : ", binarytree.findMinValue());

console.log("Print Maximum vlaue in tree : ", binarytree.findMaxValue());

console.log("Print Maximum Height in tree : ", binarytree.findMaxHeight());

console.log("Print Minmum Height in tree : ", binarytree.findMinHeight());