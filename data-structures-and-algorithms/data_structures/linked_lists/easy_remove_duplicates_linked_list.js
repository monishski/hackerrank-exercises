function __removeDuplicates(head) {
  let currNode = head
  while (currNode.next) {
    while (currNode.next && currNode.data !== currNode.next.data) {
      currNode = currNode.next
    }
    if (currNode.next) {
      currNode.next = currNode.next.next
    }
  }
  return head
}

//The above works but its difficult to read...
function _removeDuplicates(head) {
  let currNode = head
  while (currNode.next) {
    if (currNode.data != currNode.next.data) {
      currNode = currNode.next
    } else {
      currNode.next = currNode.next.next
    }
  }
  return head
}

//Recursive soluton
function removeDuplicates(head) {
  if (!head) return null;
  let currNode = head.next;
  while (currNode && head.data === currNode.data ) {
    currNode = currNode.next;
  }
  head.next = removeDuplicates(currNode);
  return head;
}