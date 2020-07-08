function convertHTML(str) {
  return str.split('').map(char => {
    switch(char) {
      case '&':
        return '&amp;';
        break;
      case '<':
        return '&lt;';
        break;
      case '>':
        return '&gt;';
        break;
      case `"`:
        return '&quot;';
        break;
      case `'`:
        return '&apos;';
        break;
      default:
        return char;
        break;
    }
  }).join('')
  
}

console.log(convertHTML("Schindler's List"));
