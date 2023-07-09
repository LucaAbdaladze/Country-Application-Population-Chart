function getCountryInfo() {
  var countryInput = document.getElementById('countryInput');
  var countryName = countryInput.value.trim();
  if (countryName === '') {
    alert('Please enter a country name');
    return;
  }

  var countryInfo = document.getElementById('countryInfo');
  countryInfo.innerHTML = 'Loading...';

  var apiUrl = 'https://restcountries.com/v3.1/name/' + countryName;

  // Make a request to the country API
  fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Process the country data and display it on the web page
      var country = data[0];

      var countryName = country.name.common;
      var capital = country.capital;
      var population = country.population;
      var area = country.area;
      var languages = Object.values(country.languages).join(', ');

      countryInfo.innerHTML = `
		<div class="country-container">
        <h2 style="color: purple;">${countryName}</h2>
        <p><span style="color: purple;">Capital: ${capital}</p>
        <p><span style="color: purple;">Population: ${population}</p>
        <p><span style="color: purple;">Area: ${area} square kilometers</p>
        <p><span style="color: purple;">Languages: ${languages}</p>
		</div>
      `;
    })
    .catch(function(error) {
      console.log('Error:', error);
      countryInfo.innerHTML = 'Failed to fetch country data';
    });
}


