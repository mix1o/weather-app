import { useState } from 'react';
import styled from 'styled-components';
import { ACTIONS } from '../../consts/Actions';

const HamburgerContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  background: #d3d3d3;
  width: 80%;
  z-index: 10;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Hamburger = ({ dispatch, userData, getWeather, setCity }) => {
  const [open, setOpen] = useState(false);
  const [userCity, setUserCity] = useState('');

  return (
    <div className="hamburger">
      <div className="hamburger__header">
        <p className="hamburger__heading">Weather App</p>
        <div className="hamburger__icon">
          {!open && (
            <i onClick={() => setOpen(true)} className="fas fa-bars"></i>
          )}
          {open && (
            <i onClick={() => setOpen(false)} className="fas fa-times"></i>
          )}
        </div>
      </div>
      <HamburgerContent open={open}>
        <div className="hamburger__recent">
          <h4 className="hamburger__main-heading">
            Your recent searches <i className="fas fa-search"></i>
          </h4>
          <p className="hamburger__description">
            Click one of them to see weather
          </p>
          <div className="hamburger__container-recent">
            {userData.slice(1).map((value, id) => (
              <p
                onClick={() => {
                  getWeather(value);
                  setOpen(false);
                  setCity(value);
                }}
                key={id}
                className="hamburger__recent-words"
              >
                {value}
              </p>
            ))}
          </div>
        </div>
        <div className="hamburger__user-default-city">
          <h4 className="hamburger__main-heading">
            Set your city <i className="fas fa-home"></i>
          </h4>
          <p className="hamburger__description">
            You can see your city as default.
          </p>
          <label className="hamburger__label">
            <input
              className="hamburger__input"
              defaultValue={userData[0].defaultCity}
              onChange={e => setUserCity(e.target.value)}
              type="text"
            />
            <button
              onClick={async () => {
                const newCity = await dispatch({
                  type: ACTIONS.DEFAULT_CITY,
                  payload: { city: userCity },
                });
                window.location.reload();
              }}
              className="hamburger__btn"
            >
              SET
            </button>
          </label>
        </div>
        <div className="hamburger__rights">
          <p className="hamburger__footer-text">WeatherApp by mix1o</p>
          <p className="hamburger__footer-text">All rights reserved &copy;</p>
        </div>
      </HamburgerContent>
    </div>
  );
};

export default Hamburger;
