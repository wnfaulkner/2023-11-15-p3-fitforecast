//WEATHER CONTROLLER

const { default: axios } = require("axios");

const weatherApiKey = process.env.WEATHERAPI_KEY
const ROOT_URL = 'https://api.weatherapi.com/v1/';
const endpoint = 'forecast'

//console.log("CONTROLLER FILE ACCESSED");

module.exports = {
  index,
}

async function index(req, res, next) {
  //console.log("INDEX FUNCTION CALLED")
  try{
    const endpointUrl = `${ROOT_URL}${endpoint}.json?key=${weatherApiKey}&q=94608&days=3&aqi=no&alerts=no`
    const endpointData = await axios.get(
        endpointUrl, 
        { headers: { 'Content-Type': 'application/json' }}
      )
    //.then(res => res.json())

    // res.json(endpointData.data.forecast.forecastday)
    // console.log(endpointData.data.forecast.forecastday)
    res.json(endpointData.data)
    console.log(endpointData.data)
    //res.redirect('/')
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

  //res.render('index');
}