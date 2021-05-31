import { useEffect, useState } from 'react';
import './App.scss';
import Loading from './components/Loading/Loading';
import Weather from './components/Weather/Weather';

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
  const [recent, setRecent] = useState(false);
  const [userSearches, setUserSearches] = useState([]);

  useEffect(() => {
    handleListen();
    setUserSearches(JSON.parse(localStorage.getItem('recent-search')));
  }, [isListening]);

  const addRecent = value => {
    const words = JSON.parse(localStorage.getItem('recent-search'));
    if (words.length > 10) {
      words.shift();
    }

    const exists = words.indexOf(i => i === value);

    if (value !== '' && exists === -1) words.push(value);

    localStorage.setItem('recent-search', JSON.stringify(words));
  };

  const handleMapRecent = () => {
    if (userSearches) {
      return userSearches.map((name, index) => (
        <p
          key={index}
          onClick={() => getWeather(name)}
          className="app__recent-name"
        >
          {name}
        </p>
      ));
    }
  };

  const getWeather = name => {
    addRecent(name);

    if (name.length > 1) {
      setRecent(false);
      setLoading(true);
      setExistsCity(false);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7e370e3dd7190049ec2699d522a30847&units=metric`
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

  return (
    <div className={`app ${existsCity ? weather.weather[0].main : null}`}>
      <div className="app__search-container">
        <label className="app__label">
          <button onClick={() => getWeather(city)} className="app__btn-search">
            <i className="fas fa-search"></i>
          </button>
          <input
            onFocus={() => setRecent(true)}
            // onBlur={() => setRecent(false)}
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
        {recent && userSearches.length > 0 && (
          <div className="app__recent">{handleMapRecent()}</div>
        )}
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
