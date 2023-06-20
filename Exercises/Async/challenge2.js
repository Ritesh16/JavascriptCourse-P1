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

createImage('./img/img-1.jpg')
  .then(img => {
    currentImage = img;
    console.log('Image 1 loaded...');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(img => {
    currentImage = img;
    console.log('Image 2 loaded...');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    createImage('./img/img-3.jpg');
  })
  .then(img => {
    currentImage = img;
    console.log('Image 3 loaded...');
  })
  .catch(err => console.error(err));
