function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let srcKeys = Object.keys(source);
  console.log(srcKeys)
  return collection.filter(obj => srcKeys.every((key) => obj.hasOwnProperty(key) && obj[key] === source[key]))
  
  // Only change code above this line
  
}

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))