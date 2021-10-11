'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function _rotateLeft(d, arr) {
  for(let i = 0; i < d; i++) {
    let temp = arr.shift() //dequeue
    arr.push(temp) //enqueue
  }
  return arr
}

const rotateLeft = (d, arr) => {
  //explanation: https://www.youtube.com/watch?v=TurKRD6Ne6w&list=PLSIpQf0NbcCltzNFrOJkQ4J4AAjW3TSmA&ab_channel=JAVAAID-CodingInterviewPreparation
  const n = arr.length
  let reverseArr = new Array(n)
  for(let index = 0; index < n; index++) {
    let newIndex = (index + n - d) % n
    reverseArr[newIndex] = arr[index]
  }
  return reverseArr
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);

  const d = parseInt(firstMultipleInput[1], 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const result = rotateLeft(d, arr);

  ws.write(result.join(' ') + '\n');

  ws.end();
}
