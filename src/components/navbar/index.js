import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeHome } from '../../actions'
import { getFavoritesList } from '../../actions'
import { convertTheTemp } from '../../actions'
import { changeTheLight } from '../../actions'
import './navbar.css'

class Navbar extends Component {

    render() {
        const { getFavoritesList, openFavorites, changeHome, celsius, convertTheTemp, light, changeTheLight } = this.props
        return <div className={`navbar ${light ? null : 'dark'}`}>
            <h3 className="navbarItem">Herolo Weather Task</h3>

            <div>

            </div>

            <div className="navbarItem">
                <button className="" onClick={() => convertTheTemp(celsius)}>{celsius ? '°C' : '°F'}</button>
                <button className={light ? 'dark' : 'light'} onClick={() => changeTheLight(light)}>{light ? 'light' : 'dark'}</button>
                <button className={openFavorites ? "" : "mark"} onClick={() => changeHome()}>Home</button>
                <button className={openFavorites ? "mark" : ""} onClick={() => getFavoritesList()}>Favorites</button>
            </div>
        </div>
    }
}

export default connect(state => ({
    openFavorites: state.openFavorites,
    celsius: state.celsius,
    light: state.light
}), { changeHome, getFavoritesList, convertTheTemp, changeTheLight })(Navbar)