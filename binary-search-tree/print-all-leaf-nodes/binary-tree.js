const Node = require("./node");

class BinarySearchTree {

    root = {};

    constructor() {
        this.root = null;
    }


    push(value) {
        let newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.pushNode(this.root, newNode);
        }
    }

    pushNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.pushNode(node.left, newNode);
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.pushNode(node.right, newNode);
            }
        }
    }

    getRootNode() {
        return this.root;
    }

    displayLeafNodes() {

        let arr = new Array();
        let current = this.root;
        if (this.root !== null) {
            this.findLeafNode(current, arr);
            return arr;
        } else {
            return arr;
        }
    }

    findLeafNode(node, arr) {
        if (node != null) {
            if (node.left == null && node.right == null) {
                arr.push(node.value);
            }
            if (node.left != null) {
                this.findLeafNode(node.left, arr);
            }
            if (node.right != null) {
                this.findLeafNode(node.right, arr);
            }
        }
    }

    findMinValue() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }

    findMaxValue() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.value;
    }
}

module.exports = BinarySearchTree;