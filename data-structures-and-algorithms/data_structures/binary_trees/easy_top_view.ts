'use strict';

//Following: https://www.youtube.com/watch?v=c3SAvcjWb1E
//Algorithm from: https://www.youtube.com/watch?v=4w2Ri4VhgZo&ab_channel=CodeCampaign
const topView = (root: _Node): string => {
  // const levelOrder: number[] = levelOrderTraversal(root)
  const hDistHash: { [key: number]: _Node[] } = verticalOrderTraversal(root)
  
  // console.log(hDistHash)
  
  let result = ''
  Object.keys(hDistHash)
    .sort((a: string, b: string) => +a - +b)
    .map(key => {
      let nodes: _Node[] = hDistHash[+key] //some cases will nodes.length = 1
      // nodes.sort((a: _Node, b: _Node): number => { 
      //   return levelOrder.indexOf(a.data) - levelOrder.indexOf(b.data)
      // })
      result += nodes[0].data+' '
    })
  return result
}

const levelOrderTraversal = (root: _Node): number[] => {
  let result = []
  let queue = [] //front in the left, back in the right (using FIFO)
  queue.unshift(root)
  while (queue.length) {
    let node = queue.pop()
    result.push(node.data)
    if (node.left) queue.unshift(node.left)
    if (node.right) queue.unshift(node.right)
  }
  return result
}

class __Node {
  constructor(public node: _Node, 
    public hDist: number) {}
}

//You could just store the data points, instead of the whole nodes?
const verticalOrderTraversal = (root: _Node): { [key: number]: _Node[] } => { 
  let hash: { [key: number]: _Node[] } = {}
  
  let queue: __Node[] = []
  queue.unshift(new __Node(root, 0))
  while (queue.length) {
    let elem: __Node = queue.pop()
    if (hash[elem.hDist]) { 
      hash[elem.hDist].push(elem.node) 
    } else { 
      hash[elem.hDist] = [elem.node] 
    }
    if (elem.node.left) {
      queue.unshift(new __Node(elem.node.left, elem.hDist - 1)) //subtract 1 from parent
    }
    if (elem.node.right) {
      queue.unshift(new __Node(elem.node.right, elem.hDist + 1)) //add 1 from parent
    }
  }
  return hash
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
  console.log(topView(root))  
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

