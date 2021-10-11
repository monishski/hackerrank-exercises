const { create } = require('domain');
const { parse } = require('path');
const readline = require('readline')

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

// So my original attempt with DP was not efficient. It was because I was looping twice to fill the 1 at the edges...
function numLatticePaths(gridSize) {
    const [numRows, numCols] = gridSize
    
    var grid = [...Array(numRows+1)].map(_ => Array(numCols + 1));

    for (let row = 0; row < numRows + 1; row++) {
        grid[row][0] = 1        
    }
    for (let col = 0; col < numCols + 1; col++) {
        grid[0][col] = 1        
    }
    for (let row = 1; row < numRows + 1; row++) {
        for (let col = 1; col < numCols + 1; col++) {
            grid[row][col] = (grid[row][col-1] + grid[row-1][col]) % 1000000007          
        }        
    } 
    return grid[numRows][numCols] 
}

//You can also solve this using combinatorics...
//Node is notoriously bad with big numbers
function factorial(n) {
    while (n > 1) {
        return n * factorial(n-BigInt(1))
    }
    return BigInt(1)
}

function numLatticePathsCombinatorics(gridSize) {
    const [numRows, numCols] = gridSize 
    const numRowsBigInt = BigInt(numRows) 
    const numColsBigInt = BigInt(numCols) 
    const numPaths =  factorial(numRowsBigInt + numColsBigInt)/(factorial(numColsBigInt) * factorial(numRowsBigInt)) 
    return Number(numPaths % BigInt(1000000007))
}

function main(input) {
    
    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => curr
            .split(' ')
            .map(val => parseInt(val)))
    const numInputs = inputArray[0][0];
    
    for (let index = 1; index < numInputs + 1; index++) {
        console.log(numLatticePaths(inputArray[index]))
    }
} 


