import React from 'react'
import {  useLocation } from 'react-router-dom'
import { NavList,LinkStyled } from "../Components/Navs.styled";
const Links = [{to:'/',text:'Home'},{to:'/starred',text:'Starred'},]

const Nav = () => {
    const location = useLocation()
    return (
        <div>
            <NavList style={{}}>
                {Links.map((link,i)=> <li key={i}>
                   <LinkStyled style={link.to===location.pathname?{color:"#2400ff",borderBottom:"#2400ff solid 1px" }:{color:"#c6c6c6"}} to={link.to}>{link.text}</LinkStyled>
                </li>)}
               
            </NavList>
        </div>
    )
}

export default Nav;
