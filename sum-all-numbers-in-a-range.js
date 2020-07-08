function sumAll(arr) {
  let sum = 0;
  for (let num = Math.min(...arr); num <= Math.max(...arr); num++) {
    
    sum+=num
  }
  return sum;
}

console.log(sumAll([1, 4]));
