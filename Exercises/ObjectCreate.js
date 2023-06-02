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

const ritesh = Object.create(Person);

// Approach: 1
ritesh.name = "ritesh";
ritesh.birthYear = 1988;

console.log(ritesh.calcAge());

const nandini = Object.create(Person);
nandini.init("nandini", 1990);
console.log(nandini.calcAge());
