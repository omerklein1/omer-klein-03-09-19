import React, { Component } from 'react'
import './navbar.css'

class Navbar extends Component {


    render() {
        const { getFavoritesList } = this.props
        return <div className="navbar">
            <h3 className="navbarItem">Herolo Weather Task</h3>
            <div className="navbarItem">
                <button>Home</button>
                <button onClick={getFavoritesList}>Favorites</button>
            </div>
        </div>
    }
}

export default Navbar