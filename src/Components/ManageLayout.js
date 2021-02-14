import React from 'react'
import Nav from "./Nav"; 
import Title from './Title';

const ManageLayout = ({children}) => {
    return (
        <div>
            <Title title= "Box Office"
            subtitle="Are you Looking for an moovie or an Actress? "
             />
      <Nav/>
    {children }
    </div>
    )
}

export default ManageLayout
