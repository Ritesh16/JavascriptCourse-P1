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

// Static method
Person.sayHi = function () {
  console.log("Hello user!!");
};

Person.sayHi();

// Getter Setter
const student = {
  name: "data",
  fullName: "full name",

  get getName() {
    return this.name;
  },

  set getName(n) {
    this.name = n;
  },

  get getFullName() {
    return this._fullname;
  },

  set getFullName(n) {
    this._fullname = n;
  },
};

console.log("GET", student.getName);
student.getName = "ritesh";
console.log("SET", student.getName);

console.log("GET FN", student.getFullName);
student.getFullName = "ritesh sharma";
console.log("SET FN", student.getFullName);
console.log(student);
