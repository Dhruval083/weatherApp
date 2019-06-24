import isJsonValid from './isJsonValid';

const apiURL = 'https://api.openweathermap.org/data/2.5/forecast';
const key = 'a43126a767ec00aaf0f32940224fa957';

const requestHeader = {
    method: 'GET',
    headers: {
        Accept: 'application/json'
    },
    mode: 'cors'
};

const getCityWeather = city =>
    fetch(`${apiURL}?q=${city}&APPID=${key}&units=metric`, requestHeader)
        .then(res => res.json())
        .then((res) => {
        if (!isJsonValid(res)) {
            throw new Error('Weather Data not found!!!');
        }

        return res;
    });

export default getCityWeather;
