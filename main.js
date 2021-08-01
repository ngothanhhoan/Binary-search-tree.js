class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) { // data == node mới
        var newNode = new Node(data)

        if(this.root == null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) { //thêm newNode vào node
        if(newNode.data < node.data) {
            if(node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }

        if(newNode.data > node.data) {
            if(node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data)
    }

    
// helper method that calls the
// removeNode with a given data
remove(data)
{
    // root is re-initialized with
    // root of a modified tree.
    this.root = this.removeNode(this.root, data);
}
 
// Method to remove node with a
// given data
// it recur over the tree to find the
// data and removes it
removeNode(node, key)
{
    if(node === null)
        return null;
 
    else if(key < node.data)
    {
        node.left = this.removeNode(node.left, key);
        return node;
    }
 
    else if(key > node.data)
    {
        node.right = this.removeNode(node.right, key);
        return node;
    }
 
    else
    {
        if(node.left === null && node.right === null)
        {
            node = null;
            return node;
        }
 
        if(node.left === null)
        {
            node = node.right;
            return node;
        }
         
        else if(node.right === null)
        {
            node = node.left;
            return node;
        }
 
        var aux = this.findMinNode(node.right); //tìm node nhỏ nhất
        node.data = aux.data;
 
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
}

    findMinNode(node)
    {
        if(node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    search(node, data)
{
   // if trees is empty return null
    if(node === null)
        return null;
 
    // if data is less than node's data
    // move left
    else if(data < node.data)
        return this.search(node.left, data);
 
    // if data is less than node's data
    // move left
    else if(data > node.data)
        return this.search(node.right, data);
 
    // if data is equal to the node data
    // return node
    else
        return node;
}

    inorder(node)
    {
        if(node !== null)
        {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }


}

 
let BST = new BinarySearchTree()

BST.insert(9)
BST.insert(7)
BST.insert(10)
BST.insert(2)
BST.insert(8)
BST.insert(1)
BST.insert(13)
BST.remove(13)

// BST.remove(1)  
BST.insert(20)  

console.log(BST.search(BST.root, 9))




console.log(BST)



