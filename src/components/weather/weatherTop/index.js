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
    const { currentWeather } = this.props,
      { id } = currentWeather
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    if (favorites) {
      let alreadyInTheList = favorites.find(item => item[0] === id)
      if (alreadyInTheList) return this.setState({ alreadyInTheList: true })
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
    this.setState({alreadyInTheList: true})
  }

  delFromFavorites = (id) => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    const favAfterDel = favorites.filter(fav => fav[0] !== id)
    localStorage.setItem('favorites', JSON.stringify(favAfterDel))
    this.setState({alreadyInTheList: false})
  }


  render() {
    const { currentWeather } = this.props,
      { data, city, id } = currentWeather,
      { Temperature } = data[0],
      { alreadyInTheList } = this.state


    return <div className="weatherTop">
      <div className="whetherNow">
        <img className="weatherTopPic" src="http://weather.ynet.co.il/fb/fb.jpg" alt="weather-pic" />
        <div><p className="cityName">{city}</p><p>{Temperature.Metric.Value}°C</p></div>
      </div>
      {alreadyInTheList? <button className="weatherTopBtn" onClick={() => this.delFromFavorites(id, city)}>Delete from favorites</button> :
      <button className="weatherTopBtn" onClick={() => this.addToFavorites(id, city)}>Add to favorites</button>}
        </div>
  }
}

export default connect(state => ({
  currentWeather: state.currentWeather
}), {})(WeatherTop)

