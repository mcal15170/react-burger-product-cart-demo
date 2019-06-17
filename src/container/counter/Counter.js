import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControll from "./CounterControll";
import CounterOutput from "./CounterOutput";
import CounterBrothor from "./CounterBrothor";
import {
  Increment,
  Decremnent,
  AddFive,
  RemoveFive
} from "../../action/counterAction";
import { bindActionCreators } from "redux";

class Counter extends Component {
  // state = {
  //   counter: 0
  // };

  // counterChangerHandler = (type, value) => {
  //   switch (type) {
  //     case "TYPE_INC":
  //       this.setState(prevSate => {
  //         return { counter: prevSate.counter + value };
  //       });
  //       break;

  //     case "TYPE_DESC":
  //       this.setState(prevSate => {
  //         return { counter: prevSate.counter - value };
  //       });
  //       break;

  //     case "ADD_INC":
  //       this.setState(prevSate => {
  //         return { counter: prevSate.counter + value };
  //       });
  //       break;

  //     case "SUB_DESC":
  //       this.setState(prevSate => {
  //         return { counter: prevSate.counter - value };
  //       });
  //       break;
  //   }
  // };
  render() {
    return (
      <React.Fragment>
        <div>
          <CounterOutput value={this.props.ctr} />
          <CounterControll
            label={"Increment"}
            clicked={() => this.props.onIncrementCounter(1)}
          />
          <CounterControll
            label={"Decrement"}
            clicked={this.props.ondecrementCounter}
          />
          <CounterControll
            label={"Add 5"}
            clicked={this.props.onAddIncrement}
          />
          <CounterControll
            label={"Remove 5"}
            clicked={this.props.onSubDecrement}
          />
        </div>
        <div>
          <CounterBrothor/>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.count.counter
  };
};

const mapDispatchTPProps = dispatch => {
  return bindActionCreators(
    {
      onIncrementCounter: Increment,
      ondecrementCounter: Decremnent,
      onAddIncrement: AddFive,
      onSubDecrement: RemoveFive
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchTPProps
)(Counter);
