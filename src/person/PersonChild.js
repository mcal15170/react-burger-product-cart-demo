import React, { Component } from "react";
import "./PersonChild.css";

export default class PersonChild extends Component {
  render() {
    return (
      <div className="person">
        <p>
          i am {this.props.name} and age is {this.props.age}  <button style={{float:'right'}} onClick={this.props.click}>Delete</button>
        </p>
        <input
          type="text"
          name="name"
          onChange={this.props.change}
          value={this.props.name}
        />
        <input
          type="number"
          name="age"
          onChange={this.props.change}
          value={this.props.age}
        />
      
      </div>
    );
  }
}
