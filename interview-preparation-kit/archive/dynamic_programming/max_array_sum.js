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

function maxSubsetSum(arr) {
    const sums = Array(arr.length);
    sums[0] = arr[0];
    sums[1] = Math.max(arr[0], arr[1])
    // arr = 3 7 4 6 5
    // sums = 0,  7,  max(7, 4+0, 4)=7, max(7, 7+6, 6) = 13

    for (var i=2; i<arr.length; i++) {
        sums[i] = Math.max(sums[i-1], sums[i-2]+arr[i], arr[i])
    }
    return sums[sums.length-1]
}


function main() {
    const n = parseInt(inputString[0], 10);
    const arr = inputString[1].split(' ').map(elem => parseInt(elem, 10));
    const res = maxSubsetSum(arr);
    return res
}
