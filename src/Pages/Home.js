import React,{useState} from 'react'
import ManageLayout from '../Components/ManageLayout'

const Home = () => {
    const [input, setInput] = useState('');
    const onInputChange = (event) => {
        setInput(event.target.value);
        console.log(input);
    }
    const onSearch = async (event) => {
         // https://api.tvmaze.com/search/shows?q=girls
        const data = await (await fetch(` http://api.tvmaze.com/search/shows?q=${input}`)).json();
        console.log(data);
    }
    const onKeyDown = (event) =>{
        if(event.keyCode===13){
            onSearch()
        }
    }
    return (
        <ManageLayout>
        <input onChange={onInputChange} value={input} type="text" onKeyDown={onKeyDown}/>
       <button type="button" onClick={onSearch}>Search</button> </ManageLayout>
    )
}

export default Home
