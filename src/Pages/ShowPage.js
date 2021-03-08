import React,{useEffect,useReducer} from 'react'
import {useParams} from 'react-router-dom';

const initalState={result:null,isloading:true,error:null }
const reducer=(prevState,action)=>{
switch (action.type) {
    case "FETCH_SUCCESS":{
        return {...prevState,isloading:false,error:null,result:action.result}
    }
    case "FETCH_FAILED":{
        return{...prevState,isloading:false,error:action.error}
    }    
        

    default:
        return prevState;
}
}
//https://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=cast
const ShowPage = () => {
    const {id} = useParams();
    // const [result, setResult] = useState(null); 
    // const [isloading, setIsloading] = useState(true);
    // const [error, setError] = useState(null);
    const fun = async() =>{
        const data = await fetch(`https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`);
        const jdata = await data.json();
        return await jdata
      
       
    }
    const [state,dispatcher]=useReducer(reducer,initalState);

    useEffect( () =>{
   let isMounted = true;

   if(isMounted){
      fun().then((data)=>{
        dispatcher({type:"FETCH_SUCCESS",result:data})
        
        }).catch((err)=>{
            dispatcher({type:"FETCH_FAILED",error:err.message})
           })
     

}

        return ()=>{
            isMounted = false;
        }
     
    },[ id]);


    if(state.isloading){
        return <div>Data is Loading .....</div>
    }
    else if(state.error){
        return <div>error</div>
    }
    return (
        <div>
        {state.result.url}
        </div>
    )
}

export default ShowPage
