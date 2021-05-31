const WeatherDetails = ({ weather }) => {
  return (
    <div className="weather__details">
      <div className="weather__info">
        <div>
          <p className="weather__details-main">
            {weather.main.temp_min}&#176; C
          </p>
          <p className="weather__details-description">Temperature min</p>
        </div>
        <div>
          <p className="weather__details-main">{weather.wind.speed} km / h</p>
          <p className="weather__details-description">Wind speed</p>
        </div>
        <div>
          <p className="weather__details-main">{weather.main.humidity}%</p>
          <p className="weather__details-description">Humidity</p>
        </div>
      </div>
      <div className="weather__info weather__info--lower">
        <div>
          <p className="weather__details-main">
            {weather.main.temp_max}&#176; C
          </p>
          <p className="weather__details-description">Temperature max</p>
        </div>
        <div>
          <p className="weather__details-main">
            {weather.main.pressure}
            hPa
          </p>
          <p className="weather__details-description">Pressure</p>
        </div>
        <div>
          <p className="weather__details-main">
            {weather.main.feels_like}&#176; C
          </p>
          <p className="weather__details-description">Feels like</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
