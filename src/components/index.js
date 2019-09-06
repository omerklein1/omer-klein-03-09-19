import React, { Component } from 'react'
import Weather from './weather'
import Favorites from './favorites'
import Navbar from './navbar'
import { connect } from 'react-redux'
import { getTheCurrentWeather } from "../actions"
import { getFiveDays } from "../actions"
import './components.css'

class Components extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    async componentWillMount() {
        const { getTheCurrentWeather, getFiveDays } = this.props
        try {
            await getTheCurrentWeather('215854', "Tel Aviv");
            await getFiveDays('215854');
            this.setState({ ok: true })
        }
        catch (e) { console.log(e) }
    }

    render() {
        const { openFavorites, fiveDays } = this.props

        return fiveDays ? <>
            <Navbar />
            {openFavorites ? <Favorites />
                : <Weather addToFavorites={() => this.addToFavorites} />}
        </> : 'טוען'
    }
}

export default connect(state => ({
    openFavorites: state.openFavorites,
    fiveDays: state.fiveDays
}), { getTheCurrentWeather, getFiveDays })(Components)
