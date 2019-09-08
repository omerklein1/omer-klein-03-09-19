import React, { Component } from 'react'
import { connect } from 'react-redux'
import './weatherTop.css'

class WeatherTop extends Component {
  constructor() {
    super()
    this.state = {
      alreadyInTheList: false
    }
  }
  componentDidMount() {
    this.alreadyInTheList()
  }
  componentDidUpdate() {
    const { currentWeather } = this.props,
      { id } = this.state
    if (id !== currentWeather.id) {
      this.alreadyInTheList()
    }
  }

  alreadyInTheList = () => {
    const { currentWeather } = this.props,
      { id } = currentWeather
    this.setState({ id: id })
    console.log(this.state.id)
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    if (favorites) {
      let alreadyInTheList = favorites.find(item => item[0] === id)
      if (alreadyInTheList) return this.setState({ alreadyInTheList: true })
      else return this.setState({ alreadyInTheList: false })
    }
  }


  addToFavorites = (id, city) => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    if (favorites) {
      let newFavorites = [...favorites]
      newFavorites.push([id, city])
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    } else {
      localStorage.setItem('favorites', JSON.stringify([[id, city]]))
    }
    this.setState({ alreadyInTheList: true })
  }

  delFromFavorites = (id) => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    const favAfterDel = favorites.filter(fav => fav[0] !== id)
    localStorage.setItem('favorites', JSON.stringify(favAfterDel))
    this.setState({ alreadyInTheList: false })
  }


  render() {
    const { currentWeather, celsius } = this.props,
      { data = [1], city, id } = currentWeather,
      { Temperature = { Metric: { Value: '' } }, WeatherIcon = '' } = data[0],
      { alreadyInTheList } = this.state


    return <div className="weatherTop">
      <div className="whetherNow">
        <img className="weatherTopPic" src={`https://www.accuweather.com/images/weathericons/${WeatherIcon}.svg`} alt="weather-pic" />
        <div>
          <p className="cityName">{city}</p>
          {celsius ? <p>{Temperature.Metric.Value}°C</p> : <p>{(Number(Temperature.Metric.Value) * 9 / 5 + 32).toFixed(1)}°F</p>}
        </div>
      </div>
      {alreadyInTheList ? <button className="weatherTopBtn" onClick={() => this.delFromFavorites(id, city)}>Delete from favorites</button> :
        <button className="weatherTopBtn" onClick={() => this.addToFavorites(id, city)}>Add to favorites</button>}
    </div>
  }
}

export default connect(state => ({
  currentWeather: state.currentWeather,
  celsius: state.celsius
}), {})(WeatherTop)

