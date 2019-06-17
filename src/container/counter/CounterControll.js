import React, { Component } from "react";

export default class CounterControll extends Component {
  render() {
    return <button onClick={this.props.clicked}>{this.props.label}</button>;
  }
}
