import React, { Component } from 'react';

import ErrorWrapper from './ErrorWrapper';
import SearchWrapper from './SearchWrapper';
import WeatherWrapper from './WeatherWrapper';
import MainWeather from './MainWeather';
import getCityWeather from './api/getCityWeather';
import getDayArray from './api/getDayArray';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityCountry: '',
      error: '',
      searchText: '',
      response: {},
      showError: false,
      weatherAtNoon: []
    };
  }

  componentDidMount() {
    this.fetchWeatherData('Singapore, SG');
  }

  onChange = (event) => {
    let code = (event.keyCode ? event.keyCode : event.which);
    if(code === 13) {
      this.fetchWeatherData(this.state.searchText);
    }
    this.setState({ showError: false, searchText: event.target.value });
  }

  onClick = (event) => {
    this.fetchWeatherData(this.state.searchText);
    event.preventDefault();
  }

  fetchWeatherData(location) {
    getCityWeather(location).then((response) => {
      const cityCountry = `${response.city.name}, ${response.city.country}`;
      const dayWeather = getDayArray(response.list);
      const weatherAtNoon= dayWeather.slice(0, 1)[0].weather[0].main;
      this.setState({
        cityCountry,
        error: '',
        searchText: cityCountry,
        response,
        showError: false,
        weatherAtNoon
      });
    }).catch((error) => {
      this.setState({
        cityCountry: '',
        error: error.message,
        response: {},
        showError: true
      });
    });
  }

  setMainWeather = (weatherAtNoon) => {
    this.setState({ weatherAtNoon });
  }

  render() {
    const { onClick, onChange } = this;
    const { error, searchText, response, showError, weatherAtNoon } = this.state;
    const weatherData = response.list || null;

    return (
      <div className="WeatherApp">
        <SearchWrapper {...{ onClick, onChange, searchText }} />
        { weatherData ? <MainWeather mainWeather={weatherAtNoon} /> : (!showError && 'Loading...')}
        { showError && <ErrorWrapper message={error} /> }
        { weatherData && <WeatherWrapper weatherData={weatherData} handler={this.setMainWeather} /> }
      </div>
    );
  }
}

export default App;
