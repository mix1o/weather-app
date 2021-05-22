import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const mic = new SpeechRecognition();

mic.continous = true;
mic.interimResults = true;
mic.lang = 'pl';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const getWeather = name => {
    console.log(name);
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/find?q=${name}&units=metric`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            'ab01974f42mshe14ae2d856bc706p1848dfjsnf0108d65ba77',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      }
    )
      .then(res => res.json())
      .then(json => setWeather(json));
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
    <div className="app">
      <Header />
      <div className="app__search-container">
        <label>
          <input
            onKeyDown={e => {
              if (e.code === 'Enter') getWeather(city);
            }}
            onChange={e => setCity(e.target.value)}
            value={city}
            className="app__search"
            type="text"
            placeholder="Enter a city to see weather"
          />

          <button onClick={() => getWeather(city)} className="app__btn">
            <i className="fas fa-search"></i>
          </button>
          {isListening ? (
            <p className="app__mic-info">Microphone is working</p>
          ) : (
            <p className="app__mic-info">Microphone is off</p>
          )}
          <button
            className="app__mic"
            onClick={() => setIsListening(prevState => !prevState)}
          >
            <i className="fas fa-microphone"></i>
          </button>
        </label>
      </div>
      <Weather weather={weather.list} />
    </div>
  );
};

export default App;
