import React, { createContext, useReducer, useContext } from 'react';
const AppContext = createContext({
  todos: []
})
const {Provider} = AppContext;

const reducer = (state, action) => {
  switch(action.type) {
    case "SET_TODOS":
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state;
  }
}

const AppProvider = ({ value =[], ...props}) => {
  const [state, dispatch] = useReducer(reducer, {
    todos: []
  })
  return <Provider value={[state, dispatch]} {...props} />;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export {AppProvider, useAppContext}