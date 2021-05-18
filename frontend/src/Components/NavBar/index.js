import React from 'react'
import { NavLink } from 'react-router-dom'
import { Bars, Nav, NavIcon } from './NavbarElements'

export const Navbar = () => {
    return (
        <>
        
         <Nav>
           <NavLink to='/'>pizza</NavLink>  
           <NavIcon>
               <p>Menu</p>
               <Bars/>
               </NavIcon> 
               </Nav>   
        </>
    )
}


