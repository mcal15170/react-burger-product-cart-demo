import { createContext } from "react";

const studContext = createContext({
    stud:[],
    addStudent:(newStud)=>{}
  
});

export default studContext;
