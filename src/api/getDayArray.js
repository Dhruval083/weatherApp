const getDate = item => item.dt_txt.substring(0, 10);

const weatherDataToDays = (previous, weatherItem) => {
    const weatherDate = getDate(weatherItem);
    const weatherItemsForCurrentDay = previous[weatherDate] || [];

    return {
        ...previous,
        [weatherDate]: [...weatherItemsForCurrentDay, weatherItem]
    };
};

const getDayArray = (weatherData) => {
    console.log(weatherData);
    const dates = weatherData.map(getDate);
    const uniqueDates = Array.from(new Set(dates));
    const dayData = weatherData.reduce(weatherDataToDays, {});

    return uniqueDates.map(weatherDate => ({
        date: weatherDate,
        weather: dayData[weatherDate]
    }));
};

export default getDayArray;
