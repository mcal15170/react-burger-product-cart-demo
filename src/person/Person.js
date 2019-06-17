import React, { Component } from "react";
import { connect } from "react-redux";
import PersonChild from "./PersonChild";
import { HideShow, DeletePerson,UpdateName } from "../action/persons/personAction";
import { bindActionCreators } from "redux";
import "./Person.css";

class Person extends Component {
  // state = {
  //   persons: [
  //     { id: 1, name: "jay", age: 19 },
  //     { id: 2, name: "prit", age: 56 },
  //     { id: 3, name: "sager", age: 26 },
  //     { id: 4, name: "ram", age: 45 },
  //     { id: 5, name: "sujit", age: 20 },
  //     { id: 6, name: "nayan", age: 19 },
  //     { id: 7, name: "lalu", age: 56 },
  //     { id: 8, name: "sanjay", age: 26 },
  //     { id: 9, name: "amir", age: 45 },
  //     { id: 10, name: "salman", age: 20 }
  //   ],
  //   status: true,
  //   btnLable: "hide"
  // };

  //   = (event, id) => {
  //   const personIndex = this.state.persons.findIndex(p => {
  //     return p.id === id;
  //   });

  //   const person = {
  //     ...this.state.persons[personIndex]
  //   };

  //   person.name = event.target.value;

  //   const persons = [...this.state.persons];
  //   persons[personIndex] = person;

  //   this.setState({ persons: persons });
  // };

  // changeListHandler = () => {
  //   this.setState({
  //     status: !this.state.status,
  //     btnLable: this.state.status ? "show" : "hide"
  //   });
  // };

  // deletePesonHandler = personINdex => {
  //   const persons = [...this.state.persons];
  //   persons.splice(personINdex, 1);
  //   this.setState({
  //     persons: persons
  //   });
  // };

  render() {
    let persons = null;
    if (this.props.status) {
      persons = (
        <div>
          {this.props.list.map((item, i) => {
            return (
              <PersonChild
                key={item.id}
                click={() => {
                  this.props.deletePesonHandler(i);
                }}
                name={item.name}
                age={item.age}
                change={event => {
                  this.props.nameChangeHandler(event, item.id);
                }}
              />
            );
          })}
        </div>
      );
    }

    let classes = [];

    if (this.props.list.length >= 0 && this.props.list.length < 6) {
      classes.push("lower");
    }
    if (this.props.list.length >= 6 && this.props.list.length < 10) {
      classes.push("midum");
    }

    if (this.props.list.length >= 10) {
      classes.push("strong");
    }
    return (
      <div>
        <h2>List Of Person</h2>
        <p className={classes}>List Satus based on {this.props.list.length}</p>
        <button
          style={{
            backgroundColor: this.props.status ? "green" : "red",
            color: "white",
            border: this.props.status ? "1px solid green" : "1px solid red"
          }}
          onClick={this.props.onHideShowList}
        >
          {this.props.btnLable}
        </button>
        {persons}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.person.persons,
    status: state.person.status,
    btnLable: state.person.btnLable
  };
};
const mapDispatchTPProps = dispatch => {
  return bindActionCreators(
    {
      onHideShowList: HideShow,
      deletePesonHandler: DeletePerson,
      nameChangeHandler:UpdateName
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchTPProps
)(Person);
