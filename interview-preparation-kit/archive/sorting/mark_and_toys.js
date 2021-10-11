'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

let inputString = [];
let currentLine = 0;

rl.prompt();

rl.on('line', (inputLine) => {
    inputString.push(inputLine);
})

rl.on('close', () => {
    console.log(main(inputString));
    process.exit(0);
})

function maximumToys(prices, k) {

    const affordablePrices = prices.filter(price => price<=k)
    affordablePrices.sort((a, b) => a-b) //Weidly JS convert all array elements to strings before sort... so it doesnt quite work..

    let spend = 0;
    let numToys = 0;

    for (var i=0; i<affordablePrices.length; i++) {
        spend+=affordablePrices[i]
        if (spend<=k) {
            numToys++;
        } else {
            break
        }
    }

    return numToys;
}

function main(inputString) {
    const nk = inputString[0].split(' ');

    const n = parseInt(nk[0], 10);
    const k = parseInt(nk[1], 10);
    const prices = inputString[1].split(' ').map(i => parseInt(i, 10));

    const result = maximumToys(prices, k);

    return result+'\n'
}
