import React, { useReducer } from "react";

const counterContext = React.createContext();

const initialState = {
  counter: 0,
  counter1: 0,
  counter2: 0
};

const reducer = (state, action) => {
  switch (action) {
    case "incrementCounter1":
      return {
        ...state,
        counter1: (state.counter1 += 1),
        counter: (state.counter += 1)
      };
    case "resetCounter1":
      return {
        ...state,
        counter1: (state.counter1 = 0)
      };

    case "incrementCounter2":
      return {
        ...state,
        counter2: (state.counter2 += 1),
        counter: (state.counter += 1)
      };

    case "resetCounter2":
      return {
        ...state,
        counter2: (state.counter2 = 0)
      };

    case "reset":
      return {
        ...state,
        counter: 0,
        counter1: 0,
        counter2: 0
      };

    default:
      return state;
  }
};

export const ContextProvider = (props) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const contextValue = {
    countState: count,
    countDispatch: dispatch
  };

  return (
    <counterContext.Provider value={contextValue}>
      {props.children}
    </counterContext.Provider>
  );
};

export default counterContext;
