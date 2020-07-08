function pairElement(str) {

//empty array to return the dna pairs
let newArr = []

//turn str into array of letters, then iterate through each letter and return its DNA pair using switch
str.split('').map(letter => {
  switch (letter) {
    case 'A':
      return newArr.push(['A','T'])
      break;
    case 'T':
      return newArr.push(['T','A']);
      break;
    case 'C':
      return newArr.push(['C','G']);
      break;
    case 'G':
      return newArr.push(['G','C']);
      break;
  }
})
  return newArr;
}

console.log(pairElement("ATCGA"));
