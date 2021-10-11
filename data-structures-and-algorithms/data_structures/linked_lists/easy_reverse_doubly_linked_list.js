function reverse(head) {
  if (!head) return null;
  
  let temp = head.next //swap the next and prev
  head.next = head.prev
  head.prev = temp
  
  if (!head.prev) return head; //if the prev is null, the list has bene fully reverse
  
  return reverse(head.prev)
}

function _reverse(head) {
  if (!head) return null;
  let currNode = head, prevNode;
  while (currNode) {
    let temp = currNode.next
    currNode.next = currNode.prev
    currNode.prev = temp
    
    prevNode = currNode
    currNode = currNode.prev
  }
  return prevNode;
}