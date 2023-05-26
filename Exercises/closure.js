let f;

const doSomething = function () {
  let i = 10;

  f = function () {
    return i * 10;
  };
};

doSomething();
console.log(f());

const doSomethingMore = function () {
  let i = 12;

  f = function () {
    return i * 10;
  };
};

doSomethingMore();
console.log(f());
console.log(f);
console.dir(f);
