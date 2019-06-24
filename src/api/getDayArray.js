/* Get the date part of the date-time string */
const getDate = item => item.dt_txt.substring(0, 10);

/* Reduce the weather list to an object containing items for each day */
const weatherDataToDays = (previous, weatherItem) => {
    const weatherDate = getDate(weatherItem);
    const weatherItemsForCurrentDay = previous[weatherDate] || [];

    return {
        ...previous,
        [weatherDate]: [...weatherItemsForCurrentDay, weatherItem]
    };
};

/* Convert the weather list into an array of objects containing the items for each day */
const getDayArray = (weatherData) => {
    const dates = weatherData.map(getDate);
    const uniqueDates = Array.from(new Set(dates));
    const dayData = weatherData.reduce(weatherDataToDays, {});

    return uniqueDates.map(weatherDate => ({
        date: weatherDate,
        weather: dayData[weatherDate]
    }));
};

export default getDayArray;
