const Person = {
  calcAge() {
    return 2023 - this.birthYear;
  },

  // Approach 2
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

// Creating object from Person Object
const steven = Object.create(Person);

const Student = Object.create(Person);
Student.init = function (name, birthYear, course) {
  Person.init.call(this, name, birthYear);

  this.course = course;

  console.log(
    `${name} is a student with Birth year : ${birthYear}. Course is ${course}`
  );
};

const jay = Object.create(Student);
jay.init("jay", 1993, "CSE");
