'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const apiKey = '915177630893820971044x48325';

///////////////////////////////////////

const getJson = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

function getCountryData(country) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    renderCountry(data);
  });
}

function renderCountry(data, className = '') {
  let languages = '';
  let currencies = '';

  for (const p in data.languages) {
    languages += data.languages[p] + ', ';
  }

  languages = languages.substring(0, languages.length - 2);

  for (const c in data.currencies) {
    currencies += data.currencies[c].name + `(${data.currencies[c].symbol})`;
  }

  const html = `
      <article class="country ${className}">
              <img class="country__img" src="${data.flags.png}" />
              <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${languages}</p>
                <p class="country__row"><span>💰</span>${currencies}</p>
              </div>
            </article>
      `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
}

// const getCountryDataFetch = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
//     .then(response => response.json())
//     .then(data => {
//       const code = data[0].borders[0];
//       renderCountry(data[0]);
//       return fetch(`https://restcountries.com/v3.1/alpha/${code}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(error => {
//       // handling error
//     })
//     .finally(x => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryDataFetch = function (country) {
  getJson(
    `https://restcountries.com/v3.1/name/${country}?fullText=true`,
    'Country not found.'
  )
    .then(data => {
      renderCountry(data[0]);
      console.log(data[0]);
      if (!data[0]?.borders || !data[0]?.borders[0])
        throw new Error('No neighbor found!');

      const neighbour = data[0]?.borders[0];

      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found.'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(error => {
      console.log(`${error} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${error.message}. Try again!`);
    })
    .finally(x => {
      countriesContainer.style.opacity = 1;
    });
};

const getCountryDataFetchAsync = async function (country) {
  try {
    const response = await getJson(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`,
      'Country not found.'
    );

    const dd

    console.log(4, data[0]);
    renderCountry(data[0]);
  } catch (error) {
    console.log(`----> ${error}`);
  }
};

// getCountryData('India');
// getCountryData('united states of america');

// Promisifying async operation
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

(async function () {
  const pos = await getPosition();
  const { latitude, longitude } = pos.coords;

  const promise = await fetch(
    `https://geocode.xyz/${latitude},${longitude}}?geoit=json&auth=${apiKey}`
  );

  const data = await promise.json();
  console.log(3, data.country);
  await getCountryDataFetchAsync(data.country);
})();

//getCountryDataFetch('Australia');
