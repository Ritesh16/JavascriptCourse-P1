class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  calculateAge() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.birthYear);
  }

  get name() {
    return this._name;
  }

  set name(n) {
    this._name = n;
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

console.log(person.name);

person.name = "ritesh sharma";
console.log(person.name);
