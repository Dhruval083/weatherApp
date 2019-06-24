import React, { Component } from 'react';

import ErrorWrapper from './ErrorWrapper';
import SearchWrapper from './SearchWrapper';
import WeatherWrapper from './WeatherWrapper';
import getCityWeather from './api/getCityWeather';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityCountry: '',
      error: '',
      searchText: '',
      response: {},
      showError: false
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
      this.setState({
        cityCountry,
        error: '',
        searchText: cityCountry,
        response,
        showError: false
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

  render() {
    const { onClick, onChange } = this;
    const { error, searchText, response, showError } = this.state;
    const weatherData = response.list || null;

    return (
      <div className="WeatherApp">
        <SearchWrapper {...{ onClick, onChange, searchText }} />
        { showError && <ErrorWrapper message={error} /> }
        { weatherData && <WeatherWrapper weatherData={weatherData} /> }
      </div>
    );
  }
}

export default App;
