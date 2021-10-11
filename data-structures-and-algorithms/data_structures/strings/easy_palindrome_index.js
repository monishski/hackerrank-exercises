function palindromeIndex(s) {
  let start = 0
  let end = s.length - 1
  while (start < end) {
    if (s[start] !== s[end]) {
      //if you wanted to use substring you could do that
      // so with the the start would be s.substring(0, start) + s.substr(start+1)
      // and without the end would be s.substring(0, end) + s.substr(start+1)
      let _s = isPalindrome(s, start + 1, end) //beginning & end removed
      let s_ = isPalindrome(s, start, end - 1) //beginning removed
      if (_s) return start; 
      if (s_) return end;
    }
    start++; end--
  }
  return -1
}

const isPalindrome = (s, start, end) => {
  let i = start;
  let j = end
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++; j--;
  }
  return true;
}

//My solution above works but you outsource a check 'palidromity' check
const palindromeIndex = s => {
  let start = 0
  let end = s.length - 1
  while (start < end) {
    if (s[start] !== s[end]) {
      console.log(s[start], s[start+1], s[end], s[end-1])
      if (s[start+1] === s[end]) {
        // return start
        // 0 1 2 3 4 5 6 7 8 9 10  
        // l f c w n n w c w f l  - it doesnt match at 2 and 8, which should go? the end
        if (s[start] === s[end-1] && s[start+1] === s[end-2]) return end;
        else return start;
      } else if (s[start] === s[end-1]) {
        return end
      }
      
    }
    start++; end--;
  }
  return -1 
}
