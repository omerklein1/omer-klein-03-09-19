import React, { Component } from 'react'
import Weather from './weather'
import Favorites from './favorites'
import Navbar from './navbar'
import './components.css'

class Components extends Component {
    constructor() {
        super()
        this.state = {
               // apikey: 'yxA1s4JrJ2XJWo2YOcdUfqOY7Wi7Mk8y',
               webSite: 'http://dataservice.accuweather.com',
            openFavorites: false
        }
    }

    getTheCurrentWeather = (cityId, name) => {
        const { apikey, webSite } = this.state
        fetch(`${webSite}/currentconditions/v1/${cityId}?apikey=${apikey}&language=en-us&details=false`)
            .then(res => {
                return {data: res.data, city: name, id: cityId}
            })
            .catch(error => {
                console.log(error)
            }
            );
    }

    getFavoritesList = () => {
        const favoritesList = localStorage.getItem("favorites")
        console.log(favoritesList)
        this.setState({favoritesList: JSON.parse(favoritesList), openFavorites: true})
    }

    addToFavorites = (id,city) => {
        // const favorites = JSON.parse(localStorage.getItem('favorites'))
        // if (favorites) {
        //     let newFavorites
        //     newFavorites.push([id,city])
        //     localStorage.setItem('favorites', JSON.stringify(newFavorites))
        // } else {
        //     localStorage.setItem('favorites', "[id]")
        // }
    }

    render() {
        const { openFavorites, favoritesList } = this.state
        return <>
            <Navbar getFavoritesList={this.getFavoritesList} />
            <Weather addToFavorites={this.addToFavorites} getTheCurrentWeather={this.getTheCurrentWeather}/>
            {openFavorites ? favoritesList.map(fav=><Favorites favorite={this.getTheCurrentWeather(fav)} />) : null}
        </>
    }
}

export default Components