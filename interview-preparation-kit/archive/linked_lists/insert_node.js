const readline = require('readline')

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = new Node(head);
    } //you can initialise the LL with an input value if you wish

    insertNode(data) {
        let currNode = this.head;
        if (!currNode.data) {
            this.head = new Node(data);
        } else {
            while (currNode.next!==null) {
                currNode = currNode.next;
            }
            currNode.next = new Node(data);
        }
    }
}

function insertNodeAtPosition(head, data, position) {
    const newNode = new Node(data)
    if (position===0) {
        newNode.next = head
        head = newNode
    } else {
        let currNode = head
        let counter = 0
        while (currNode.next!==null) {
            if ((counter+1)===position) {
                newNode.next = currNode.next
                currNode.next = newNode
                break;
            }
            counter+=1;
            currNode = currNode.next
        }
    }
    return head
}


const rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.prompt();

let input = '' //this can't be a constant...

rl.on('line', (inputLine) => {
    input+=(inputLine+'\n');
})

rl.on('close', () => {
    main(input);
    process.exit(0);
})

function main(input) {

    const inputArray = input.split('\n').map((curr) => { return parseInt(curr, 10) })
    const numNodes = inputArray[0];

    const ll = new LinkedList();

    for (var i=1; i<numNodes+1; i++) {
        ll.insertNode(inputArray[i])
    }

    head = ll.head
    data = inputArray[numNodes+1]
    position = inputArray[numNodes+2]

    const newHead = insertNodeAtPosition(head, data, position)

    console.log(newHead.data)
    console.log(newHead.next.data)
    console.log(newHead.next.next.data)
    console.log(newHead.next.next.next.data)

    return newHead
}
