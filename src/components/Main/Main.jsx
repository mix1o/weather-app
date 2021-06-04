import React from 'react';

const Main = () => {
  return (
    <div className="main">
      <div className="main__box">
        <h3 className="main__heading-3">Search weather for any city</h3>
        <p className="main__description">
          Weather App gives you ability to see current weather for specific
          city.
        </p>
      </div>
      <div className="main__box">
        <h3 className="main__heading-3">Your favorite cities</h3>
        <p className="main__description">
          Your recent search city are saved. Just click of them in hamburger.
        </p>
      </div>
      <div className="main__box">
        <h3 className="main__heading-3">Save your current city</h3>
        <p className="main__description">
          In hamburger you can pass name of your current city. When you be on
          page it be as default.
        </p>
      </div>

      <p className="main__info">Here will appear results</p>
    </div>
  );
};

export default Main;
