const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

let inputString = [];

rl.prompt();

rl.on('line', (inputLine) => {
    inputString.push(inputLine);
})

rl.on('close', () => {
    console.log(main(inputString));
    process.exit(0);
})

function dfsInorderSwapNodes(tree, swapDepthMultiples) {
    let arr = Array();
    for (let i=0; i<swapDepthMultiples.length; i++) {
        const swapDepthMultiple = swapDepthMultiples[i]
        let inorder = Array();
        let stack = Array();
        let currentIndex = 1;
        let depth = 0
        while (true) {
            if (currentIndex!=-1) {
                depth+=1
                if (depth%swapDepthMultiple==0) {
                    const leftNode = tree[currentIndex-1][0]
                    tree[currentIndex-1][0] = tree[currentIndex-1][1]
                    tree[currentIndex-1][1] = leftNode
                }
                stack.push([currentIndex, depth])
                currentIndex = tree[currentIndex-1][0]
            } else if (stack.length>0) {
                const currentIndexAndDepth = stack.pop()
                depth = currentIndexAndDepth[1]
                inorder.push([currentIndexAndDepth[0], depth])
                currentIndex = tree[currentIndexAndDepth[0]-1][1]
            } else {
                break
            }
        }
        arr.push(inorder.map(elem => elem[0]))
    }
    return arr
}

function main(inputString) {
    // return inputString
    const numNodes = inputString[0];

    let tree = Array(numNodes);
    for (let row=1; row<=numNodes; row++) {
        tree[row-1] = inputString[row].split(' ').map(node => parseInt(node, 10));
    }

    const numSwapsIndex = 1+tree.length
    const numSwaps = parseInt(inputString[numSwapsIndex], 10)

    let swapDepthMultiples = [];
    for (let i=numSwapsIndex+1; i<inputString.length; i++) {
        swapDepthMultiples.push(parseInt(inputString[i], 10));
    }
    console.log(swapDepthMultiples)

    let result = dfsInorderSwapNodes(tree, swapDepthMultiples);
    return result
}

function swapNodes(indexes, queries) {
  const swap = (k, node, depth) => {
    if (!node) {
      return;
    }
    swap(k, node.left, depth + 1);
    swap(k, node.right, depth + 1);
    if (depth % k === 0) {
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
    }
  }

  const inOrderTraversal = (order, node) => {
    if (!node) {
      return;
    }
    inOrderTraversal(order, node.left)
    order.push(node.value);
    inOrderTraversal(order, node.right);
  }

  const result = [];
  const indexesLength = indexes.length;
  const treeNodes = Array(indexesLength + 1);
  for (let i = 1; i <= indexesLength; i += 1) {
    if (!treeNodes[i]) {
      treeNodes[i] = { value: i, left: null, right: null };
    }
    const leftValue = indexes[i - 1][0];
    if (leftValue !== -1) {
      if (!treeNodes[leftValue]) {
        treeNodes[leftValue] = { value: leftValue, left: null, right: null };
      }
      treeNodes[i].left = treeNodes[leftValue];
    }
    const rightValue = indexes[i - 1][1];
    if (rightValue !== -1) {
      if (!treeNodes[rightValue]) {
        treeNodes[rightValue] = { value: rightValue, left: null, right: null };
      }
      treeNodes[i].right = treeNodes[rightValue];
    }
  }

  for (let j = 0; j < queries.length; j += 1) {
    const k = queries[j];
    swap(k, treeNodes[1], 1);
    const order = [];
    inOrderTraversal(order, treeNodes[1]);
    result.push(order);
  }
  return result;
}
