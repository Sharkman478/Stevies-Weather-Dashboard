document.querySelector("#searchbutton").addEventListener('click', function() {
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
                    }
                });
        })
});