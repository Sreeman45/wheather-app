const fahreinheit = document.getElementById('fahreinheit');
const celcius = document.getElementById('celsius')
const middle = document.getElementById('middle')
const search = document.getElementById('search');
const button = document.querySelector('button');
const span =document.querySelectorAll('span')
const span_1=span[0]
const span_2=span[1]
const span_3=span[2]
const span_4=span[3]

const wheather = async (cityname) => {
    let api = await fetch(`http://api.weatherapi.com/v1/current.json?key=75543c671a7042069c5114741240412&q=${cityname}&aqi=yes`)
    let json = await api.json()
    let location = json.location
    let current = json.current
    let extrareports=()=>{
         span_1.textContent=`LocalTime:${location.localtime}`
         span_2.textContent=`Humidity:${current.humidity}`
         span_3.textContent=`country:${location.country}`
         span_4.textContent=`wind_Speed:${current.wind_kph+"km/h"},${current.wind_mph+"m/h"}`

    }
    try {
        if (fahreinheit.checked) {
            middle.innerHTML = `<img src=${current.condition.icon}>
        <div class="number">${current.temp_f + "F"}</div>`;
        extrareports()
        }
        if (celcius.checked) {
            middle.innerHTML = `<img src=${current.condition.icon}>
        <div class="number">${current.temp_c + "C"}</div>`
        extrareports()
        }
        if (!fahreinheit.checked || celcius.checked) {
            middle.innerHTML = `<img src=${current.condition.icon}>
        <div class="number">${current.temp_c + "C"}</div>`
        extrareports()
        }
    }
    catch {
        middle.innerHTML = `<div class="number">city not found</div>`
        span_1.textContent=``
        span_2.textContent=``
        span_3.textContent=``
        span_4.textContent=``
    }
}
wheather("hyderabad")
search.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        let searchvalue = search.value
        wheather(searchvalue)
    }
})
button.addEventListener('click', () => {
    let searchvalue = search.value
    wheather(searchvalue)
}
)




