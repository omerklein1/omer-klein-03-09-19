import { combineReducers } from 'redux'
import currentWeather from './currentWeather'
import openFavorites from './openFavorites'
import favoritesList from './favoritesList'
import fiveDays from './fiveDays'
import celsius from './celsius'
import light from './light'


const allReducers = combineReducers({
    currentWeather,
    fiveDays,
    openFavorites,
    favoritesList,
    celsius,
    light
})

export default allReducers