'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 5;
let highScore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  score--;

  if (score >= 0) {
    if (!guess) {
      displayMessage('⛔️ No content!');
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      document.querySelector('body').style.backgroundColor = '#00FF00';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highScore) {
        highScore = score + 1;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      let message = guess > secretNumber ? '📈 Too high!' : '📉  Too low!';
      displayMessage(message);

      if (score === 0) {
        displayMessage('💥 You lost the game!');
      }
    }

    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
