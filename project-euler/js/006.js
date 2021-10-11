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

function sumOfSquares(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i*i
    }
    return sum
    //instead of a loop, you can apply the following formula
    // n*(n+1)*(2n+1)/6
}

function squareOfSum(n) {
    return Math.pow((n*(n+1)/2), 2)
}

function sumSquareDiff(n) {
    return Math.abs(squareOfSum(n)-sumOfSquares(n))
}

function main(input) {

    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => parseInt(curr) )
    const numInputs = inputArray[0];

    for(var i = 1; i < numInputs+1; i++) {
        console.log(sumSquareDiff(inputArray[i]))
    }

}
