'use strict';

class BinaryTree {
  
  // constructor(public root?: _Node) {}
  
  //Iterative approach
  public _insert(root: _Node, item: number): _Node {
    let newNode = new _Node(item)
    let currNode = root
    if (!currNode) {
      root = newNode
    } else {
      let prevNode
      while (currNode) {
        prevNode = currNode
        if (item < currNode.data) {
          currNode = currNode.left
        } else {
          currNode = currNode.right
        }
      }
      if (item < prevNode.data) {
        prevNode.left = newNode
      } else {
        prevNode.right = newNode
      }
    }
    return root
  }
  
  //Recursive appraoch
  public insert(root: _Node, item: number): _Node {
    if (!root) {
      let newNode = new _Node(item)
      root = newNode
      // return newNode
    } else {
      if (item < root.data) {
        // let currNode = this.insert(root.left, item)
        // root.left = currNode
        root.left = this.insert(root.left, item)
      } else {
        // let currNode = this.insert(root.right, item)
        // root.right = currNode
        root.right = this.insert(root.right, item)
      }
    }
    return root
  }
  
  public preOrderTraversal = (node: _Node): void => { //Recursive solution
    if (!node) return;
    process.stdout.write(node.data+' ') //use process.stdout.write() for inline printing
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
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
  let nodes: number[] = inputLines[1].split(' ').map(val => parseInt(val))

  let binaryTree: BinaryTree = new BinaryTree()
  let root = null
  for (let i = 0; i < nodes.length; i++) {
    root = binaryTree.insert(root, nodes[i])
  }
  binaryTree.preOrderTraversal(root)
}

class _Node {
  constructor(public data: number, 
    public left: _Node = null, 
    public right: _Node = null) {}
}

