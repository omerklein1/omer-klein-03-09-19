import { combineReducers } from 'redux'
import currentWeather from './currentWeather'
import openFavorites from './openFavorites'
import favoritesList from './favoritesList'
import fiveDays from './fiveDays'


const allReducers =combineReducers({
    currentWeather,
    fiveDays,
    openFavorites,
    favoritesList
})

export default allReducers