import React, { Component } from 'react'
import FavoriteItem from './favoriteItem'
import { connect } from 'react-redux'
import { changeHome } from '../../actions'
import { getTheCurrentWeather } from '../../actions'
import { getFiveDays } from '../../actions'
import './favorites.css'

class Favorites extends Component {

    getWeatherByCityId = async (cityId, name) => {
        const { getTheCurrentWeather, getFiveDays, changeHome } = this.props
        changeHome()
        getTheCurrentWeather(cityId, name)
        getFiveDays(cityId)
    }

    render() {
        const { favoritesList, light } = this.props

        return <div className={`favorites ${light ? null : 'dark'}`}>

            {favoritesList.map(favorite => <FavoriteItem getWeatherByCityId={this.getWeatherByCityId} favorite={favorite} />)}

        </div>
    }
}

export default connect(state => ({
    favoritesList: state.favoritesList,
    light: state.light
}), { getTheCurrentWeather, getFiveDays, changeHome })(Favorites)