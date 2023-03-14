'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 5;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  score--;

  if (score >= 0) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔️ No content!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('body').style.backgroundColor = '#00FF00';
      document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈 Too high!';
      if (score === 0) {
        document.querySelector('.message').textContent =
          '💥 You lost the game!';
      }
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉  Too low!';
      if (score === 0) {
        document.querySelector('.message').textContent =
          '💥 You lost the game!';
      }
    }

    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';
});
