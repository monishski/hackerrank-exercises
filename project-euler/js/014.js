/*

I was not able to make this work in JS for all cases in Hackerrank...
// The problem was solved by Python... cases 9, 10, 11, 12 not working?

*/

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

// This was my initial attempt - it works but fails for most of the caces
function recursionCollatzFunction(n, steps) {
    if (n !== 1) {
        steps+=1 
        if (n % 2 === 0) {
            steps = recursionCollatzFunction(n/2, steps)
        } else {
            steps = recursionCollatzFunction(3*n + 1, steps)
        }
    } 
    return steps
}

function longestCollatzSequence(n) {
    let numSteps = {1: 1}
    for (let index = 2; index <= n; index++) {
        numSteps[index] = recursionCollatzFunction(index, 0)
    }
    return Object
        .keys(numSteps)
        .reduce((a, b) => numSteps[a] > numSteps[b] ? a : b)
}

// The solution below follows one of the solutions in the discussion originally posted in Python
// https://www.hackerrank.com/contests/projecteuler/challenges/euler014/forum
// But I found it difficult to directly implement the equivalent version for JS
// I had to implement Int32Array instead of Array and move to bitwise operations (take from the link below)
// https://forum.freecodecamp.org/t/problem-14-longest-collatz-sequence-efficiency/213900/10

let cacheLimit = 5000001
let cachedCollatzSeq = new Int32Array(cacheLimit)
cachedCollatzSeq[0] = 1 //note we are not using the number of steps, its the num. of numbers in the chain, (the first if statement would not work otherwise...)

const fnOdd = n => (n << 1) + (n << 0) + 1 //equivalent to 3n + 1
const fnEven = n => n >>> 1 //equivalent to n/2

const recursionCollatzFunctionOptimized = n => {
    if (n < cacheLimit && cachedCollatzSeq[n-1] !== 0) {
        return cachedCollatzSeq[n-1]
    } else {
        let steps = 0
        if (n & 1) { //bitwise check for n%2==1 (i.e. odd)
            // steps = 1 + recursionCollatzFunctionOptimized(3*n + 1)
            steps = 1 + recursionCollatzFunctionOptimized(fnOdd(n))
        } else {
            // steps = 1 + recursionCollatzFunctionOptimized(n/2)
            steps = 1 + recursionCollatzFunctionOptimized(fnEven(n))
        }
        if (n < cacheLimit) {
            cachedCollatzSeq[n-1] = steps
        }
        return steps
    }
}

let cachedResults = []
let longestSeqN = 0
let indexOfLongestSeq = 0
for (let index = 1; index < cacheLimit + 1; index++) {
    if (recursionCollatzFunctionOptimized(index) >= longestSeqN) {
        longestSeqN = recursionCollatzFunctionOptimized(index)
        indexOfLongestSeq = index
    }
    cachedResults.push(indexOfLongestSeq)
}

function main(input) {
    
    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => parseInt(curr))
    const numInputs = inputArray[0];

    for(var i = 1; i < numInputs+1; i++) {
        // console.log(longestCollatzSequence(inputArray[i]))
        // const collatzSeq = cachedCollatzSeq.slice(0, inputArray[i])
        // let maxIndexes = []
        // collatzSeq.forEach((item, index) => item === Math.max(...collatzSeq) ? maxIndexes.push(index) : null)
        // console.log(maxIndexes[maxIndexes.length-1] + 1)
        console.log(cachedResults[inputArray[i]-1])
    }
} 


