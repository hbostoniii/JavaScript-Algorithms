var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(' ')[0];
  };
  this.getLastName = function() {
    return fullName.split(' ')[1]
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(first) {
    fullName = `${first} ${fullName.split(' ')[1]}`
  };
  this.setLastName = function(last) {
    fullName = `${fullName.split(' ')[0]} ${last}`
  };
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast
  };

  
  return firstAndLast;
};

var bob = new Person('Bob Ross');
// console.log(bob.getFullName())
// console.log(bob.setFirstName("Haskell"));
console.log(bob.getFirstName())
