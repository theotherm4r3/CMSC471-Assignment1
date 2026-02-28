import 'https://esm.sh/d3-transition';

console.log('D3 Version:', d3.version);

//function to parse date
var parseDate = d3.timeParse("%Y%m%d");

//load data after page is loaded
function init(){
    d3.csv("./data/weather.csv", function(d){
        return {  
        station: d.station,
        state: d.state,
        latitude: +d.latitude,
        longitude: +d.longitude, 
        elevation: +d.elevation, 
        date: parseDate(d.date), 
        minTempF: +d.TMIN,
        maxTempF: +d.TMAX,
        avgTempF: +d.TAVG,
        avgWind: +d.AWND,
        snowfallIn: +d.SNOW,
        snowDepthIn: +d.SNWD,
        precipIn: +d.PRCP
     }
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error loading data:', error));
}

window.addEventListener('load', init);
