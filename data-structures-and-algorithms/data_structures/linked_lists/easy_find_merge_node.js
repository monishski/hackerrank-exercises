function _findMergeNode(headA, headB) {
  let q = headB;
  while (q) {
    let p = headA
    while (p) {
      if (p === q) {
        return p.data
      } 
      p = p.next
    }
    q = q.next
  }  
}

//There is another popular solution in the disucssions (I dont get it tbh):
function findMergeNode(headA, headB) {
  let p = headA;
  let q = headB;
  while (p !== q) {
    if (p.next) {
      p = p.next
    } else {
      p = headB
    }

    if (q.next) {
      q = q.next
    } else {
      q = headA
    }
  }
  return q.data
}