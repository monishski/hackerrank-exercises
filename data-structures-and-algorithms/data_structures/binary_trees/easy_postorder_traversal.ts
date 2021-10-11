'use strict';

//Recursive solution
const _postorderTraversal = (node: _Node): void => {
  if (!node) return;
  _postorderTraversal(node.left)
  _postorderTraversal(node.right)
  process.stdout.write(node.data+' ')
}

//Iterative solution
const postorderTraversal = (node: _Node): void => {
  let stack = []
  let prevNode = null;
  while (stack.length || node) { //very similar to inorder...
    if (node) {
      stack.push(node)
      node = node.left
    } else {
      let peek = stack[stack.length-1]
      if (peek.right && prevNode !== peek.right) {
        node = peek.right
      } else {
        process.stdout.write(peek.data+' ')
        prevNode = stack.pop()
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
  postorderTraversal(root)  
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

