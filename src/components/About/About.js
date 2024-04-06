import React from 'react'
import "./about.css"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


const About = () => {
  return (
    <div>
      <div class="about-container">
        <div className="cover">
        <div className="about-image">
            <img height="450" src="https://images.unsplash.com/photo-1558021211-6d1403321394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob2xhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" width="400" alt="" />
        </div>
        {/* <div className="texts"> */}
            <div className="about-text">
                <div class="red-about heading">ABOUT US</div>
                <div className="heading-text">
                <div className="aboutHeading"><h1>First Choice For Online<br/>Education Anywhere</h1></div>
            </div>
            <div className="about-para">
                <p>We are high school level coatching institute who provides tutorials of Sainik School, RMIC, RMS, Navodaya and other
                competetive one day exams at classes IV and IX level. Along with it we also provide Vedic ganit and Web Development classes as well.
                We are one of the trusted institute of our city. </p>
            </div>
            <div className="color-boxes">
                <div class="blue"><h1>123</h1>
                <h4>AVAILABLE<br/> SUBJECTS</h4></div>
                <div class="yellow"><h1>1234</h1>
                <h4>ONLINE<br/> COURSES</h4></div>
                <div class="red"><h1>123</h1>
                <h4> SKILLED<br/> INSTRUCTOR</h4></div>
                <div class="green"><h1>1234</h1><h4>HAPPY<br/> STUDENTS</h4></div>
            </div>

            </div>
            </div>
      <div class="up-button">
        <KeyboardDoubleArrowUpIcon fontSize='large'/>
      </div>
           
        </div>

        
      {/* </div> */}
    
         
      
    </div>
  )
}

export default About
