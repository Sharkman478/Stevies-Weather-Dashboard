document.querySelector("#searchbutton").addEventListener('click', function() {
    let input = document.getElementById('city');
    let searchQuery = input.value;
    localStorage.setItem('searchQuery', searchQuery);
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    searchHistory.push(searchQuery);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    console.log(searchHistory);
    let list = document.getElementById('searchhistorylist');
    list.innerHTML = '';
    searchHistory.forEach(function(input) {
        let li = document.createElement('li');
        li.textContent = input;
        list.appendChild(li);
      });
    let city = document.querySelector('#city').value;
    const cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=78a76aae83b8f47a3a982348eeb6e4e7&units=imperial';
    fetch(cityUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (currentday) { 
            console.log(currentday)
            document.querySelector('#name').textContent = currentday.name;
            let currentDateTime = new Date();
            let date = currentDateTime.toLocaleDateString();
            document.querySelector('#date').textContent = (date);
            document.querySelector('#temp').textContent = currentday.main.temp;
            document.querySelector('#wind-speed').textContent = currentday.wind.speed;
            document.querySelector('#humidity').textContent = currentday.main.humidity;
            let icon = `https://openweathermap.org/img/wn/${currentday.weather[0].icon}@2x.png`;
            document.querySelector('#icon').src = icon;
            console.log(icon);
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
                        document.querySelector('#date'+i).textContent = forecastData.list[i*8].dt_txt;
                        document.querySelector('#temp'+i).textContent = forecastData.list[i*8].main.temp;
                        document.querySelector('#wind-speed'+i).textContent = forecastData.list[i*8].wind.speed;
                        document.querySelector('#humidity'+i).textContent = forecastData.list[i*8].main.humidity;
                        let icon = `https://openweathermap.org/img/wn/${forecastData.list[i*8].weather[0].icon}@2x.png`;
                        document.querySelector('#icon'+i).src = icon;
                        console.log(icon);
                    }
                });
        })
});

// list.addEventListener()