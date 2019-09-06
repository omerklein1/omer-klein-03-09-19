import React, { Component } from 'react'
import Search from './search'
import FiveDays from "./fiveDays"
import WeatherTop from "./weatherTop"
import { connect } from 'react-redux'
import { getTheCurrentWeather } from "../../actions"
import { getFiveDays } from "../../actions"
import './weather.css'

class Weather extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.getWeatherByCityId('215854', "Tel Aviv")
  }

  getWeatherByCityId = async (cityId, name) => {
    try {
      const { getTheCurrentWeather, getFiveDays } = this.props
      await getTheCurrentWeather(cityId, name)
      await getFiveDays(cityId)
    } catch (e) {
      console.warn(e);
    }

  }


  render() {

    const { currentWeather, light } = this.props,
      { data = [1] } = currentWeather,
      { WeatherText = '' } = data[0]

    console.log(currentWeather)
    return currentWeather ? <>
      <Search getWeatherByCityId={this.getWeatherByCityId} />
      <div className={`weather ${light ? null : 'dark'}`}>
        <WeatherTop />
        <h1>{WeatherText}</h1>
        <FiveDays />
      </div>
    </> : 'טוען'

  }
}

export default connect(state => ({
  currentWeather: state.currentWeather,
  fiveDays: state.fiveDays,
  light: state.light
}), { getTheCurrentWeather, getFiveDays })(Weather)

