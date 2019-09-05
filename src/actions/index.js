
// export const gatDataList = () => async dispatch => {
//     axios.get('https://omerstore.herokuapp.com/products')
//         .then(res => {
//             debugger
//             dispatch({
//                 type: 'DATA_READER',
//                 payload: res.data
//             })
//         })
//         .catch(error => {
//             debugger
//             dispatch({ payload: error.message, type: 'DATA_ERROR' })}
//         );
// }
const apikey = 'A3oFXg6338nmKAcmr03x4TAv8ZMrfI79',
    webSite = 'http://dataservice.accuweather.com'


export const getTheCurrentWeather = (cityId, name) => async dispatch => {
    fetch(`${webSite}/currentconditions/v1/${cityId}?apikey=${apikey}&language=en-us&details=false`)
        .then(res => res.json())
        .then(res=> {
            dispatch({
                type: 'CURRENT_WEATHER_READER',
                payload: { data: res, city: name, id: cityId }
            })
            return { data: res, city: name, id: cityId }
        })
        .catch(error => {
            dispatch({ payload: error.message, type: 'CURRENT_WEATHER_ERROR' })
        }
        );
    console.log('im here')
}

export const getFiveDays = (cityId) => async dispatch => {
    fetch(`${webSite}/forecasts/v1/daily/5day/${cityId}?apikey=${apikey}&language=en-us&details=false&metric=true`)
        .then(res => res.json())
        .then(res=> {
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

export const changeHome = (openFavorites) => dispatch => {
    dispatch({
        type: 'CHANGE_HOME_STATE',
        payload: false
    })
}

export const getFavoritesList = (openFavorites) => async dispatch => {
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

