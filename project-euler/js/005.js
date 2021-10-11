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

function fnPrimeFactors(N) { //this should return a list of prime factors
    let temp = N
    let primeFactors = {}
    while (temp%2 === 0) {
        primeFactors[2] = (!!primeFactors[2] ? primeFactors[2] : 0) + 1
        temp = temp / 2
    }
    for (let i = 3; i <= Math.ceil(Math.sqrt(N))+1; i=i+2) {
        while (temp%i === 0) {
            primeFactors[i] = (!!primeFactors[i] ? primeFactors[i] : 0) + 1
            temp = temp / i
        }
    }
    if (temp === N) { //if we dont find any divisors, then it must be a prime itself
        primeFactors[N] = 1
    }
    return primeFactors
}

function smallestMultiple(N) {

    let smallestMultipleFactors = {}
    for (let i = 2; i <= N; i++) {
        const primeFactors = fnPrimeFactors(i)
        for (const primeFactor in primeFactors) {
            const numMultiples = (!!smallestMultipleFactors[primeFactor] ? smallestMultipleFactors[primeFactor] : 0)
            if (primeFactors[primeFactor] > numMultiples) {
                smallestMultipleFactors[primeFactor] = numMultiples + (primeFactors[primeFactor] - numMultiples)
            }
        }
    }
    // console.log(smallestMultipleFactors)

    let product = 1;
    for (const primeFactor in smallestMultipleFactors) {
        product = product * Math.pow(parseInt(primeFactor), smallestMultipleFactors[primeFactor])
    }

    return product
}

function main(input) {

    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => parseInt(curr) )
    const numInputs = inputArray[0];

    for(var i = 1; i < numInputs+1; i++) {
        console.log(smallestMultiple(inputArray[i]))
    }

}
