'use strict';

//Recursive approach
const lca = (root: _Node, v1: number, v2: number): number => {
  if (root.data < v1 && root.data < v2) {
    return lca(root.right, v1, v2)
  } 
  if (root.data > v1 && root.data > v2) {
    return lca(root.left, v1, v2)
  }
  return root.data
}

//Iterative approach
const _lca = (root: _Node, v1: number, v2: number): number => {
  while (root) {
    if (root.data > v1 && root.data > v2) {
      root = root.left
    } else if (root.data < v1 && root.data < v2) {
      root = root.right
    } else {
      break
    }
  }
  return root.data
}

const __lca = (root: _Node, v1: number, v2: number): number => {
  let search1 = search(root, v1)
  let search2 = search(root, v2)
  
  for (let i = search1.length - 1; i >= 0; i--) {
    for (let j = search2.length - 1; j >= 0; j--) {
      if (search1[i] === search2[j]) {
        return search1[i]
      }
    }
  }
  
  return null
}

const search = (root: _Node, item: number): number[] => {
  if (!root) return [];
  let currNode = root;
  let result: number[] = []
  result.push(currNode.data)
  while (currNode.data !== item) {
    if (item < currNode.data) {
      currNode = currNode.left
    } else {
      currNode = currNode.right
    }
    result.push(currNode.data)
  }
  return result
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
  let [v1, v2]: number[] = inputLines[2].split(' ').map(val => parseInt(val))
  let root = null
  for (let i = 0; i < nodes.length; i++) {
    root = binaryTree.insert(root, nodes[i])
  }
  console.log(lca(root, v1, v2))  
}

class _Node {
  constructor(public data: number, 
    public left: _Node = null, 
    public right: _Node = null) {}
}

class BinaryTree { //this object is not actually binary tree, it simply inserts nodes
  
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

