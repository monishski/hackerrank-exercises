const readline = require('readline')
const BigNumber = require('bignumber.js');

BigNumber.config({ROUNDING_MODE: BigNumber.ROUND_DOWN});

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

function fibEvenSum(n) { //This doesnt work for large numbers...
    let new_prev;
    let total = 0
    let prev = 0; 
    let curr = 1 
    while (curr < n) {
        if (curr%2==0) { 
            total+=curr
        }
        new_prev = curr
        curr = prev + curr
        prev = new_prev
        // You could write this as the following:
        // [prev, curr] = [curr, curr + prev]
    }
    return total;
}

// There is a slightly more succinct algorith you can apply
// So the fibonacci sequence is 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// The even numbers separately are: 2, 8, 34, 144 ...
// Note that this has the pattern of E(n) = 4*E(n-1) + E(n-2)

function fibEvenSumSequenced(n) {
    let adder = 0
    let multiplier = 2
    let curr = 0;
    let total = 0;
    while (curr<n) {
        total += multiplier 
        curr = adder + 4*multiplier
        adder = multiplier
        multiplier = curr
    } 
    return total
}

function fibEvenSumSequencedBigNumber(n) { 
    const N = new BigNumber(n)
    let adder = new BigNumber(0)
    let multiplier = new BigNumber(2)
    let curr = new BigNumber(0);
    let total = new BigNumber(0);
    while (curr.isLessThan(N)) {
        total = total.plus(multiplier) 
        curr = multiplier.times(4).plus(adder)
        adder = multiplier
        multiplier = curr
    } 
    return total.toFixed(0)
}

function main(input) {

    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => parseInt(curr) )
    const numInputs = inputArray[0];

    for(var i = 1; i < numInputs+1; i++) {
        console.log(fibEvenSumSequencedBigNumber(inputArray[i]))
    }

}
