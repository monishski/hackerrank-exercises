function _CompareLists(headOne, headTwo) {
  if (!(headOne && headTwo)) return 0;    
  while (headOne && headTwo) {
    if (headOne.data !== headTwo.data) return 0;
    headOne = headOne.next
    headTwo = headTwo.next
  }
  if (headOne && !headTwo || !headOne && headTwo) return 0;
  return 1
}

//Again there is a recursive solution
function CompareLists(headOne, headTwo) {
  if (!headOne && !headTwo) return 1; //if both lists are empty
  else if (!headOne || !headTwo) return 0; //if 1 list is empty
  if (headOne.data === headTwo.data) {
    return CompareLists(headOne.next, headTwo.next)
  } else {
    return 0;
  }
}