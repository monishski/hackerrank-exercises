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

function isInt(n) {
    return n % 1 === 0;
}

function isSumEqual(a, b, c, n) {
    return a + b + c === n
}

// This is basically brute force
function pythagoreanTriplet(n) {
    let product = -1 
    for (let a = 1; a < n; a++) {
        for (let b = a; b < n; b++) {
            let c = Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2))
            if (isInt(c) && isSumEqual(a, b, c, n)) {
                product = a*b*c
            }
        }
    }
    return product
}

// You can speed the whole process using a bit of maths
// a + b + c = n => (a + b + c)^2 = n^2 => a^2 + b^2 + c^2 + 2ab + 2ac + 2bc = n^2 => 2c^2 + 2(ab + ab + bc) = n^2 => n^2 is a multiple of 2 => n is a multiple of 2
// Note because a < b & a < c =>  2a < b + c => 3a < a + b + c => 3a < n => a < n/3
// From all of this you can derive that b = (a^2-(a-n)^2)/2(a-n), see: 
// https://www.dropbox.com/s/kep0cbtbkdd011a/formula.png

function pythagoreanTripletO1(n) {
    let prod = -1
    if (n%2 === 0) {
        for (let a = 1; a <= n/3; a++) {
            let b = (n*n - 2*n*a)/(2*n - 2*a)
            let c = n - a - b
            if (isInt(b) && (a*a + b*b) === c*c) {
                let tempProd = a * b * c
                if (tempProd > prod) {
                    prod = tempProd
                }
            }            
        }
    }
    return prod
}

function main(input) {

    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => parseInt(curr) )
    const numInputs = inputArray[0];

    for(var i = 1; i < numInputs+1; i++) {
        console.log(pythagoreanTripletO1(inputArray[i]))
    }

}
