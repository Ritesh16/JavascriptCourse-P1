// Practice 1
//------------------------------------------------------
const arr = new Array(7);
arr.fill(1, 2);
console.log(arr);

// Practice 2
//------------------------------------------------------
const array = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(array);

// Practice 3
//------------------------------------------------------
labelBalance.addEventListener('click', function () {
  const newArray = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent
  );
  console.log(newArray);
});

// Calculate value of all positive movements
const val = accounts
  .flatMap(x => x.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(val);

// Calculate deposits over 1000
let numDeposits1000 = accounts
  .flatMap(x => x.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDeposits1000);

numDeposits1000 = accounts
  .flatMap(x => x.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
console.log(numDeposits1000);

numDeposits1000 = accounts
  .flatMap(x => x.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// calculate both deposits and withdrawal with same reduce. Advance reduce
// Version 1

const { deposits, withdrawals } = accounts
  .flatMap(x => x.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// Version 2
const { deposits1, withdrawals1 } = accounts
  .flatMap(x => x.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits1, withdrawals1);

const convertToTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = [
    'a',
    'an',
    'but',
    'and',
    'the',
    'on',
    'or',
    'in',
    'with',
    'is',
  ];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertToTitleCase('this is a nice title'));
console.log(convertToTitleCase('this is a LONG title but not too long'));
console.log(convertToTitleCase('and here is another title'));
