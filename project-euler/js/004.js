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

function isPalidrome(numString) {
    // see: https://itnext.io/11-way-to-check-for-palindromes-in-javascript-85dbfe7dfb5d
    for (let i = 0; i < numString.length/2 ; i++) {
        if (numString[i] !== numString[numString.length - 1 - i]) {
            return false
        }
    }
    return true
}

function largestPalindrome(N) {
    let largest = 0;
    for (let i = 999; i > 99; i--) {
        for (let j = 999; j > i; j--) {
            const prod = i * j
            // const stringProd = prod.toString()
            // const reverseStringProd = stringProd.split('').reverse().join('')
            // if (stringProd === reverseStringProd) {
            // I was getting timeout errors before, it looks like isPalidrome() function is the quickest way to check if a number is a palindrom
            if (isPalidrome(prod.toString()) && prod > largest && prod < N) {
                largest = prod
                break
            }  
        }
    }
    return largest
}

function main(input) {

    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => parseInt(curr) )
    const numInputs = inputArray[0];

    for(var i = 1; i < numInputs+1; i++) {
        console.log(largestPalindrome(inputArray[i]))
    }

}
