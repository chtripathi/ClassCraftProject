import React from 'react'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
// import SecondTop from '../FirstPage/SecondTop'
// import FirstTop from '../FirstPage/FirstTop'
import Main from "../FirstPage/Main";
import Menu from './Menu'
import About from '../About/About';
import Courses from '../courses/Courses';
import Contacts from '../contact/Contacts';
import Enroll from '../../Enrollmment/Enroll';
import EnrollButton from '../../Enroll-Button/EnrollButton';
import Joinus from '../../Validation/Join/Joinus';
import Viewcourse from '../../Viewcourse';

const Routing = () => {
  return (
    <Router>
      <Menu/>
        <Routes>
        
            <Route path={"/"} element={<Main/>}/>
            <Route path={"/aboutus"} element={<About/>}/>
            <Route path={"/joinus"} element={<Joinus/>}/>
            <Route path={"/contact"} element={<Contacts/>}/>
            <Route path={"/courses"} element={<Courses/>}/>
            <Route path={"/notifications"} element={<h2>notification Page</h2>}/>
             <Route path={"/enroll"} element={<Enroll/>}/>
             <Route path={"/enrollButton"} element={<EnrollButton/>}/>
             <Route path={"/Viewcourse"} element={<Viewcourse/>}/>
            
        </Routes>

      
    </Router>
  )
}

export default Routing
