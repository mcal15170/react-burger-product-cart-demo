import React, { useState, useReducer } from "react";
import StudForm from "./StudForm";
import StudList from "./StudList";
import NewestStud from "./NewestStud";
import studContext from "../../context/studContext";
import studReducer from "../../context/studReducer";
import { ADD_STUD } from "../../context/type";

const Student = () => {
  const Initial_State = {
    stud: [
      { firestName: "jay", lastName: "pate" },
      { firestName: "ram", lastName: "mahera" },
      { firestName: "juli", lastName: "babriya" }
    ]
  };

  const [state, dispatch] = useReducer(studReducer, Initial_State);

  const addStudent = newStud => {
    dispatch({
      type: ADD_STUD,
      payLoad: newStud
    });
  };

  return (
    <studContext.Provider value={{ stud: state.stud, addStudent }}>
      <div className="container">
        <div className="row m-5">
          <StudForm />
          <StudList />
          <NewestStud />
        </div>
      </div>
    </studContext.Provider>
  );
};
export default Student;
