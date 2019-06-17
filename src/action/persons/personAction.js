import { TYPE_HIDE_SHOW_LIST,DELETE_PERSON,UPDATE_NAME } from "../../constants/actionType";
export const HideShow = () => {
  return {
    type: TYPE_HIDE_SHOW_LIST,
    payLoad: null
  };
};

export const DeletePerson = (id) => {
    return {
      type: DELETE_PERSON,
      payLoad: id
    };
  };


  export const UpdateName = (event,id) => {
    return {
      type: UPDATE_NAME,
      payLoad:{
          event,id
      } 
    };
  };