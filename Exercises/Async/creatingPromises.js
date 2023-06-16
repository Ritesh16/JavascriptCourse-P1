const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() > 0.5) {
      resolve('You win!');
    } else {
      reject(new Error('You lost money!'));
    }
  }, 2000);
});

lotteryPromise
  .then(res => console.log(res))
  .catch(error => console.error(error));
