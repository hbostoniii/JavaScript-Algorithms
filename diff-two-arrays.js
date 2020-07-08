function diffArray(arr1, arr2) {
  var newArr = [];
  return arr1.concat(arr2).filter(n => !arr1.includes(n)|| !arr2.includes(n))
  
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
