const readline = require('readline')

class Queue {

    constructor() {
        this.stackOrdered = []
        this.stackReversed = []
    }

    peek() {

        if (this.stackReversed.length==0) {
            while (this.stackOrdered.length!=0) {
                this.stackReversed.push(this.stackOrdered.pop())
            }
        }
        return this.stackReversed[this.stackReversed.length-1];
    }

    pop() {
        if (this.stackReversed.length==0) {
            while (this.stackOrdered.length!=0) {
                this.stackReversed.push(this.stackOrdered.pop())
            }
        }
        this.stackReversed.pop()
    }

    push(value) {
        this.stackOrdered.push(value);
    }
}

function processData(input) {

    const myQueue = new Queue()

    const inputSplit = input.split('\n')

    for (var i=1; i<=parseInt(inputSplit[0]); i++) {
        const line = inputSplit[i].split(' ')
        // console.log(line)
        if (parseInt(line[0])==1) {
            // console.log(parseInt(line[1]))
            myQueue.push(parseInt(line[1]))
        } else if (parseInt(line[0])==2) {
            myQueue.pop()
        } else {
            console.log(myQueue.peek())
        }
    }
}

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.prompt();

let input = '' //this can't be a constant...

rl.on('line', (inputLine) => {
    input+=(inputLine+'\n');
})

rl.on('close', () => {
    // console.log(input)
    processData(input);
    process.exit(0);
})
