import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './DayWeather.scss';

const DayWeather = ({ day, weatherData, onClick }) => {
    const weekDay = moment(day).format('ddd');
    const tempOfHours = weatherData.map(hourtime => hourtime.main.temp);
    let weatherAtNoon = weatherData.filter(item => item.dt_txt.substring(11, 13) === '12');
    if(weatherAtNoon.length < 1)
    {
        weatherAtNoon = weatherData.slice(0, 1);
    }
    const weatherCondition = weatherAtNoon[0].weather[0].description;
    const weatherCode = weatherAtNoon[0].weather[0].icon;
    const totalTemp = tempOfHours.reduce((acc, item) => acc + item);
    const avgTempForDay = Math.round(totalTemp / tempOfHours.length);

    return (
        <div className="DayWeather" onClick={() => onClick(weatherAtNoon[0].main)}>
        <h3 className="DayWeather__day-name">{weekDay}</h3>
        <h4 className="DayWeather__day-average-temp">{avgTempForDay}<span className="DayWeather__degrees">&#8451;</span></h4>
        <img src={`http://openweathermap.org/img/w/${weatherCode}.png`} alt={weatherCondition} className="DayWeather__day-img" />
        <p className="DayWeather__day-condition">{weatherCondition}</p>
        </div>
    );
};

DayWeather.propTypes = {
    day: PropTypes.string.isRequired,
    weatherData: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired
};

export default DayWeather;
