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
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
  const r = arr.length, c = arr[0].length
  let maxSum = Number.NEGATIVE_INFINITY
  for(let row = 1; row < r - 1; row++) {
    for(let col = 1; col < c - 1; col++) {
      maxSum = Math.max(maxSum, hourglass(arr, row, col))
    }
  }
  return maxSum
}

const hourglass = (arr, row, col) => {
  return arr[row-1][col-1] + arr[row-1][col] + arr[row-1][col+1] + arr[row][col] + arr[row+1][col-1] + arr[row+1][col] + arr[row+1][col+1]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
