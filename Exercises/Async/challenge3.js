const imageContainer = document.querySelector('#images');

const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (url) {
  var promise = new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = url;

    image.addEventListener('load', function () {
      imageContainer.append(image);
      resolve(image);
    });

    image.addEventListener('error', function () {
      reject(new Error('Image not found!'));
    });
  });

  return promise;
};

let currentImage;

const loadNPause = async function () {
  let img = await createImage('./img/img-1.jpg');
  currentImage = img;
  console.log('Image 1 loaded...');

  await wait(2);
  currentImage.style.display = 'none';

  img = await createImage('./img/img-2.jpg');
  console.log('Image 2 loaded...');
  currentImage = img;

  await wait(2);
  currentImage.style.display = 'none';

  img = await createImage('./img/img-3.jpg');
  console.log('Image 3 loaded...');
  currentImage = img;
};

//loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']);
