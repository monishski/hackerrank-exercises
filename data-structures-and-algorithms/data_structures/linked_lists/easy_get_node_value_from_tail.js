function _getNode(head, positionFromTail) {
  let arr = []
  while (head) {
    arr.push(head.data)
    head = head.next
  }
  return arr[arr.length - positionFromTail - 1]
}

//There is a very neat solution in the discussion
function getNode(head, positionFromTail) {
  let index = 0;
  let currNode = head
  let result = head;
  while (currNode) {
    currNode = currNode.next
    // if (index++ > positionFromTail) {
    if (index > positionFromTail) {
      result = result.next
    }
    index++
  }
  return result.data
}