
const API_KEY = 'd354c95f7ee80bc28bb32518f22e53f7'
var city = 'São Paulo'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

// function getCities() {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => renderApiResult.textContent = JSON.stringify(data))
//         .catch(error => console.error(error))
// }


function getCity() {
    fetch(url)
    .then(response => response.json())
    .then(data =>  {
        temp.textContent = data.main.temp
        temp_min.textContent = data.main.temp_min
        temp_max.textContent = data.main.temp_max
    })
    .catch(error => console.error(error))
}
 
getCity()
// getCities()

