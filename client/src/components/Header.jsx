import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div>
        <header>
            <div className='container'>
                <div className="logo">
                    <NavLink to="/">TechVortex</NavLink>
                </div>

                <nav>
                    <ul className=''>
                        <li className=' text-7xl'><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header