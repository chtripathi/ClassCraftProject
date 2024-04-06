import React from 'react'
import "./courses.css";
import {Link, useNavigate} from "react-router-dom"
import course1111 from "../../images/course1111.jpg";
import course222 from "../../images/course222.avif";
import course333 from "../../images/course333.avif";
import course444 from "../../images/course444.avif";
import course555 from "../../images/course555.avif";
import course666 from "../../images/course666.jpeg";
import course777 from "../../images/course777.jpg";
import course888 from "../../images/course888.avif"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

// Dynamic
import {data} from "../../FakeDB/data"



const Courses = () => {
  const navigate=useNavigate();
let handleClick=(pillar)=>{
  // navigate("/enroll")
  navigate("/enroll",{state:pillar})

}

  return (
    <div>
    
    
   

   

 

    <div className="heading">Courses</div>

        <div className='top-text'>
      <h1>This is the courses of the pillar app</h1>
      </div>
      <div className='courses'>

      {
        // console.log(courseData)
        data.map((pillar)=>{
            return(
                <>
                <div className="coursesItem" style={{backgroundImage:`url({pillar.courseImage})`}}
                onClick={()=>{
                  handleClick(pillar)
                }}
                >
                 <img src={pillar.courseImage} alt=""  width="350" height="220"/> 
                <div className="text">
                <h3>{pillar.coursename}</h3>
                <hr />
                <div className='user'>
                    <div className="left">
                <AccountCircleOutlinedIcon fontSize='large'/>
                <span>{pillar.courseby}</span></div>
                <div className="rating">
                    <StarRoundedIcon fontSize='large'/>
                    <span>{pillar.ratings.currentrating}({pillar.ratings.totalratings})</span>
                </div>
                </div>
                </div>
            </div>
                </>
            )
        })
      }
    

        
      
       
        </div>
      </div>

  )
}

export default Courses
