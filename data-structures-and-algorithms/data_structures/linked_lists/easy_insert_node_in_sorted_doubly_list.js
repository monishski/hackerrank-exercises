function sortedInsert(head, data) {
  if (!head) return null
  let newNode = new DoublyLinkedListNode(data)
  
  if (data <= head.data) {
    newNode.next = head
    head = newNode
    return head;
  }
  
  let currNode = head, prevNode;
  while (currNode && currNode.data < data) {
    prevNode = currNode
    currNode = currNode.next
  }
  
  if (!currNode) {
    prevNode.next = newNode
    newNode.prev = prevNode
  } else {
    newNode.prev = prevNode.next
    newNode.next = currNode
    currNode.prev = newNode
    prevNode.next = newNode
  }
  return head  
}

//Again there is recursive solution
function sortedInsert(head, data) {
  let newNode = new DoublyLinkedListNode(data)
  if (!head) return newNode;
  else if (data <= head.data) {
    newNode.next = head
    head = newNode
    return newNode;
  } else {
    let temp = sortedInsert(head.next, data)
    head.next = temp
    temp.prev = head
    return head
  }
}