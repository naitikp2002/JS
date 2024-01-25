'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
function renderCountry(data, className) {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags['png']}" />
    <div class="country__data">
      <h3 class="country__name">${data.name?.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages['eng']}</p>
      <p class="country__row"><span>💰</span>${data.currencies['INR']?.name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2[0], 'neighbour');
    });
  });
};

function getCountryData(name) {
  const request = fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
    });
  // console.log(request.);
}

// getCountryAndNeighbour('bangladesh');
// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('russia');
getCountryAndNeighbour('bharat');
