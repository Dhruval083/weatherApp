import React from 'react';
import PropTypes from 'prop-types';

import './MainWeather.scss'

const MainWeather = ({ mainWeather }) => {
    const { temp, humidity, pressure, sea_level: seaLevel, temp_max: tempMax, temp_min: tempMin} = mainWeather;

    return (
    <div className="MainWeather">
        <h1>{temp}</h1>
        <p>{`Min Temp: ${tempMin}`}</p>
        <p>{`Min Temp: ${tempMax}`}</p>
        <p>{`Sea Level: ${seaLevel}`}</p>
        <p>{`Pressure: ${pressure}`}</p>
        <p>{`Humidity: ${humidity}`}</p>
    </div>
    );
};

MainWeather.propTypes = {
    mainWeather: PropTypes.object.isRequired
};

export default MainWeather;
