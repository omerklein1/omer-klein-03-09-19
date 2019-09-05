import React, { Component } from 'react'
import FavoriteItem from './favoriteItem'
import { connect } from 'react-redux'
import axios from 'axios'
import './favorites.css'

class Favorites extends Component {

    getTheCurrentWeather =  (cityId, name) => {
        const apikey = 'A3oFXg6338nmKAcmr03x4TAv8ZMrfI79',
            webSite = 'http://dataservice.accuweather.com'
         axios.get(`${webSite}/currentconditions/v1/${cityId}?apikey=${apikey}&language=en-us&details=false`)
            .then(res => {
                return 
                // this.setState({ currentWeather: res.data[0] })
            })
            .catch(error => {
               console.log(error.message)
            }
            );
    }

    render() {
        const { favoritesList } = this.props

        return <div className="favorites">

            {favoritesList.map(favorite => <FavoriteItem favorite={favorite} />)}

        </div>
    }
}

export default connect(state => ({
    favoritesList: state.favoritesList
}), {})(Favorites)