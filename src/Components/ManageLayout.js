import React from 'react'
import Nav from "./Nav"; 
import Title from './Title';

const ManageLayout = ({children}) => {
    return (
        <div>
            <Title title= "Box Office"
            subtitle="Are you Looking for an movie or an Actor? "
             />
      <Nav/>
    {children }
    </div>
    )
}

export default ManageLayout
