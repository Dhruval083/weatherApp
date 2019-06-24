import React from 'react';
import PropTypes from 'prop-types';

import DayWeather from '../DayWeather';
import getDayArray from '../api/getDayArray';
import './WeatherWrapper.scss';



const WeatherWrapper = ({ weatherData, handler }) => {
    const weatherDays = getDayArray(weatherData);
    const nextFiveDays = weatherDays.slice(0, 5);

    const weatherDayArray = nextFiveDays.map(({ date, weather }) =>
        <DayWeather day={date} weatherData={weather} key={date} onClick={handler} />
    );

    return (
        <div className="WeatherWrapper">
            { weatherDayArray }
        </div>
    );
};

WeatherWrapper.propTypes = {
    weatherData: PropTypes.arrayOf(PropTypes.object).isRequired,
    handler: PropTypes.func.isRequired
};

export default WeatherWrapper;
