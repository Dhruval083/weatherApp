import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DayWeather from '../DayWeather';
import MainWeather from '../MainWeather';
import getDayArray from '../api/getDayArray';
import './WeatherWrapper.scss';



class WeatherWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            weatherAt12 : []
        }
    }

    componentWillMount(){
        const dayWeather = getDayArray(this.props.weatherData);
        this.setState({weatherAt12: dayWeather.slice(0, 1)[0].weather[0].main});
    }
    
    setMainWeather = (weatherAt12) => {
        this.setState({ weatherAt12 });
    }

    getWeatherDays = (forcastWeatherData) => {
        return forcastWeatherData.map(({ date, weather }) =>
            <DayWeather day={date} weatherData={weather} key={date} onClick={this.setMainWeather} />
        );
    }

    render() {
        const { weatherData } = this.props;
        const { weatherAt12 } = this.state;
        const dayWeather = getDayArray(weatherData);
        const forcastWeatherData = dayWeather.slice(0, 5);
        const weatherDays = this.getWeatherDays(forcastWeatherData);
        const mainWeather = weatherAt12 || null;

        return (
            <>
            {mainWeather && <MainWeather mainWeather={mainWeather} />}
            <div className="WeatherWrapper">
            { weatherDays }
            </div>
            </>
        );
    }
};

WeatherWrapper.propTypes = {
    weatherData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default WeatherWrapper;
