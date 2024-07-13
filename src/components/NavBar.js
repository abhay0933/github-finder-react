import React from 'react'
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className='logo'>
            <FaGithub />
            <h3>Github Finder</h3>
        </div>
    </div>
  )
}

export default NavBar