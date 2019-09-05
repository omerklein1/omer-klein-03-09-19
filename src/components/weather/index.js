import React, { Component } from 'react'
import Search from './search'
import FiveDays from "./fiveDays"
import WeatherTop from "./weatherTop"
import { connect } from 'react-redux'
import { getTheCurrentWeather } from "../../actions"
import { getFiveDays } from "../../actions"
import './weather.css'

class Weather extends Component {


  getWeatherByCityId = async (cityId, name) => {
    const { getTheCurrentWeather, getFiveDays } = this.props
    getTheCurrentWeather(cityId, name)
    getFiveDays(cityId)
  }


  render() {
    const { currentWeather, light } = this.props,
      { data } = currentWeather,
      { WeatherText } = data[0]

    return <>
      <Search getWeatherByCityId={this.getWeatherByCityId} />
      <div className={`weather ${light ? null : 'dark'}`}>
        <WeatherTop />
        <h1>{WeatherText}</h1>
        <FiveDays />
      </div>
    </>
  }
}

export default connect(state => ({
  currentWeather: state.currentWeather,
  fiveDays: state.fiveDays,
  light: state.light
}), { getTheCurrentWeather, getFiveDays })(Weather)

