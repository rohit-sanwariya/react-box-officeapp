import {useReducer,useEffect, useState} from 'react'

const showsReducer =(prevSate,action)=>{

    switch (action.type) {
        case "ADD":{
            return [...prevSate,action.showId]
        }
        case "REMOVE":{
            return prevSate.filter((showId)=>showId!==action.showId)
        }    
            
    
        default:
         return    prevSate;
    }

}
const usePersitedReducer = (reducer,initialState,key)=>{
    const [state,dispatcher] = useReducer(reducer,initialState,(initial)=>{
        const persited = localStorage.getItem(key);
        return persited ? JSON.parse(persited) : initial;
    });
useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(state));

},[state,key]);
return [state,dispatcher];
}


export const useShow = (key='shows') =>{
    return usePersitedReducer(showsReducer,[],key)
}


export const useLastQuery = (key = 'lastQuery') => {
    const [input, setInput] = useState(()=>{
        const persited = sessionStorage.getItem(key);
        return persited ? JSON.parse(persited) : " ";
    });

    const setPersistedInput =(newState) =>{
        setInput(newState);
        sessionStorage.setItem(key,JSON.stringify(newState))
    }
    return [input,setPersistedInput]
}