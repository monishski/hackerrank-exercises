function __mergeLists(head1, head2) {
  //Must watch: https://www.youtube.com/watch?v=j_UNYW6Ap0k&ab_channel=VivekanandKhyade-AlgorithmEveryDayVivekanandKhyade-AlgorithmEveryDay
  //if both lists are empty => null, if one is empty then return the other
  if (!(head1 && head2) || !head1 || !head2) return head1 || head2;
  let currNode1 = head1;
  let currNode2 = head2;
  let temp;
  if (currNode1.data <= currNode2.data) {
    temp = currNode1
    currNode1 = temp.next
  } else {
    temp = currNode2
    currNode2 = temp.next
  }
  let head = temp //without this, it doesnt work
  while (currNode1 && currNode2) {
    if (currNode1.data <= currNode2.data) {
      temp.next = currNode1
      temp = currNode1
      currNode1 = temp.next
    } else {
      temp.next = currNode2
      temp = currNode2
      currNode2 = temp.next
    }
  }
  if (!currNode1) {
    temp.next = currNode2
  } 
  if (!currNode2) {
    temp.next = currNode1
  }
  return head
}

function _mergeLists(head1, head2) { //taken from the discussion, more intuitive
  if (!(head1 && head2) || !head1 || !head2) return head1 || head2;
  // You can have just
  // if (!head2) return head1;
  // if (!head1) return head2;
  //Set head1 to always have the lower value
  if (head1.data >= head2.data) {
    [head1, head2] = [head2, head1];
  }  
  let head = head1
  while (head2) {
    while (head1.next && head2.data >= head1.next.data) {
      head1 = head1.next //advance head1 until we have a value that is greater than head2
    }
    let temp = head2.next //insert current node in llist2 into llist1
    head2.next = head1.next
    head1.next = head2
    head2 = temp
  }
  return head
}

//You can also do it recursively apparently (although, I would stick to iterative approach in interviews)
function mergeLists(head1, head2) {
  if (!head1) return head2;
  else if (!head2) return head1;
  if (head1.data < head2.data) {
    head1.next = mergeLists(head1.next, head2);
    return head1
  } else {
    head2.next = mergeLists(head1, head2.next);
    return head2
  }
}