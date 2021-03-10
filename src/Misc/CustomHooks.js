import {useReducer,useEffect} from 'react'

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
