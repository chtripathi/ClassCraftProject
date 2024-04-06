
import React from 'react'
import { Link } from 'react-router-dom'
import FirstTop from '../FirstPage/FirstTop'
// import viewcourse from '../../viewcourse'
// import Main from "../FirstPage/Main"
import logo from "../../images/logo.avif"
import "./menu.css"

const Menu = () => {
  return (
    <div>
        <FirstTop/>
    <div className='secondTop-container'>
    <img src="https://img.freepik.com/premium-vector/safeguard-family-care-unity-defence-protection-shield-icon-logo-people-children-insurance_101884-1460.jpg" alt="logo" width="50"/>
    <span className='title'>Mirzapur Defence Academy</span>
    
         <ul>
       <Link to="/"> <li>Home</li></Link>
       <Link to="courses"> <li>Courses</li></Link>
       <Link to="/aboutus"> <li>About</li></Link>
        <Link to="/notifications"><li>Notification</li></Link>
        <Link to="/contact"><li>Contact</li></Link> 
              </ul>
         <Link to="/joinus">     <button className='btn'>Join Us</button></Link>
    </div>
    <hr />
    {/* <Main/> */}
    </div> 
  

  )
}

export default Menu
