import React, { Component } from 'react'
import Weather from './weather'
import Favorites from './favorites'
import Navbar from './navbar'
import { connect } from 'react-redux'
import { changeHome } from '../actions'
import './components.css'

class Components extends Component {
   
    render() {
        const { openFavorites } = this.props
        return <>
            <Navbar />
            {openFavorites ? <Favorites />
                : <Weather addToFavorites={() => this.addToFavorites} />}
        </>
    }
}

export default connect(state => ({
    openFavorites: state.openFavorites,
    fiveDays: state.fiveDays
}), { changeHome })(Components)
