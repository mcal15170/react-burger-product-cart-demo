const redux = require("redux");
const createStore = redux.createStore;

const INITIAL_STATE = {
  counter: 0
};

// reduxer
const rootRedcer = (state = INITIAL_STATE, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }

  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// store
const store = createStore(rootRedcer);

// provider or subscription
store.subscribe(() => {
  console.log("[subscribe]", store.getState());
});

// dispatchaction
store.dispatch({
  type: "INC_COUNTER",
  value: 1
});
store.dispatch({
  type: "ADD_COUNTER",
  value: 10
});
