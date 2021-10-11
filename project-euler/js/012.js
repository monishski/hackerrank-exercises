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

function triangularN(n) {
    return n*(n+1)/2
}

// Note you are doing this by brute force...
function numDivisors(n) {
    let arr = [1, n] //this handles the special case of n=1
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)) + 1; i++) {
        if (n%i == 0) {
            arr.push(i, n/i) //there are a lot of duplicates?
        }
    }
    console.log([...new Set(arr)])
    return [...new Set(arr)].length
}

function getObjectValue(object, value) {
    return !!object[value] ? object[value] : 0
}

// Note: If the prime factors of a number are a^n * b^m * c^q, then the number of divisors is (n+1)(m+1)(q+1)
// https://www2.math.upenn.edu/~deturck/m170/wk2/numdivisors.html
function primeFactorisation(N) {
    let primeFactors = {} 
    while (N%2 === 0) {
        primeFactors[2] = getObjectValue(primeFactors, 2) + 1
        N = N / 2
    }
    for (let i = 3; i <= Math.ceil(Math.sqrt(N)) + 1; i+=2) { //note that keeping Math.sqrt(temp) actually makes a difference
        while (N%i === 0 && N !== i) {
            primeFactors[i] = getObjectValue(primeFactors, i) + 1
            N = N / i
        }        
    }
    if (N > 1) {
        primeFactors[N] = getObjectValue(primeFactors, N) + 1
    }
    return primeFactors;
}

function highlyDivTriangularN(N) {
    let numDivs = 0
    let index = 0
    while (numDivs < (N + 1)) {
        index++
        // numDivs = numDivisors(triangularN(index))
        primeFactors = primeFactorisation(triangularN(index))
        numDivs = Object.values(primeFactors).reduce((prod, elem) => prod*(elem+1), 1)
    }
    return triangularN(index)
}

function main(input) {
    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => parseInt(curr) )
    const numInputs = inputArray[0];

    for(var i = 1; i < numInputs+1; i++) {
        console.log(highlyDivTriangularN(inputArray[i]))
    }
}
