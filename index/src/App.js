import './App.css';
import searchicon from './Assets/search.png';
import cloud from './Assets/cloud.png';
import drizzle from './Assets/deizzle.png';
import clear from './Assets/clear.png';
import rain from './Assets/rain1.png';
import snow from './Assets/snow.png';
import humidityicon from './Assets/humidity.png';
import windicon from './Assets/wind.png';
import { useEffect, useState } from 'react';

const WeatherDetail = ({ icon, temp, city, country, lat, lng, humidity, wind }) => {
  return (
    <>
      <div className='image'>
        <img src={icon} alt='img' />
      </div>
      <div className='tem'>{temp}°C </div>
      <div className='location'>{city}</div>
      <div className='country'>{country}</div>
      <div className='cord'>
        <div>
          <span className='lat'>Latitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className='lng'>Longitude</span>
          <span>{lng}</span>
        </div>
      </div>
      <div className='data-con'>
        <div className='element'>
          <img src={humidityicon} alt='' className='icon' />
          <div className='data'>
            <div className='hum-per'>{humidity}%</div>
            <div className='hum-text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={windicon} alt='' className='icon' />
          <div className='data'>
            <div className='hum-per'>{wind} km/h</div>
            <div className='hum-text'>Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  const apikey = "a1e6689020065c206030d2dcd1527e62";

  const [text, setText] = useState("Jaffna");
  const [icon, setIcon] = useState(cloud);
  const [temp, setTemp] = useState(35);
  const [city, setCity] = useState("Jaffna");
  const [country, setCountry] = useState("SL");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [error, seterror] = useState(null);

  const weatherIcon = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": drizzle,
    "03n": drizzle,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
    // Add more mappings as needed
  };

  const search = async () => {
    setLoading(true);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apikey}&units=Metric`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      if (data.cod === "404") {
        console.log("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      } else {
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setTemp(Math.floor(data.main.temp));
        setCity(data.name);
        setCountry(data.sys.country);
        setLat(data.coord.lat);
        setLng(data.coord.lon);
        setCityNotFound(false);
        const weatherIconCode = data.weather[0].icon;
        setIcon(weatherIcon[weatherIconCode] || cloud);
      }
    } catch (error) {
      console.error("Error:", error.message);
      seterror("An error occured while fetching weather data");
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  useEffect (function(){
    search();
  },[])
  

  return (
    <>
      <div className="App">
        <div className='container'>
          <div className='input-con'>
            <input type='text' className='city-input' placeholder='Search City' onChange={handleCityChange} value={text} onKeyDown={handleKeyDown} />
            <div className='search-icon' onClick={search}>
              <img src={searchicon} alt='search' />
            </div>
          </div>
          {!loading && !cityNotFound &&<WeatherDetail icon={icon} temp={temp} city={city} country={country} lat={lat} lng={lng} humidity={humidity} wind={wind} />}
          { loading &&<div className='loading-msg'> Loading ...</div>}
          {error &&<div className='error-msg'>{error}</div>}
          { cityNotFound&&<div className='city-not-found'>City not found</div>}
          <p className='footer'>Design by <span>Vithu</span></p>
        </div>
      </div>
    </>
  );
}

export default App;
