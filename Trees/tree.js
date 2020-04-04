class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function insertNode(node, newNode) {
    if(newNode.key < node.key) {
        if(node.left = null) {
            node.left = newNode
            return
        }   
        return insertNode(node.left, newNode);
    } 
    
    if(node.right === null) {
        node.right = newNode
        return;
    } 
    return insertNode(node.right, newNode);
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        const newNode = new Node(key);
        if(this.root === null) {
            this.root = newNode;
            return;
        }
        insertNode(root, newNode);
    }

    search(key) {}

    remove(key) {}

    min() {}

    max() {}

    inOrderTraverse() {}

    preOrderTraverse() {}

    postOrderTraverse() {}
}
