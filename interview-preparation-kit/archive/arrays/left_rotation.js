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

function rotLeft(a, d) {
    return [...a.slice(d), ...a.slice(0, d)]
}

function main(inputString) {
    const nd = inputString[0].split(' ');

    const n = parseInt(nd[0], 10);
    const d = parseInt(nd[1], 10);
    const a = inputString[1].split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    return result.join(' ')+'\n'
}
