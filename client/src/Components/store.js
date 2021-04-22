import React from 'react';

const CTX = React.createContext();

const reducer =(state, action) => {
    switch(action.type) {
     case  'RECIEVE MESSAGE' :
         return {

         }
         default:
             return state
    }
}

const Store = (props) => {


    const reducerHook = React.useReducer(reducer, initialState)

    return (
       <CTX.Provider value={}>
           {props.children}
       </CTX.Provider>
    )
}

export default Store;