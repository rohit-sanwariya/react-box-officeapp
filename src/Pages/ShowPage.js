import React,{useEffect,useReducer} from 'react'
import {useParams} from 'react-router-dom';
import Casts from '../Components/Shows/Casts';
import Details from '../Components/Shows/Details';
import Seasons from '../Components/Shows/Seasons';
import ShowMainData from '../Components/Shows/ShowMainData';

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
    const result = state.result;

    useEffect( () =>{
   let isMounted = true;

   if(isMounted){
      fun().then((data)=>{
        dispatcher({
            type:"FETCH_SUCCESS",result:data
        })
        
        }).catch((err)=>{
            dispatcher({type:"FETCH_FAILED",error:err.message})
           })
     

}

        return ()=>{
            isMounted = false;
        }
     
    },[id]);


    if(state.isloading){
        return <div>Data is Loading .....</div>
    }
    else if(state.error){
        return <div>error</div>
    }
    return (
        <div>
        <ShowMainData image={state.result.image.medium?state.result.image.medium:state.result.image.original}
        rating ={ result.rating}
        name = { result.name}
        summary = {result.summary}
        tags = {result.genres}
        />
        
        <div>
            <h2>Details</h2>
        <Details status={result.status}
        network = {result.network}
        premiered = {result.premiered}
        />
        </div>
        <div>
            <h2>Season</h2>
        <Seasons seasons={result._embedded.seasons}/>
        </div>
        <div>
            <h2>Cast</h2>
        <Casts cast={result._embedded.cast}/>
        </div>
        </div>
    )
}

export default ShowPage
