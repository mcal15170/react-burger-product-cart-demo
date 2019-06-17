import React, { Component } from 'react'

export default class CounterOutput extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.value}</h2>
            </div>
        )
    }
}
