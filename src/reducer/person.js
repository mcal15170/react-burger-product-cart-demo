import {
  TYPE_HIDE_SHOW_LIST,
  DELETE_PERSON,
  UPDATE_NAME
} from "../constants/actionType";

const INTIAL_STATE = {
  persons: [
    { id: 1, name: "jay", age: 19 },
    { id: 2, name: "prit", age: 56 },
    { id: 3, name: "sager", age: 26 },
    { id: 4, name: "ram", age: 45 },
    { id: 5, name: "sujit", age: 20 },
    { id: 6, name: "nayan", age: 19 },
    { id: 7, name: "lalu", age: 56 },
    { id: 8, name: "sanjay", age: 26 },
    { id: 9, name: "amir", age: 45 },
    { id: 10, name: "salman", age: 20 }
  ],
  status: true,
  btnLable: "hide"
};

const person = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case TYPE_HIDE_SHOW_LIST:
      return {
        ...state,
        status: !state.status,
        btnLable: state.status ? "show" : "hide"
      };

    case DELETE_PERSON:
      const person = [...state.persons];
      person.splice(action.payLoad, 1);
      return {
        ...state,
        persons: person
      };

    case UPDATE_NAME:
      const personIndex = state.persons.findIndex(p => {
        return p.id === action.payLoad.id;
      });

        const personById = {
          ...state.persons[personIndex]
        };
      
    //   console.log(personById);

      if (action.payLoad.event.target.name == "name") {
        personById.name = action.payLoad.event.target.value;
      }

      if (action.payLoad.event.target.name == "age") {
        personById.age = action.payLoad.event.target.value;
      }

      const allPerson = [...state.persons];

      allPerson[personIndex] = personById;
      return {
        ...state,
        persons: allPerson
      };
  }
  return state;
};

export default person;
