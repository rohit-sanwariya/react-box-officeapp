
import React,{useState} from 'react'
import ManageLayout from '../Components/ManageLayout'
import apiGet from '../Misc/Config';

const Home = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState(null);
    const onInputChange = (event) => {
        setInput(event.target.value);
        console.log(input);
    }
    const onSearch = async (event) => {
       const data = apiGet(`search/shows?q=${input}`);
       console.log(data);
       setResults(data);
    }
    const onKeyDown = (event) =>{
        if(event.keyCode===13){
            onSearch()
        }
    }
    const renderResults = () =>{
        if (results && results.length ===0){
return <div style={{
    fontWeight:'bolder',
fontSize:34,
padding:' 24px 0'
}}>No results</div>
        }
        else if(results && results.length > 0) {
        return    <div>{results.map(
            (item,i)=>{
return <li key={item.show.id}>{item.show.name}</li>
        })}</div>  
        }
        else return null;
    }
    return (
        <ManageLayout>
        <input onChange={onInputChange} value={input} type="text" onKeyDown={onKeyDown}/>
       <button type="button" onClick={onSearch}>Search</button>
       {renderResults()}
       
        </ManageLayout>
    )
}

export default Home
