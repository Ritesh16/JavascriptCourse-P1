// How to add classes and use of getComputedStyle

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality & analytics. <button class="btn btn--close-cookie">Got it</button>';

const header = document.querySelector('.header');
header.append(message);

message.style.backgroundColor = '#37383d';
message.style.width = '100%';

console.log(1, message.style.color);
console.log(2, getComputedStyle(message).color);
console.log(2, getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

const logo = document.querySelector('.nav__logo');
console.log(logo.dataset.versionNumber);
console.log(logo.dataset.myname);

// logo.classList.add('');
// logo.classList.remove('', '');
// logo.classList.toggle('');
// logo.classList.contains('');

// Event bubbling and capturing

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  true
);
