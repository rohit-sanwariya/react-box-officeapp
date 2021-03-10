import React,{useState} from 'react'
import ManageLayout from '../Components/ManageLayout'
import apiGet from '../Misc/Config';
import ShowGrid from '../Components/Shows/ShowGrid'
import ActorGrids from '../Components/Actors/ActorGrids'
import { useLastQuery } from '../Misc/CustomHooks';





const Home = () => {
    const [input, setInput] = useLastQuery();
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');
    const isOption = searchOption === 'shows'; 
    const onInputChange = (event) => {
        setInput(event.target.value);
       
    }
    const onSearch = async (event) => {
       const data = await apiGet(`search/${searchOption}?q=${input}`);
      
       setResults(data);
    }
    const onKeyDown = (event) =>{
        if(event.keyCode===13){
            onSearch()
        }
    }
   const onSearchOption = (event) =>{

    setSearchOption(event.target.value)
   }





    const renderResults = () =>{
        if (results && results.length ===0){
return <div style={{
    fontWeight:'bolder',
fontSize:34,
padding:' 24px 0'
}}>No results</div>
        }
        if(results && results.length > 0) {
        return  results[0].show ? (<ShowGrid results={results}/>) : (<ActorGrids results={results}/>)
        }
        else return null;
    }
    return (
        <ManageLayout>
        <input onChange={onInputChange} value={input} type="text" onKeyDown={onKeyDown}/>
    <div>
        <label htmlFor="shows-search"><input  checked={isOption} value="shows"  onChange={onSearchOption} type="radio" name="" id="shows-search"/>
    Shows
    </label>
        <label htmlFor="actors-search"><input checked={!isOption}  value="people" onChange={onSearchOption}  type="radio" name="" id="actors-search"/>
    Actor
    </label>
    </div>
    
       <button type="button" onClick={onSearch}>Search</button>
    
       {renderResults()}
       
        </ManageLayout>
    )
}

export default Home
