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

    displayLeafNodes(node) {
        if (node != null) {
            if (node.left == null && node.right == null) {
                console.log(node.value);
            }
            if (node.left != null) {
                this.displayLeafNodes(node.left);
            }
            if (node.right != null) {
                this.displayLeafNodes(node.right);
            }
        }
    }
}

module.exports = BinarySearchTree;