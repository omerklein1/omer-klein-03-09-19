import React, { Component } from 'react'
import { apikey, webSite } from '../../../config'
import './search.css'

class Search extends Component {
  constructor() {
    super()

    this.state = {
    }
  }

  searchCity = async (e) => {
    let text = e.target.value
    text = text.replace(/[^\x00-\x7F]/ig, '');
    fetch(`${webSite}/locations/v1/cities/autocomplete?apikey=${apikey}&q=${text}&language=en-us`)
      .then(res => res.json())
      .then(res => {
        this.setState({ searchOptions: res })
      })
      .catch(error => {
        console.log(error)
      }
      );
  }


  render() {
    const { searchOptions } = this.state,
      { getWeatherByCityId } = this.props
    return <div>
      <input className="search" onChange={this.searchCity} type="search" placeholder="Search By City Name" pattern="[A-Za-z]" title="Only english letters" />
      {searchOptions ? <div className="searchList">
        {searchOptions ? searchOptions.map(city => <li key={city.Key} onClick={() => { getWeatherByCityId(city.Key, city.LocalizedName); document.querySelector('input').value = ""; this.setState({ searchOptions: '' }) }}>{city.LocalizedName}</li>) : null}
      </div> : null}
    </div>
  }
}

export default Search