import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    
    

    getTheCurrentWeather =  (cityId, name) => {
        const apikey = 'A3oFXg6338nmKAcmr03x4TAv8ZMrfI79',
            webSite = 'http://dataservice.accuweather.com'
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
         { favorite } = this.props,
        id = favorite[0], name = favorite[1],
        { Temperature, WeatherText } = currentWeather
        console.log(currentWeather)
        return <>
         {<div className="favItem" id={id}>
            <div className="favCity">
                <p>{name}</p>
                <p>{Temperature? Temperature.Metric.Value : 'טוען'}°C</p>
            </div>
            <p className="favText">{WeatherText}</p>
        </div>}
        </>
    }
}

export default connect(state => ({
}), {  })(FavoriteItem)

