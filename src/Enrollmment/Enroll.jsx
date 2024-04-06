// import React from 'react';
// import "./enroll.css";
// import {Link, useLocation} from "react-router-dom"


// const Enroll = () => {
//   const location=useLocation();
//   console.log(location)
//   return (
//     <div>

//     <div className="heading">Course Detail</div>
    
//     <div className='enroll'>
    
//     <div className="enroll-left">
    
//     <div className="enroll-heading
//     "><h1>Web design & <br/>development 
//     courses<br/> for beginners...</h1></div>
//     </div>
//     <div className="enroll-right">
  
//         <h4 data-text="Course Features">Course Features</h4>
//         <div className='enroll-card'>
//         <div className="card-subheading-title">Instructor</div>
//         <div className="card-subheading-name">John Doe</div>
//         </div><hr/>
//         <div className='enroll-card'>
//         <div className="card-subheading-title">Lecture</div>
//         <div className="card-subheading-name">15</div>
//         </div><hr/>
//         <div className='enroll-card'>
//         <div className="card-subheading-title">Duration</div>
//         <div className="card-subheading-name">15hr</div>
//         </div><hr/>
//         <div className='enroll-card'>
//         <div className="card-subheading-title">Skill-level</div>
//         <div className="card-subheading-name">All-level</div>
//         </div><hr/>
//         <div className='enroll-card'>
//         <div className="card-subheading-title">language</div>
//         <div className="card-subheading-name">Hindi,English</div>
//         </div><hr/>
//         <div className='enroll-card'>
//         <div className="card-subheading-title">Learning</div>
//         <div className="card-subheading-name">javaScript-React-JS</div>
//         </div><hr/>

//         <div className="course-price"><h3>Course Price: $340</h3> </div>

//        <Link to="/enrollButton"> <button className='enroll-button'>Enroll</button></Link>
//     </div>
      
    

//     </div>
//     </div>
//   )
// }

// export default Enroll


import React from 'react'
import { cardCourse } from '../CourseCard/cardCourse'
import "./enroll.css"
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Viewcourse from '../Viewcourse'
import { Button } from '@mui/material'
import { useLocation } from 'react-router-dom'

const Enroll = () => {
  const data=useLocation();
  console.log(data,"viewcourse")
const {state}=data;
const  navigate= useNavigate();

  const redirectHandler=()=>{
    navigate("/Viewcourse");
  }
  return (

    
    <div className='cardContainer'>

    <Link to={-1}>
    <Button variant='contained' color='secondary'
    className='backButton'
    >Back</Button>
    </Link>

    <div className='viewContainer'>
    <div className='imageContainer'>
    <img src={state?.courseImage} alt='courseDetail' width={500}/>
    </div>
    <div className='courseDetail'>
    <p>Course Name {state?.coursename}</p>
    <p>Course By {state?.courseby}</p>
    <p>Total Ratings{state?.ratings?.totalratings}</p>
    <p>Current Ratings{state?.ratings?.currentratings}</p>
    </div>
    
    </div>

      {cardCourse.map((card)=>{
        return(
          <div onClick={()=>redirectHandler(card)}>
          <div>
          <img src={card?.courseimage} alt='card' width={200}/>
          </div>
          <p>Course by {card?.courseby}</p>
          <p> Course rating {card?.ratings?.currentrating}</p>
          </div>
        )

      })
    }


    
    </div>

    

    
  )
}

export default Enroll
