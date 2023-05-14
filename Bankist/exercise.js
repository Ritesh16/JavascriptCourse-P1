const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// exercise 1

// dogs.forEach(function (dog, index) {
//   dog.foodPortion = dog.weight ** 0.75 * 28;
// });

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// exercise 2
const dogsSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogsSarah);
console.log(
  `Sarah's dog is eating ${
    dogsSarah.curFood > dogsSarah.recFood ? 'too much' : 'too little'
  } `
);

// exercise 3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatLittle);
