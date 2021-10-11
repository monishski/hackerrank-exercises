function beautifulBinaryString(b) {
  let bArr = b.split('')
  let count = 0;
  for(let i = 1; i < bArr.length - 1; i++) {
    if (bArr[i-1] + bArr[i] + bArr[i+1] === '010') {
      [bArr[i], bArr[i+1]] = ['1', '1']; //you don't need to reassign, you could have jumped the index by by 3 i+=2
      count++;
    };
  }
  return count
}