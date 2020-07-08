function sumFibs(num) {
  const isOdd = (num) => num % 2 !== 0;
  console.log(isOdd())
  let result = 0;
  let prevNumber = 0;
  let currNumber = 1;
  while (currNumber <= num) {
      if(isOdd(currNumber)) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber
  }
return result
}

console.log(sumFibs(4));

