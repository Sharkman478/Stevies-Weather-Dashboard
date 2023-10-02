const list = document.getElementById('searchhistorylist');
const searchButton = document.querySelector("#searchbutton");
const cityInput = document.querySelector('#city');

function handleSearch() {
  let searchQuery = cityInput.value;
  localStorage.setItem('searchQuery', searchQuery);
  let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  searchHistory.push(searchQuery);
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  list.innerHTML = '';
  searchHistory.forEach(function(input) {
    let li = document.createElement('button');
    li.textContent = input;
    list.appendChild(li);
  });
  let city = cityInput.value;
  const cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=78a76aae83b8f47a3a982348eeb6e4e7&units=imperial';
  fetch(cityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (currentday) {
      console.log(currentday);
      document.querySelector('#name').textContent = currentday.name;
      let currentDateTime = new Date();
      let date = currentDateTime.toLocaleDateString();
      document.querySelector('#date').textContent = (date);
      document.querySelector('#temp').textContent = currentday.main.temp;
      document.querySelector('#wind-speed').textContent = currentday.wind.speed;
      document.querySelector('#humidity').textContent = currentday.main.humidity;
      let icon = `https://openweathermap.org/img/wn/${currentday.weather[0].icon}@2x.png`;
      document.querySelector('#icon').src = icon;
      let latitude = currentday.coord.lat;
      let longitude = currentday.coord.lon;
      const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=78a76aae83b8f47a3a982348eeb6e4e7&units=imperial';
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          }
          return response.json();
        })
        .then(function (forecastData) {
          console.log(forecastData);
          for(let i=0; i<forecastData.list.length; i++){
            // This "dt_txt" throws up an error that does not effect the functionality (I think that when the code runs this for loop goes until it cannot be completed but in the list array it is only up to 39 entries and it cannot keep going so it shows up and just stops it)
            document.querySelector('#date'+i).textContent = forecastData.list[i*8].dt_txt;
            document.querySelector('#temp'+i).textContent = forecastData.list[i*8].main.temp;
            document.querySelector('#wind-speed'+i).textContent = forecastData.list[i*8].wind.speed;
            document.querySelector('#humidity'+i).textContent = forecastData.list[i*8].main.humidity;
            let icon = `https://openweathermap.org/img/wn/${forecastData.list[i*8].weather[0].icon}@2x.png`;
            document.querySelector('#icon'+i).src = icon;
          }
        });
    });
}

searchButton.addEventListener('click', handleSearch);

list.addEventListener('click', function(event) {
  if(event.target.tagName === 'BUTTON') {
    cityInput.value = event.target.textContent;
    handleSearch();
  }
});