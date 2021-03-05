import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import apiGet from '../Misc/Config';
//https://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=cast
const ShowPage = () => {
    const [result, setResult] = useState(null);
    const {id} = useParams();
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);
    useEffect( () =>{
        let isMounted = true;
     apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`)
     .then((data)=>{
    
        if(isMounted)
       { setResult(data)
    setIsloading(false)}
        
    }
    
     ).catch((error)=>{
         setError(error.message);
        setIsloading(false)});

        return ()=>{
            isMounted = false;
        }
     
    },[id]);


    if(isloading){
        return <div>Data is Loading .....</div>
    }
    return (
        <div>
        
        </div>
    )
}

export default ShowPage
