import React, { Component } from 'react'
import { connect } from 'react-redux'
import { apikey, webSite } from '../../../config'
import axios from 'axios'
import './favoriteItem.css'

class FavoriteItem extends Component {
    constructor() {
        super()
        this.state = {
            currentWeather: []
        }
    }

    componentDidMount() {
        const { favorite } = this.props,
            id = favorite[0], name = favorite[1]
        this.getTheCurrentWeather(id, name);
    }



    getTheCurrentWeather = (cityId, name) => {
        axios.get(`${webSite}/currentconditions/v1/${cityId}?apikey=${apikey}&language=en-us&details=false`)
            .then(res => {
                this.setState({ currentWeather: res.data[0] })
            })
            .catch(error => {
                console.log(error.message)
            }
            );
    }

    render() {
        const { currentWeather } = this.state,
            { favorite, getWeatherByCityId, celsius } = this.props,
            id = favorite[0], name = favorite[1],
            { Temperature, WeatherText } = currentWeather

        return <div className="favItem" id={id} onClick={() => getWeatherByCityId(id, name)}>
            <div className="favCity">
                <p>{name}</p>
                {celsius ? <p>{Temperature ? Temperature.Metric.Value : 'טוען'}°C</p> : <p>{(Number(Temperature.Metric.Value) * 9 / 5 + 32).toFixed(1)}°F</p>}
            </div>
            <p className="favText">{WeatherText}</p>
        </div>
    }
}

export default connect(state => ({
    celsius: state.celsius,
}), {})(FavoriteItem)

