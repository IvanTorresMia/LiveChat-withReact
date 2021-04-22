import React from 'react';

export const CTX = React.createContext();

const initialState = {


    general: [
        {from: 'aaron', msg: 'hello'},
        {from: 'Ivan', msg: 'hello'},
        {from: 'Josh', msg: 'hello'}
    ],
    topic2: [
        {from: 'Ivan', msg: 'hello'},
        {from: 'Val', msg: 'hello'},
        {from: 'Josh', msg: 'hello'}
    ]
}


const reducer =(state, action) => {
    const {from, msg, topic} = action.payload

    switch(action.type) {
     case  'RECIEVE MESSAGE' :
         return {
            ...state,
            [topic] : [
                ...state[topic],
                {
                    from: from,
                    msg: msg
                }
            ]
         }
         default:
             return state
    }
}

const Store = (props) => {


    const reducerHook = React.useReducer(reducer, initialState)

    return (
       <CTX.Provider value={reducerHook}>
           {props.children}
       </CTX.Provider>
    )
}

export default Store;