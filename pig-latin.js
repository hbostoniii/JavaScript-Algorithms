function translatePigLatin(str) {
  //regex to test if str begins with consonant
  const findConsonant = /^[^aeiou]+/;
  const consonants = str.match(findConsonant)
//add 'way' to end of string that begins with a vowel
  if (!findConsonant.test(str)) {
      return str.concat(`way`);
  } else {
//take the first consonant or consonant cluster, move to the end of the word, and add 'ay'
    return str.replace(findConsonant,``).concat(`${consonants}ay`);
    
  }
  
}

console.log(translatePigLatin("california"));
