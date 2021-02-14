import React from 'react'
import { Link } from 'react-router-dom'
const Links = [{to:'/',text:'Home'},{to:'/starred',text:'Starred'},]
const Nav = () => {
    return (
        <div>
            <ul>
                {Links.map((link,i)=> <li key={i}>
                   <Link to={link.to}>{link.text}</Link>
                </li>)}
               
            </ul>
        </div>
    )
}

export default Nav;
