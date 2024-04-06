import React, { useState } from 'react'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import "./contact.css"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Contacts = () => {


  // let obj={}

  const [formData,setFormData]=useState({
    fname:"",
    femail:"",
    fsubject:"",
    message:"",

  })

  const handleClick=(e)=>{
    e.preventDefault();
    // console.log("Clicked",obj)
    console.log(formData)
  
  }

  const handleChange=(e)=>{
    // console.log(e.target.name,e.target.value)
    // obj [e.target.name]=e.target.value;
    setFormData(
      {
        ...formData,
        [e.target.name]:e.target.value})
  }



  return (
    <div>
      <div className="contact">
        <div className="boxes">
          <div className="contactblue">
            <div className="blueBox">
            <LocationOnRoundedIcon fontSize='large'/>
            </div>
            <div className="boxText">
              <h3>Our Location</h3>
              <p>Raja Vijay Pur Kothi<br/>Civil lines, Mirzapur</p>
            </div>
          </div>
          <div className="contactred">
          <div className="redBox">
            <CallRoundedIcon fontSize='large'/>
            </div>
            <div className="boxText">
              <h3>Call Us</h3>
              <p>+91 9627859798</p>
            </div>
          
          </div>
          <div className="contactyellow">
          <div className="yellowBox">
            <MailOutlineRoundedIcon fontSize='large'/>
            </div>
            <div className="boxText">
              <h3>Email Us</h3>
              <p>chandresh.tri04@gmail.com</p>
            </div>
          
          </div>
        </div>
        <div className="rightSide">
        <div className="heading">Need help?</div>

         <div className="contactHeading"> <h1>Send Us A Message</h1></div>
          
        <form id="contact-form" method='post'>
        <div className='two-input'>
        
          <input type="text" placeholder='Enter Fullname' name="fname" value={formData.fname}
          onChange={handleChange}
          />
      
          <input type="email" placeholder='Enter Email' name="femail" value={formData.femail}
          onChange={handleChange}
          />
          </div>

          <div className='sub-input'>
        
          <input type="text" placeholder='Enter Subject' name="fsubject" value={formData.fsubject}
          onChange={handleChange}
          />
          </div>
          <div className='msg-input'>
       
       <textarea name="message" id="message" cols="30" rows="6" placeholder='Type message' value={formData.fmessage}
       onChange={handleChange}
       ></textarea>
       </div>
      <button type='sumit' onClick={handleClick}>send message</button>
        </form>
        </div>
        <div className="up-button">
        <KeyboardDoubleArrowUpIcon fontSize='large'/>
      </div>
      </div>


      <table>
      <thead>
      <tr>
      <th>fullname</th>
      <th>email</th>
      <th>subject</th>
      <th>Message</th>
      
      
      </tr>
      
      </thead>
      <tbody>
      {
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
      
      }
      
      </tbody>
      </table>
      
    </div>
  )
}

export default Contacts
