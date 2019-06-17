import { ADD_STUD } from "./type";

const addStud = (student, state) => {
  const newStud = [...state.stud, student];

  return {
    ...state,
    stud: newStud
  };
};

export default (state, action) => {
  switch (action.type) {
    case ADD_STUD:
      return addStud(action.payLoad, state);
    default:
      return state;
  }
};
