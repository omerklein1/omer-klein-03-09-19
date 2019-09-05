import React, { Component } from 'react'
import { connect } from 'react-redux'
import './fiveDays.css'

class FiveDays extends Component {
  
    render() {
        const { fiveDays } = this.props,
            { DailyForecasts } = fiveDays

        return <div className="fiveDays">
            {DailyForecasts ? DailyForecasts.map(day => <div className="dayItem" key={new Date(day.Date).toDateString().slice(0, 3)}>
                <p>{new Date(day.Date).toDateString().slice(0, 3)}</p>
                <p>{day.Temperature.Minimum.Value}°C</p>
            </div>) : null}
        </div>

    }
}

export default connect(state => ({
    fiveDays: state.fiveDays
}), { })(FiveDays)

