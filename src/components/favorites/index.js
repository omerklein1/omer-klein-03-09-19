import React, { Component } from 'react'
import FavoriteItem from './favoriteItem'
import { connect } from 'react-redux'
import './favorites.css'

class Favorites extends Component {

    render() {
        const { favoritesList } = this.props
        return <div className="favorites">

            {favoritesList.map(fav => <FavoriteItem favorite={fav} />)}

        </div>
    }
}

export default connect(state => ({
    favoritesList: state.favoritesList
}), {})(Favorites)