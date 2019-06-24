const isJsonValid = res =>
    res &&
    res.city &&
    typeof res.city.name !== 'undefined' &&
    typeof res.city.country !== 'undefined' &&
    res.list &&
    res.list.length;

export default isJsonValid;
