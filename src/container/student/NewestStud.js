import React, { useEffect,useContext } from "react";
import StudCount from "./StudCount";
import studContext from "../../context/studContext";

const NewestStud = () => {
    const  context=useContext(studContext);
    const NewestStud=context.stud[context.stud.length-1];

  useEffect(() => {

    const newStudName = `${NewestStud.firestName} ${
      NewestStud.lastName
    }`;
    document.title = newStudName;
    console.log("usEffect");
    return () => {
      console.log("unMounting");
    };
  }, [NewestStud]);
  return (
    <div className="col-md-4">
      <h3>Newst Student</h3>
      <p style={{ color: "#0099ff" }}>
        <b>
          {NewestStud.firestName}&nbsp;{NewestStud.lastName}
        </b>
      </p>
      <StudCount/>
    </div>
  );
};
export default NewestStud;
