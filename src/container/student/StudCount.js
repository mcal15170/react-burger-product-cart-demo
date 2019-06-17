import React,{useContext} from "react";
import studContext from "../../context/studContext";

const StudCount = () => {
    const context=useContext(studContext);
  return (
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-12">
          <p >total : {context.stud.length}</p>
        </div>
      </div>
    </div>
  );
};
export default StudCount;
