import { useEffect, useState } from 'react';

const NextDay = ({ lat, lon }) => {
  const [nextDaysWeather, setNextDaysWeather] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => setNextDaysWeather(json.daily));
  }, []);

  return (
    <>
      {nextDaysWeather.map(day => {
        return day.weather.map(({ main, icon }, index) => {
          return (
            <div key={index} className="next-day">
              <p className="next-day__date">
                {new Date(day.dt * 1000).toLocaleDateString()}
              </p>
              <img src={`http://openweathermap.org/img/wn/${icon}.png`} />
              <p className="next-day__temp">
                {day.temp.day.toFixed(0)}&#176; C
              </p>
              <p className="next-day__description">{main}</p>
            </div>
          );
        });
      })}
    </>
  );
};

export default NextDay;
