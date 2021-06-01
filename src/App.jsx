import { useCallback, useEffect, useReducer, useState } from 'react';
import './App.scss';
import Hamburger from './components/Hamburger/Hamburger';
import Loading from './components/Loading/Loading';
import Weather from './components/Weather/Weather';
import { ACTIONS } from './consts/Actions';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const mic = new SpeechRecognition();

mic.continuos = true;
mic.interimResults = true;
mic.lang = 'en-US';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [isListening, setIsListening] = useState(false);
  const [loading, setLoading] = useState(false);
  const [existsCity, setExistsCity] = useState(false);
  const [error, setError] = useState(null);
  const [showDefault, setShowDefault] = useState(true);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const getWeather = (name, add = true) => {
    if (name.length > 1) {
      if (add) {
        dispatch({ type: ACTIONS.ADD, payload: { name } });
      }
      setLoading(true);
      setExistsCity(false);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      )
        .then(res => res.json())
        .then(json => {
          if (json.cod === '404') {
            setLoading(false);
            setExistsCity(false);
            setError(true);
          } else {
            setWeather(json);
            setLoading(false);
            setExistsCity(true);
            setError(false);
            setShowDefault(false);
          }
        });
      return;
    }
    setError(true);
  };

  const handleListen = () => {
    if (isListening) {
      if (city.length > 0) {
        setCity('');
      }
      mic.start();
    } else {
      mic.stop();
    }
    mic.onresult = e => {
      const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

      if (transcript.length > 0) {
        setCity(transcript);

        mic.stop();
        setIsListening(false);

        if (!isListening) {
          setTimeout(() => {
            getWeather(transcript);
          }, 1000);
        }
      }

      mic.onerror = e => {
        console.log(e.error);
      };
    };
  };

  const reducer = useCallback((userData, action) => {
    switch (action.type) {
      case ACTIONS.ADD:
        const index = userData
          .slice(1)
          .findIndex(
            element =>
              element.toLowerCase() === action.payload.name.toLowerCase()
          );
        if (userData.length === 16) {
          userData.splice(1, 1);
        }

        if (index === -1 && userData.length <= 16) {
          return [...userData, action.payload.name];
        }

        return [...userData];

      case ACTIONS.DEFAULT_CITY:
        userData[0].defaultCity = action.payload.city;
        return [...userData];
    }
  }, []);

  const [userData, dispatch] = useReducer(
    reducer,
    [
      {
        defaultCity: '',
      },
    ],
    () => {
      const localData = localStorage.getItem('user-data');
      return localData
        ? JSON.parse(localData)
        : [
            {
              defaultCity: '',
            },
          ];
    }
  );

  useEffect(() => {
    window.localStorage.setItem('user-data', JSON.stringify(userData));

    if (userData[0].defaultCity !== '' && !existsCity && showDefault) {
      const name = userData[0].defaultCity;
      getWeather(name, false);
    }
  }, [userData]);

  console.log(weather);
  return (
    <div className={`app ${existsCity ? weather.weather[0].main : null}`}>
      <Hamburger
        getWeather={getWeather}
        userData={userData}
        dispatch={dispatch}
      />
      <div className="app__search-container">
        <label className="app__label">
          <button onClick={() => getWeather(city)} className="app__btn-search">
            <i className="fas fa-search"></i>
          </button>
          <input
            onKeyDown={e => {
              if (e.code === 'Enter') getWeather(city);
            }}
            onChange={e => setCity(e.target.value)}
            value={city}
            className="app__search"
            type="text"
            placeholder="San Francisco"
          />
          {isListening && <i className="fas fa-circle"></i>}
          <button className="app__mic" onClick={() => setIsListening(true)}>
            {!isListening && <i className="fas fa-microphone"></i>}
            {isListening && <i className="fas fa-microphone-slash"></i>}
          </button>
        </label>
      </div>

      {!loading && existsCity && <Weather weather={weather} />}
      {loading && <Loading />}
      {error && (
        <p className="app__error">
          City not found. Please enter a valid name of city and remember name of
          city must be at least 3 words!
        </p>
      )}
    </div>
  );
};

export default App;
