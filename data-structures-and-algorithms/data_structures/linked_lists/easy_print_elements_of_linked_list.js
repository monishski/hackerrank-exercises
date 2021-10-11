function printLinkedList(head) {
  if (head) {
    let currNode = head
    while (currNode) {
      console.log(currNode.data)
      currNode = currNode.next
    }
  }
}