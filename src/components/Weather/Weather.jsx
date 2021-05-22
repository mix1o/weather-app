import React from 'react';

const Weather = ({ weather }) => {
  return (
    <div className="weather">
      {weather && <div className="weather__current">{weather[0].name}</div>}
      <div className="weather__next-days"></div>
    </div>
  );
};

export default Weather;
