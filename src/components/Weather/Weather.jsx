import { useEffect, useState } from 'react';
import NextDay from '../NextDay/NextDay';
import { days } from '../../consts/Days';
import WeatherDetails from './WeatherDetails';

const Weather = ({ weather }) => {
  const [date, setDate] = useState('');
  const [day, setDay] = useState(0);

  const currentDate = () => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    setDay(date.getDay() - 1);
    if (day < 10) day = `0${day}`;
    if (month < 10) month = `0${month}`;

    setDate(`${day}/${month}/${year}`);
  };

  useEffect(() => {
    currentDate();
  }, []);

  return (
    <>
      {weather && (
        <div className="weather">
          <div className="weather__city">
            <h3>
              {weather.name}, <span className="weather__country"></span>
              {weather.sys.country}
            </h3>
            <p className="weather__date">
              {days[day]} {date}
            </p>
          </div>
          <div className="weather__current">
            {weather.weather.map(({ main, icon }, index) => (
              <div key={index} className="weather__container">
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="Image weather"
                />
                <div>
                  <p className="weather__temperature">
                    {weather.main.temp.toFixed(0)}
                    &#176; C
                  </p>
                  <p className="weather__description">{main}</p>
                </div>
              </div>
            ))}
          </div>
          <WeatherDetails weather={weather} />
          <p className="weather__heading">
            Approximate weather for next days for{' '}
            <span className="weather__marked">{weather.name}</span>
          </p>
          <div className="weather__next-days">
            <NextDay lat={weather.coord.lat} lon={weather.coord.lon} />
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
