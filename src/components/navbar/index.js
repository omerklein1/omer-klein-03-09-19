import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeHome } from '../../actions'
import { getFavoritesList } from '../../actions'
import './navbar.css'

class Navbar extends Component {

    render() {
        const { getFavoritesList, openFavorites, changeHome } = this.props
        return <div className="navbar">
            <h3 className="navbarItem">Herolo Weather Task</h3>
            <div className="navbarItem">
                <button onClick={()=>changeHome(openFavorites)}>Home</button>
                <button onClick={()=>getFavoritesList(openFavorites)}>Favorites</button>
            </div>
        </div>
    }
}

export default connect(state => ({
    openFavorites: state.openFavorites
}), { changeHome, getFavoritesList })(Navbar)