import React, { Component } from 'react'
import { connect } from 'react-redux'
import './favoriteItem.css'

class FavoriteItem extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    getTheCurrentWeather = async (cityId, name) => {
        const apikey = 'yxA1s4JrJ2XJWo2YOcdUfqOY7Wi7Mk8y',
            webSite = 'http://dataservice.accuweather.com'
        await fetch(`${webSite}/currentconditions/v1/${cityId}?apikey=${apikey}&language=en-us&details=false`)
            .then(res => res.json())
            .then(res => {
                this.setState({ currentWeather: { data: res, city: name, id: cityId } })
            })
            .catch(error => {
               console.log(error.message)
            }
            );
    }

    render() {
        const { favorite } = this.props
        // this.getTheCurrentWeather(favorite[0], favorite[1])
        
        const { currentWeather } = this.state
        console.log(favorite)
            // const { data, city, id } = currentWeather,
            // { Temperature, WeatherText } = data[0]

        return <> {/* <div className="favItem" id={id}>
            <div className="favCity">
                <p>{city}</p>
                <p>{Temperature.Metric.Value}°C</p>
            </div>
            <p className="favText">{WeatherText}</p>
        </div> */}
        </>
    }
}

export default connect(state => ({
}), {  })(FavoriteItem)

