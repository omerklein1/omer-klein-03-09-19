import React, { Component } from 'react'
import Search from './search'
import './weather.css'

class Weather extends Component {
    constructor() {
        super()
        this.state = {
            // apikey: 'yxA1s4JrJ2XJWo2YOcdUfqOY7Wi7Mk8y',
            webSite: 'http://dataservice.accuweather.com',
            city: "Tel Aviv",
            id: '215854'
        }
    }
    componentDidMount() {
        const { id } = this.state
// this.getWeatherByCityId(id)
    }

    getWeatherByCityId = async(cityId, name) => {
        const {getTheCurrentWeather} = this.props,
        result = await getTheCurrentWeather(cityId, name)
        const {data, city, id} = result
        this.setState({data: data, city: city, id: id})
    }


    render() {
        const { addToFavorites } = this.props,
        {city, id} = this.state,
        {DailyForecasts} = dataT,
        { Temperature, WeatherText } = dataCity[0]
        console.log(DailyForecasts)
        
        return <>
            <Search getWeatherByCityId={this.getWeatherByCityId} />
            <div className="weather">
                <div className="weatherTop">
                    <div className="whetherNow">
                        <img className="weatherTopPic" src="http://weather.ynet.co.il/fb/fb.jpg" alt="weather-pic" />
                        <div><p className="cityName">{city}</p><p>{Temperature.Metric.Value}°C</p></div>
                    </div>
                    <button className="weatherTopBtn" onClick={addToFavorites(id,city)}>Add to favorites</button>
                </div>

                <h1>{WeatherText}</h1>

                <div className="fiveDays">
                    {DailyForecasts.map(day=><div className="dayItem">
                        <p>{new Date(day.Date).toDateString().slice(0,3)}</p>
                        <p>{day.Temperature.Minimum.Value}°C</p>
                        </div>)}
                </div>
            </div>
        </>
    }
}

export default Weather
const dataCity = [
    {
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
    }
  ]

const dataT = {
    "Headline": {
      "EffectiveDate": "2019-09-07T08:00:00+03:00",
      "EffectiveEpochDate": 1567832400,
      "Severity": 4,
      "Text": "Pleasant this weekend",
      "Category": "",
      "EndDate": null,
      "EndEpochDate": null,
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2019-09-03T07:00:00+03:00",
        "EpochDate": 1567483200,
        "Temperature": {
          "Minimum": {
            "Value": 24.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 31.3,
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
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
      },
      {
        "Date": "2019-09-04T07:00:00+03:00",
        "EpochDate": 1567569600,
        "Temperature": {
          "Minimum": {
            "Value": 24.9,
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
            "Value": 23.5,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.9,
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
            "Value": 30.6,
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
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
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
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
      }
    ]
  }