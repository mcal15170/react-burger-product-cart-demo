import React,{useContext} from "react";
import studContext from "../../context/studContext";

const StudList = () => {
    const context=useContext(studContext);
    console.log(context);

  return (
    <div className="col-md-4">
      <h3>Student List</h3>
      {context.stud.map((student, i) => (
        <p key={i}><b>{i}&nbsp;{student.firestName}&nbsp;{student.lastName}</b></p>
      ))}

    </div>
  );
};
export default StudList;
