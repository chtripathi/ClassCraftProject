import React from 'react'
import "./main.css"

const Main = () => {
  return (
    <div>
    <div className='main-container'>
        <div className='center'>
     <span className='first-line'>We Provide Online Courses</span><br/>
      <span className='second-line'>Online Courses</span><br/>
      <div className='input-container'>
      <input type="text" placeholder="search courses...."  className='search-bar'/>
      <button className='but'>Search</button>
      </div>
      </div>
      
      </div>
    </div>
  )
}

export default Main
