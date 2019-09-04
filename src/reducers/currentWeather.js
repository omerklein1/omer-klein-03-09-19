export default (
    state = {data: [{
    "LocalObservationDateTime": "2019-09-03T23:50:00+03:00",
    "EpochTime": 1567543800,
    "WeatherText": "Mostly clear",
    "WeatherIcon": 34,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": false,
    "Temperature": {
      "Metric": {
        "Value": 26,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 79,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
  }], city: "Tel Aviv", id: '215854' }, data) => {
    switch (data.type) {
        case 'CURRENT_WEATHER_READER':
            return data.payload;
    
            case 'CURRENT_WEATHER_ERROR':
                return data.payload;

        default:
            return state;
    };
}