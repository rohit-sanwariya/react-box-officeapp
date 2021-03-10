import React, { useEffect, useState } from 'react'
import ManageLayout from '../Components/ManageLayout'
import ShowGrid from '../Components/Shows/ShowGrid';

import { useShow } from '../Misc/CustomHooks'

const Starred = () => {
    const [starred] = useShow();
    const [shows,setShows] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    const fun= ()=>{
        const promises = starred.map(async(showId)=>{
            return (await fetch(`https://api.tvmaze.com/shows/${showId}`)).json();
            
        })
      
        return   promises;
    }
    // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    // [{…}, {…}, {…}]
    useEffect(()=>{
        let isMounted = true
        if(starred && starred.length > 0 && isMounted){
              const promises = fun();
              
              Promise.all(promises).then((data)=>data.map(show=>({show}))).then(results => {
                 
                  setShows( results);
                  setIsLoading(false);
              }).catch((err)=>{
                    setError(err.message)
                    setIsLoading(false)})

        }
        else{
            setIsLoading(false);
        }
        return ()=>{
            isMounted = false;
        }
    },[starred]);
    // const newShows = Object.keys(shows).map((item)=>{return shows[item]});
    return   (
        <ManageLayout>
     {isLoading && <div>Shows are still loading</div>}
     {error && <div>Error occured: {error}</div>}
     {!shows && !isLoading && <div>No Shows.</div>}
     {shows && !isLoading && !error && <ShowGrid results={shows}/>}
     {/* {console.log(newShows)} */}
     
 
   

     </ManageLayout>
     );
}
    

export default Starred
