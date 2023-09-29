// fetch(apiUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     for (var i = 0; i < data.length; i++) {
//       console.log(data[i].url);
//       console.log(data[i].user.login);
//     }
//   });

document.querySelector("#searchbutton").addEventListener('click', function() {
    let city = document.querySelector('#city').value;
    const cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=78a76aae83b8f47a3a982348eeb6e4e7&units=imperial';
    fetch(cityUrl)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        console.log(data)
    })
    const apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=78a76aae83b8f47a3a982348eeb6e4e7';
    let latitude = '';
    let longitude = '';
    document.querySelector('#humidity1').textContent = data.list.main.humidity;
    document.querySelector('#humidity2').textContent = data.list.main.humidity;
    document.querySelector('#humidity3').textContent = data.list.main.humidity;
    document.querySelector('#humidity4').textContent = data.list.main.humidity;
    document.querySelector('#humidity5').textContent = data.list.main.humidity;
});
