import React, { Component } from 'react'
import './favorites.css'

class Favorites extends Component {




    render() {
        const { favorite } = this.props,
        {data, city, id} = favorite,
        { Temperature, WeatherText } = data[0]
        return <div>
            <p>{city}</p>
            <p>{Temperature.Metric.Value}°C</p>
            <p>{WeatherText}</p>
        </div>
    }
}

export default Favorites