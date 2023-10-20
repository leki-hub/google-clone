import React, { createContext, useContext, useReducer } from "react";
export const stateContext = createContext()
export const SearchProvider= ({reducer, initialState, children})=>{
    return(
    <stateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </stateContext.Provider>)
}

export const UsesStateValue = ()=>useContext(stateContext)