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

function sumMultiplesON(N) {
    sum = 0
    for (let i = 1; i < N; i++) {
        if (i%3 === 0 || i%5 === 0) { 
            sum+=i
        }           
    }
    return sum
}

function numberOfMultiples(N, divisor) {
    return (N.minus(1).dividedBy(divisor)).integerValue(BigNumber.ROUND_FLOOR)
}

function sumMultiples(numDivisors, divisor) {
    return numDivisors.plus(1).times(numDivisors).times(divisor).dividedBy(2)
}

function sumMultiplesTwoDivisorsO1(N) {
    //Say N is 100, so maximum multiple of 3 here below N is 99 i.e. 3*33
    //So sum of all numbers below 100 that are multiple of 3 has the pattern 3(1+2+3+...33)

    const bigN = new BigNumber(N)

    const three = numberOfMultiples(bigN, 3) //Number of integers divisible by from 1 to N-1 
    const five = numberOfMultiples(bigN, 5)
    const fifteen = numberOfMultiples(bigN, 15) //We need this because of double counting...

    const sumThree = sumMultiples(three, 3)
    const sumFive = sumMultiples(five, 5)
    const sumFifteen = sumMultiples(fifteen, 15)
    
    return sumThree.plus(sumFive).minus(sumFifteen).toFixed(0)
}

// The below doesnt work for very large numbers 

// function sumMultiplesO1(N) {
//     let three = (N-1)/3 //Number of integers divisible by from 1 to N-1 
//     let five = (N-1)/5
//     let fifteen = (N-1)/15 

//     let sumThree = 3*(three*(three+1))/2
//     let sumFive = 5*(five*(five+1))/2
//     let sumFifteen = 15*(fifteen*(fifteen+1))/2

//     return sumThree + sumFive - sumFifteen
// }

function main(input) {

    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => parseInt(curr) )
    const numInputs = inputArray[0];

    for(var i = 1; i < numInputs+1; i++) {
        console.log(sumMultiplesTwoDivisorsO1(inputArray[i]))
    }



}
