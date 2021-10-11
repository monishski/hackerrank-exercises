'use strict';

//Recursive solution
const __treeHeight = (root: _Node): number => {
  return _treeHeight(root) - 1
}

const _treeHeight = (root: _Node): number => {
  if (!root) return 0;
  let leftHeight = _treeHeight(root.left)
  let rightHeight = _treeHeight(root.right)
  return 1 + Math.max(leftHeight, rightHeight)
}

//An alternative to this is:
const treeHeight = (node: _Node): number => {
  let leftHeight = 0;
  let rightHeight = 0;
  if (node.left) {
    leftHeight = 1 + treeHeight(node.left)
  }
  if (node.right) {
    rightHeight = 1 + treeHeight(node.right)
  }
  return Math.max(leftHeight, rightHeight)
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
  console.log(treeHeight(root))  
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

