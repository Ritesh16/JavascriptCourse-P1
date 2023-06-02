class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  calculateAge() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.birthYear);
  }
}

// Static function
Person.sayHi = function () {
  console.log("Hi!!!!!");
};

const person = new Person("ritesh", 1988);
person.calculateAge();

Person.sayHi();
//person.sayHi();  NOT available
