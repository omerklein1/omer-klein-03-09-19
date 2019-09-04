import React, { Component } from 'react'
import './search.css'

class Search extends Component {
    constructor() {
        super()

        this.state = {
            // apikey: 'yxA1s4JrJ2XJWo2YOcdUfqOY7Wi7Mk8y',
            webSite: 'http://dataservice.accuweather.com'
        }
    }

    searchCity = (e) => {
        const text = e.target.value,
            { apikey, webSite } = this.state
        fetch(`${webSite}/locations/v1/cities/autocomplete?apikey=${apikey}&q=${text}&language=en-us`)
            .then(res => {
                this.setState({ searchOptions: { ...res.data } })
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
            <input className="search" onChange={this.searchCity} type="search" placeholder="Search By City Name" />
            {searchOptions ? <div className="searchList">
            {searchOptions ? searchOptions.map(city=> <li key={city.Key} onClick={/* getWeatherByCityId(city.Key, city.LocalizedName) */()=>console.log(city.Key)}>{city.LocalizedName}</li>) : null}
            </div> : null}
        </div>
    }
}

export default Search

// const searchOptions = [
//     {
//       "Version": 1,
//       "Key": "208971",
//       "Type": "City",
//       "Rank": 10,
//       "LocalizedName": "Jakarta",
//       "Country": {
//         "ID": "ID",
//         "LocalizedName": "Indonesia"
//       },
//       "AdministrativeArea": {
//         "ID": "JK",
//         "LocalizedName": "Jakarta"
//       }
//     },
//     {
//       "Version": 1,
//       "Key": "106570",
//       "Type": "City",
//       "Rank": 11,
//       "LocalizedName": "Jinan",
//       "Country": {
//         "ID": "CN",
//         "LocalizedName": "China"
//       },
//       "AdministrativeArea": {
//         "ID": "SD",
//         "LocalizedName": "Shandong"
//       }
//     },
//     {
//       "Version": 1,
//       "Key": "205617",
//       "Type": "City",
//       "Rank": 11,
//       "LocalizedName": "Jaipur",
//       "Country": {
//         "ID": "IN",
//         "LocalizedName": "India"
//       },
//       "AdministrativeArea": {
//         "ID": "RJ",
//         "LocalizedName": "Rajasthan"
//       }
//     },
//     {
//       "Version": 1,
//       "Key": "305448",
//       "Type": "City",
//       "Rank": 11,
//       "LocalizedName": "Johannesburg",
//       "Country": {
//         "ID": "ZA",
//         "LocalizedName": "South Africa"
//       },
//       "AdministrativeArea": {
//         "ID": "GT",
//         "LocalizedName": "Gauteng"
//       }
//     },
//     {
//       "Version": 1,
//       "Key": "58189",
//       "Type": "City",
//       "Rank": 13,
//       "LocalizedName": "Jiangmen",
//       "Country": {
//         "ID": "CN",
//         "LocalizedName": "China"
//       },
//       "AdministrativeArea": {
//         "ID": "GD",
//         "LocalizedName": "Guangdong"
//       }
//     },
//     {
//       "Version": 1,
//       "Key": "58190",
//       "Type": "City",
//       "Rank": 13,
//       "LocalizedName": "Jieyang",
//       "Country": {
//         "ID": "CN",
//         "LocalizedName": "China"
//       },
//       "AdministrativeArea": {
//         "ID": "GD",
//         "LocalizedName": "Guangdong"
//       }
//     },
//     {
//       "Version": 1,
//       "Key": "59061",
//       "Type": "City",
//       "Rank": 13,
//       "LocalizedName": "Jiaozuo",
//       "Country": {
//         "ID": "CN",
//         "LocalizedName": "China"
//       },
//       "AdministrativeArea": {
//         "ID": "HA",
//         "LocalizedName": "Henan"
//       }
//     },
//     {
//       "Version": 1,
//       "Key": "59269",
//       "Type": "City",
//       "Rank": 13,
//       "LocalizedName": "Jingzhou",
//       "Country": {
//         "ID": "CN",
//         "LocalizedName": "China"
//       },
//       "AdministrativeArea": {
//         "ID": "HB",
//         "LocalizedName": "Hubei"
//       }
//     },
//     {
//       "Version": 1,
//       "Key": "61618",
//       "Type": "City",
//       "Rank": 13,
//       "LocalizedName": "Jiaxing",
//       "Country": {
//         "ID": "CN",
//         "LocalizedName": "China"
//       },
//       "AdministrativeArea": {
//         "ID": "ZJ",
//         "LocalizedName": "Zhejiang"
//       }
//     },
//     {
//       "Version": 1,
//       "Key": "61619",
//       "Type": "City",
//       "Rank": 13,
//       "LocalizedName": "Jinhua",
//       "Country": {
//         "ID": "CN",
//         "LocalizedName": "China"
//       },
//       "AdministrativeArea": {
//         "ID": "ZJ",
//         "LocalizedName": "Zhejiang"
//       }
//     }
//   ]