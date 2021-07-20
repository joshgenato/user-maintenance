import React, { useReducer, createContext } from 'react';
import { reducer, actions, initialState } from '../context';

export const StoreContext = createContext();

export const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, actions, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};
