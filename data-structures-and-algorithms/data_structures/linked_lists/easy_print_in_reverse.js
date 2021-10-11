function _reversePrint(head) { //they had a tail in the LL but yet give us the head ARH
  let data = [] 
  while (head) {
    data.push(head.data)
    head = head.next
  }
  
  for(let i = data.length - 1; i >=0; i--) {
    console.log(data[i])
  }
}

//The recursive solution is so neat
function reversePrint(head) {
  if (head) {
    reversePrint(head.next)
    console.log(head.data)
  }
}