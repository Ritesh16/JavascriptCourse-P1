'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  score--;

  if (score >= 0) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔️ No content!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈 Too high!';
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉  Too low!';
    }

    document.querySelector('.score').textContent = score;

    if (score === 0) {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }
});
