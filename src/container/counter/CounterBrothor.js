import React, { Component } from "react";
import { connect } from "react-redux";

class CounterBrothor extends Component {
  render() {
    return (
      <div>
        <hr/>
        <h2>Second Component</h2>
        <h2>{this.props.ctr}</h2>
      </div>
    );
  }
}

export default connect(
  (state)=>{return {ctr:state.count.counter}},
  (dispatch)=>{return {dispatch}}
)(CounterBrothor);
