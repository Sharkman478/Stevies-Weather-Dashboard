// document.querySelector("#searchbutton").addEventListener('click', function() {
//     let city = document.querySelector('#city').value;
//     const cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=78a76aae83b8f47a3a982348eeb6e4e7&units=imperial';
//     fetch(cityUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             let latitude = data.coord.lat;
//             let longitude = data.coord.lon;
//             const apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=78a76aae83b8f47a3a982348eeb6e4e7&units=imperial';
//             fetch(apiUrl)
//                 .then(function (response) {
//                     return response.json();
//                 })
//                 .then(function (forecastData) {
//                     console.log(forecastData);
//                     document.querySelector('#name').textContent = forecastData.city.name;
//                     document.querySelector('#date').textContent = forecastData.list[0].dt_txt;
//                     document.querySelector('#date1').textContent = forecastData.list[1].dt_txt;
//                     document.querySelector('#date2').textContent = forecastData.list[2].dt_txt;
//                     document.querySelector('#date3').textContent = forecastData.list[3].dt_txt;
//                     document.querySelector('#date4').textContent = forecastData.list[4].dt_txt;
//                     document.querySelector('#date5').textContent = forecastData.list[5].dt_txt;
//                     document.querySelector('#temp' + i).textContent = forecastData.list[i].main.temp;
//                     document.querySelector('#temp1').textContent = forecastData.list[1].main.temp;
//                     document.querySelector('#temp2').textContent = forecastData.list[2].main.temp;
//                     document.querySelector('#temp3').textContent = forecastData.list[3].main.temp;
//                     document.querySelector('#temp4').textContent = forecastData.list[4].main.temp;
//                     document.querySelector('#temp5').textContent = forecastData.list[5].main.temp;
//                     document.querySelector('#wind-speed' + i).textContent = forecastData.list[i].wind.speed;
//                     document.querySelector('#wind-speed1').textContent = forecastData.list[1].wind.speed;
//                     document.querySelector('#wind-speed2').textContent = forecastData.list[2].wind.speed;
//                     document.querySelector('#wind-speed3').textContent = forecastData.list[3].wind.speed;
//                     document.querySelector('#wind-speed4').textContent = forecastData.list[4].wind.speed;
//                     document.querySelector('#wind-speed5').textContent = forecastData.list[5].wind.speed;
//                     document.querySelector('#humidity' + i).textContent = forecastData.list[i].main.humidity;
//                     document.querySelector('#humidity1').textContent = forecastData.list[1].main.humidity;
//                     document.querySelector('#humidity2').textContent = forecastData.list[2].main.humidity;
//                     document.querySelector('#humidity3').textContent = forecastData.list[3].main.humidity;
//                     document.querySelector('#humidity4').textContent = forecastData.list[4].main.humidity;
//                     document.querySelector('#humidity5').textContent = forecastData.list[5].main.humidity;
//                 });
//         });
// });


// document.querySelector("#searchbutton").addEventListener('click', function() {
//     let city = document.querySelector('#city').value;
//     const cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=78a76aae83b8f47a3a982348eeb6e4e7&units=imperial';
//     fetch(cityUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             let latitude = data.coord.lat;
//             let longitude = data.coord.lon;
//             const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=78a76aae83b8f47a3a982348eeb6e4e7&units=imperial';
//             fetch(apiUrl)
//                 .then(function (response) {
//                     return response.json();
//                 })
//                 .then(function (forecastData) {
//                     console.log(forecastData);
//                     for(let i=0; i<6; i++){
//                         document.querySelector('#name' + i).textContent = forecastData.list[i].city.name;
//                         document.querySelector('#date' + i).textContent = forecastData.list[i].dt_txt;
//                         document.querySelector('#temp' + i).textContent = forecastData.list[i].main.temp;
//                         document.querySelector('#wind-speed' + i).textContent = forecastData.list[i].wind.speed;
//                         document.querySelector('#humidity' + i).textContent = forecastData.list[i].main.humidity;
//                     }
//                 });
//         });
// });

document.querySelector("#searchbutton").addEventListener('click', function() {
    let city = document.querySelector('#city').value;
    const cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=78a76aae83b8f47a3a982348eeb6e4e7&units=imperial';
    fetch(cityUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let latitude = data.coord.lat;
            let longitude = data.coord.lon;
            const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=78a76aae83b8f47a3a982348eeb6e4e7&units=imperial';
            fetch(apiUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (forecastData) {
                    console.log(forecastData);
                    for(let i=0; i<6; i++){
                        document.querySelector('#name' + i).textContent = forecastData.city.name;
                        document.querySelector('#date' + i).textContent = forecastData.list[i*8].dt_txt;
                        document.querySelector('#temp' + i).textContent = forecastData.list[i*8].main.temp;
                        document.querySelector('#wind-speed' + i).textContent = forecastData.list[i*8].wind.speed;
                        document.querySelector('#humidity' + i).textContent = forecastData.list[i*8].main.humidity;
                    }
                });
        });
});

