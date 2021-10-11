function insertNodeAtTail(head, data) {
  let newNode = new SinglyLinkedListNode(data)
  let currNode = head
  if (!currNode) { //the LL is empty
    head = newNode
    return head
  } 
  while (currNode.next) {
    currNode = currNode.right
  }
  currNode = newNode
  return head
}