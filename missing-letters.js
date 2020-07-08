function fearNotLetter(str) {
  
  // go through each letter in str, find its ASCII code, and subtract the ASCII code from the letter before 
  for (let i = 0; i < str.length; i++) {
    const code = (i) => str.charCodeAt(i);
    let difference = code(i) - code(i-1);

    //if the difference between ASCII codes is greater than 1, return the missing letter
    if (difference > 1) {
     
      return String.fromCharCode(code(i)-1);
    }
    
  }
}

console.log(fearNotLetter("abce"));
