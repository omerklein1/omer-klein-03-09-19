import React, { Component } from 'react'
import { connect } from 'react-redux'
import './fiveDays.css'

class FiveDays extends Component {
    getBG = day => { }

    render() {
        const { fiveDays, celsius } = this.props,
            { DailyForecasts } = fiveDays
        return <div className="fiveDays">
            {DailyForecasts ? DailyForecasts.map(day => <div className={`dayItem ${this.getBG(day)}`}
                key={new Date(day.Date).toDateString().slice(0, 3)}> <p> {new Date(day.Date).toDateString().slice(0, 3)}
                </p> {celsius ? <p> {day.Temperature.Minimum.Value}°C</p>
                    : <p> {(Number(day.Temperature.Minimum.Value) * 9 / 5 + 32).toFixed(1)}°F</p>}</div>) : null}
        </div>
    }
}

export default connect(state => ({
    fiveDays: state.fiveDays,
    celsius: state.celsius
}), {})(FiveDays)