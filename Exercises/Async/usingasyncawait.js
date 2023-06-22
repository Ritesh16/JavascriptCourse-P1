'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const apiKey = '';

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

const getCountryDataFetchAsync = async function (country) {
  try {
    const data = await getJson(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`,
      'Country not found.'
    );

    console.log(101, data[0]);

    renderCountry(data[0]);
    if (!data[0]?.borders || !data[0]?.borders[0])
      throw new Error('No neighbor found!');

    const neighbor = data[0]?.borders[0];
    console.log('Neighbor', neighbor);
    const neighborData = await getJson(
      `https://restcountries.com/v3.1/alpha/${neighbor}`,
      'Country not found.'
    );

    console.log('Neighbor', neighborData[0]);

    renderCountry(neighborData[0], 'neighbour');
    countriesContainer.style.opacity = 1;
  } catch (error) {
    console.log(`----> ${error.message}`);
    renderError(error.message);
    throw error;
  }
};

// Promisifying async operation
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

(async function () {
  try {
    const pos = await getPosition();
    const { latitude, longitude } = pos.coords;

    const promise = await fetch(
      `https://geocode.xyz/${latitude},${longitude}}?geoit=json&auth=${apiKey}`
    );

    const data = await promise.json();
    console.log(3, data.country);
    await getCountryDataFetchAsync(data.country);
  } catch (error) {
    console.log(error);
  }
})();
