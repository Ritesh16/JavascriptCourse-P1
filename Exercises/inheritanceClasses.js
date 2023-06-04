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

class Student extends Person {}

class Cricketer extends Person {
  constructor(name, birthYear, role) {
    // must always comes before this.
    super(name, birthYear);
    this.role = role;
  }

  calculateAge() {
    const currentYear = new Date().getFullYear();
    console.log(
      `I am ${currentYear - this.birthYear} year old. But feels like ${
        currentYear - this.birthYear + 10
      }`
    );
  }
}

const student = new Student("ritesh", 1988, "CS");
console.log("student object", student);

const cricketer = new Cricketer("sachin", 1978, "Batsman");
console.log("cricketer object", cricketer);
cricketer.calculateAge();
