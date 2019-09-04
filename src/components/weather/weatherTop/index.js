import React, { Component } from 'react'
import { connect } from 'react-redux'
import './weatherTop.css'

class WeatherTop extends Component {

  addToFavorites = (id, city) => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    console.log(favorites)
    if (favorites) {
        let alreadyInTheList = favorites.find(item => item[0] === id)
        if (alreadyInTheList) return alert(`${city} already In The List!`);
        let newFavorites = [...favorites]
        newFavorites.push([id, city])
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
    } else {
        localStorage.setItem('favorites', JSON.stringify([[id, city]]))
    }
}


  render() {
    const { currentWeather } = this.props,
      { data, city, id } = currentWeather,
      { Temperature } = data[0]
     

return  <div className="weatherTop">
          <div className="whetherNow">
            <img className="weatherTopPic" src="http://weather.ynet.co.il/fb/fb.jpg" alt="weather-pic" />
            <div><p className="cityName">{city}</p><p>{Temperature.Metric.Value}°C</p></div>
          </div>
          <button className="weatherTopBtn" onClick={()=>this.addToFavorites(id, city)}>Add to favorites</button>
        </div>
  }
}

export default connect(state => ({
  currentWeather: state.currentWeather
}), { })(WeatherTop)

