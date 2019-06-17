import React, { useState,useContext } from "react";
import studContext from "../../context/studContext";

const StudForm = () => {
  const [stud, setStud] = useState({ fName: "", lName: "" });
  const context=useContext(studContext)

  const onChangeHandller = event => {
    setStud({ ...stud, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    if (stud.fName.trim() === "" || stud.lName.trim() === "") return;
    const newStud = {
      firestName: stud.fName,
      lastName: stud.lName
    };

    context.addStudent(newStud);
    setStud({ fName: "", lName: "" });
  };
  return (
    <div className="col-md-4">
      <form onSubmit={onSubmit}>
        <h3 className="">Add Student</h3>
        <input
          className="form-control"
          type="text"
          onChange={onChangeHandller}
          placeholder="Enter Name"
          name="fName"
          value={stud.fName}
        />
        <input
          className="form-control"
          type="text"
          onChange={onChangeHandller}
          placeholder="Enter SurName"
          name="lName"
          value={stud.lName}
        />
        <button className="btn btn-raised btn-info">Save</button>
      </form>
    </div>
  );
};
export default StudForm;
