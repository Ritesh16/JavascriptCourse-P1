"use strict";
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  console.log(this);
};

let someone = "someone";
console.log(someone instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

let ritesh = new Person("ritesh", 1988);
ritesh.calcAge();
// console.log(ritesh);
// console.log(ritesh.__proto__);
// console.log(ritesh.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(ritesh));
// console.log(Person.prototype.isPrototypeOf(Person));
