const t = document.querySelector("#temperature")
const ws = document.querySelector("#windSpeed")
const wc = document.querySelector("#windChill")


const temperature = 40;
const wind_speed = 4;
let windChill = "N/A"
if (wind_speed>3 && temperature>50){
    let winc = 35.74 + 0.6215* temperature - 35.75* wind_speed**0.16 + 0.4275*temperature*wind_speed**0.16;
    asd = winc.toFixed(2);
    windChill = asd.toString();
}

  
t.textContent = temperature;
ws.textContent = wind_speed;
wc.textContent = windChill;
