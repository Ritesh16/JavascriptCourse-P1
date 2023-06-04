const Person = function (firstName, birthYear) {
  this.age = 28;
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Extending class
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("mike", "1972", "CS");

mike.introduce();
mike.calcAge();
console.dir(mike);

Student.prototype.constructor = Student;

console.log(1, mike.__proto__ === Student.prototype);
console.log(2, mike.__proto__ === Person.prototype);

console.log(3, mike instanceof Student);
console.log(4, mike instanceof Person);

const s = new Person("s", 2023);
console.log(s);
console.log(s.__proto__ == Person.prototype);

console.log(mike);

console.log(mike.__proto__ == Student.prototype);
