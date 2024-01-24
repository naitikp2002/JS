'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
function getCountryData(name, className = '') {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${name}`);
  request.send();
  // console.log(request.responseText);

  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags['png']}" />
  <div class="country__data">
    <h3 class="country__name">${data.name?.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages['hin']}</p>
    <p class="country__row"><span>💰</span>${data.currencies['INR']?.name}</p>
  </div>
</article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
    const [neighbours] = data.borders;
    if (!neighbours) return;
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v3.1/alpha/${neighbours}
    `
    );
    request2.send();
    request2.addEventListener('load', function () {
      console.log(this.responseText);
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      getCountryData(data2[0].name.common, 'neighbour');
      //   return;
    });
  });
}

// getCountryData('bangladesh');
// getCountryData('bharat');
getCountryData('usa');
// getCountryData('russia');
