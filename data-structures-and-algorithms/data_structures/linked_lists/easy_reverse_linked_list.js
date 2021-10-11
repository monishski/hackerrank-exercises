// I did not solve this!
function _reverse(head) { //see: https://www.geeksforgeeks.org/reverse-a-linked-list/
  let currNode = head, prevNode, nextNode;
  if (!currNode) return;
  
  while (currNode) {
    nextNode = currNode.next //store the next node
    currNode.next = prevNode //set the curr node to the previous node (reverse)
    
    prevNode = currNode //move the prev and curr pointers   
    currNode = nextNode
  }
  head = prevNode
  return head
}

//Again there is recursive solution to this
function reverse(head) {
  if (!head || !head.next) return head;
  let remaining = reverse(head.next)
  head.next.next = head
  head.next = null
  return remaining
}
//This not intuitive, see: https://www.hackerrank.com/challenges/reverse-a-linked-list/forum
