const { parse } = require('path');
const readline = require('readline')
const BigNumber = require('bignumber.js');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.prompt();

let input = '' 

rl.on('line', (inputLine) => {
    input+=(inputLine+'\n');
})

rl.on('close', () => {
    main(input);
    process.exit(0);
})

function largeSum(arr) {
    // const sum = arr.reduce((acc, val) => acc + val, 0) //do large numbers in Node get converted to floats? 2.8342432e50? 
    // console.log(sum.toString().split(''))
    const sum = arr.reduce((acc, val) => acc.plus(val), new BigNumber(0))
    return sum.toFixed().slice(0, 10)
}

function main(input) {

    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => new BigNumber(curr) )
    const numInputs = inputArray[0];
    inputArray.shift()
    console.log(largeSum(inputArray))
}
