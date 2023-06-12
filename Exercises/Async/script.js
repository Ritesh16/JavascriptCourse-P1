'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
function getCountryData(country) {
  const request = new XMLHttpRequest(country);
  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    let languages = '';
    let currencies = '';

    for (const p in data.languages) {
      languages += data.languages[p] + ', ';
    }

    languages = languages.substring(0, languages.length - 2);

    console.log(languages);

    for (const c in data.currencies) {
      currencies += data.currencies[c].name + `(${data.currencies[c].symbol})`;
    }

    const html = `
      <article class="country">
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
    countriesContainer.style.opacity = 1;
  });
}

getCountryData('India');
getCountryData('united states of america');
