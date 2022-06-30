import apiKey from './apikey';

const zip = 50130

fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${apiKey}`)
.then(result => result.json())
.then(console.log)