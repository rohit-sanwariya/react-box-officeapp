import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import apiGet from '../Misc/Config';
//https://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=cast
const ShowPage = () => {
    const [result, setResult] = useState(null);
    const {id} = useParams();
    useEffect( () =>{
     apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`).then((data)=>setResult(data));
    },[id]);
    console.log(result);
    return (
        <div>
        
        </div>
    )
}

export default ShowPage
