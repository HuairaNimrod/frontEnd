// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Rexburg&appid=324c515983c9e0e150bc597d4e798e57&units=metric';


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }

// const t = document.querySelector("#temperature")
// const ws = document.querySelector("#windSpeed")
// const wc = document.querySelector("#windChill")
// const wi = document.querySelector("#weather-icon")


// const temperature = 40;
// const wind_speed = 4;
// let windChill = "N/A"
// if (wind_speed>3 && temperature>50){
//     let winc = 35.74 + 0.6215* temperature - 35.75* wind_speed**0.16 + 0.4275*temperature*wind_speed**0.16;
//     asd = winc.toFixed(2);
//     windChill = asd.toString();
// }

  
// t.textContent = temperature;
// ws.textContent = wind_speed;
// wc.textContent = windChill;



