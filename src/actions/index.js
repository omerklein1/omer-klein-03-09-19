import { apikey, webSite } from '../config'


export const getTheCurrentWeather = (cityId, name) => async dispatch => {
    fetch(`${webSite}/currentconditions/v1/${cityId}?apikey=${apikey}&language=en-us&details=false`)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'CURRENT_WEATHER_READER',
                payload: { data: res, city: name, id: cityId }
            })
        })
        .catch(error => {
            dispatch({ payload: error.message, type: 'CURRENT_WEATHER_ERROR' })
        }
        );
}

export const getFiveDays = (cityId) => async dispatch => {
    fetch(`${webSite}/forecasts/v1/daily/5day/${cityId}?apikey=${apikey}&language=en-us&details=false&metric=true`)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'FIVE_DAYS_READER',
                payload: res
            })
        })
        .catch(error => {
            dispatch({ payload: error, type: 'FIVE_DAYS_ERROR' })
        }
        );
}

export const changeHome = () => dispatch => {
    dispatch({
        type: 'CHANGE_HOME_STATE',
        payload: false
    })
}

export const getFavoritesList = () => async dispatch => {
    const favoritesList = await JSON.parse(localStorage.getItem('favorites'))
    dispatch({
        type: 'FAVORITES_LIST_READER',
        payload: favoritesList
    })
    dispatch({
        type: 'CHANGE_HOME_STATE',
        payload: true
    })
}

export const convertTheTemp = (celsius) => dispatch => {
    dispatch({
        type: 'CONVERT_DONE',
        payload: celsius
    })
}

export const changeTheLight = (light) => dispatch => {
    dispatch({
        type: 'CHANGE_THE_LIGHT',
        payload: light
    })
}

