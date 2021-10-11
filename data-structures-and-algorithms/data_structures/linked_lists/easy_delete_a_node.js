function _deleteNode(head, position) {
  let currNode = head, prevNode;
  if (!currNode) return null;
  if (position === 0) {
    head = currNode.next
    return head
  }
  let count = 0
  while (count !== position) {
    count++
    prevNode = currNode
    currNode = currNode.next
  }
  prevNode.next = currNode.next
  return head  
}

//You can also solve it recursively
function deleteNode(head, position) {
  if (position === 0) return head.next;
  head.next = deleteNode(head.next, position - 1)
  return head
}