'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

let inputString = [];

rl.prompt();

rl.on('line', (inputLine) => {
    inputString.push(inputLine);
})

rl.on('close', () => {
    main(inputString).forEach((element) => { console.log(element); });
    process.exit(0);
})

function alternatingCharacters(string) {
    // console.log(string.split('').reduce((acc, cur, index, arr) => { console.log(acc, cur, index, arr[index+1], cur == arr[index+1], cur == arr[index+1] ? 1 : 0); return acc + (cur == arr[index+1] ? 1 : 0) }, 0))
    const deletions = string.split('').reduce((acc, cur, index, arr=string) => { return acc + (cur == arr[index+1] ? 1 : 0) }, 0)
    return deletions;
}

function main(inputString) {
    const n_queries = parseInt(inputString[0].split(' '), 10);

    const results = Array(n_queries)
    for (let i=1; i<=n_queries; i++) {
        const result = alternatingCharacters(inputString[i]);
        results.push(result);
    }
    return results
}
