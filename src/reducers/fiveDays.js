export default (
    state = {
        "Headline": {
          "EffectiveDate": "2019-09-08T02:00:00+03:00",
          "EffectiveEpochDate": 1567897200,
          "Severity": 4,
          "Text": "Expect showers late Saturday night",
          "Category": "rain",
          "EndDate": "2019-09-08T08:00:00+03:00",
          "EndEpochDate": 1567918800,
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
        },
        "DailyForecasts": [
          {
            "Date": "2019-09-04T07:00:00+03:00",
            "EpochDate": 1567569600,
            "Temperature": {
              "Minimum": {
                "Value": 25.3,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 30.1,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 3,
              "IconPhrase": "Partly sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 35,
              "IconPhrase": "Partly cloudy",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
          },
          {
            "Date": "2019-09-05T07:00:00+03:00",
            "EpochDate": 1567656000,
            "Temperature": {
              "Minimum": {
                "Value": 23.9,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 30.7,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 3,
              "IconPhrase": "Partly sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 34,
              "IconPhrase": "Mostly clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
          },
          {
            "Date": "2019-09-06T07:00:00+03:00",
            "EpochDate": 1567742400,
            "Temperature": {
              "Minimum": {
                "Value": 23.4,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 30.8,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 2,
              "IconPhrase": "Mostly sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 34,
              "IconPhrase": "Mostly clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
          },
          {
            "Date": "2019-09-07T07:00:00+03:00",
            "EpochDate": 1567828800,
            "Temperature": {
              "Minimum": {
                "Value": 25,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 30.4,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 3,
              "IconPhrase": "Partly sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 36,
              "IconPhrase": "Intermittent clouds",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Light"
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
          },
          {
            "Date": "2019-09-08T07:00:00+03:00",
            "EpochDate": 1567915200,
            "Temperature": {
              "Minimum": {
                "Value": 24.3,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 30.6,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 3,
              "IconPhrase": "Partly sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 35,
              "IconPhrase": "Partly cloudy",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
          }
        ]
      }, data) => {
    switch (data.type) {
        case 'FIVE_DAYS_READER':
            return data.payload;
    
            case 'FIVE_DAYS_ERROR':
                return data.payload;

        default:
            return state;
    };
}