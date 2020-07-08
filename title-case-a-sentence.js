function titleCase(str) {
 let strArr = str.toLowerCase().split(' ');
 let newArr = [];
//  console.log(strArr);
 for (let i = 0; i < strArr.length; i++) {
   let newStr = strArr[i].replace(/^[a-z]/i, strArr[i].charAt(0).toUpperCase());
   newArr.push(newStr);
 } 
 return newArr.join(' ')
}

console.log(titleCase("not a little tea pot"));
