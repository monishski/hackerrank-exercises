'use strict';

//Recursive solution
const __preorderTraversal = (node: _Node): void => {
  if (!node) return;
  process.stdout.write(node.data+' ') //use process.stdout.write() for inline printing
  __preorderTraversal(node.left);
  __preorderTraversal(node.right);
}

//Iterative solution
const _preorderTraversal = (node: _Node): void => {
  let stack: _Node[] = []
  stack.push(node)
  while (stack.length) {
    node = stack.pop()
    process.stdout.write(node.data+' ')
    if (node.right) { //right child is pushed first so that left node is processed first
      stack.push(node.right)
    } 
    if (node.left) {
      stack.push(node.left)
    }
  }
}

//O(1) space solution
const preorderTraversal = (node: _Node): void => {
  if (!node) return;
  let currNode = node
  while (currNode) {
    if (!currNode.left) {
      process.stdout.write(currNode.data+' ')
      currNode = currNode.right
    } else {
      let pre = currNode.left
      while (pre.right && pre.right !== currNode) {
        pre = pre.right
      }
      if (!pre.right) {
        pre.right = currNode //introduces circular loop at one of the leafs
        process.stdout.write(currNode.data+' ')
        currNode = currNode.left
      } else {
        pre.right = null;
        currNode = currNode.right
      }
    }  
  }

}

////////////////////////////////////////////////////////////////////////////////////
//Note that you cant do this problem in JS in Hackerrank
//There is a lot of set up to do as well which I went through (i.e. you had to create BT from the string of values)
////////////////////////////////////////////////////////////////////////////////////

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on('end', function(): void {
  inputLines = inputString.split('\n');
  main(inputLines)
});

function readLine(): string {
  return inputLines[currentLine++];
}

function main(inputLines: string[]) {
  let binaryTree: BinaryTree = new BinaryTree()
  let nodes: number[] = inputLines[1].split(' ').map(val => parseInt(val))
  let root = null
  for (let i = 0; i < nodes.length; i++) {
    root = binaryTree.insert(root, nodes[i])
  }
  preorderTraversal(root)  
}

class _Node {
  constructor(public data: number, 
    public left: _Node = null, 
    public right: _Node = null) {}
}

class BinaryTree {
  
  // constructor(public root?: _Node) {}
  
  public insert(root: _Node, item: number) {
    if(!root) {
      let newNode = new _Node(item)
      return newNode;
    } else {
      if (item <= root.data) {
        let currNode = this.insert(root.left, item)
        root.left = currNode
      } else {
        let currNode = this.insert(root.right, item)
        root.right = currNode
      }
      return root
    }
  }
}

