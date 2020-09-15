// setup data layer
// Track basket

import React, { createContext, useContext, useReducer } from 'react';

// Data Layer
export const StateContext = createContext();

// Build A Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Using inside a component
export const useStateValue = () => useContext(StateContext);
