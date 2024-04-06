// import React, { useState } from 'react'
// import "./enrollButton.css"
// const EnrollButton = () => {

//   const [enrollInput,setEnrollInput]=useState({
//     firstName:"",
//     lastName:"",
//     email:"",
//     phoneNumber:"",
//     password:"",
//     confirmPassword:"",
//     address:"",
//     postalCode:"",
//     date:"",
//     gender:"",
//     stream:"",
//     check:"",

//   })

 
//  const handleChange=(e)=>{
//   // console.log(e.target.name,e.target.value);

//   setEnrollInput({...enrollInput,
//   [e.target.name]:e.target.value,
//   })
//  }
 
//   const handleClick=(e)=>{
//     e.preventDefault()
//   console.log("Clicked",enrollInput)
//  }
 
 
//   return (
//     <div className="enroll-container">
//     <div className='wrapper'>
//       <div className="Enroll-title">
//       <h2 data-text-2="Enrollment Form">Enrollment Form</h2>
//       </div>
//       <div className="form">
//       <div className="input_field_1" placeholder='First Name' >
//       <input type="text" className="input"placeholder='First Name' name="firstName" onChange={handleChange}/>
//       <input type="text" className="input"  placeholder='Last Name' name="lastName" onChange={handleChange}/>
//       </div>

//       <div className="input_field_1">
      
//       <input type="email" className="input" placeholder='Email' name="email" onChange={handleChange} />
//       <input type="phone" className="input" placeholder='Phone Number'  name="phoneNumber" onChange={handleChange}/>
    
//       </div>
//       <div className="input_field_1">
//       <input type="password" className="input" placeholder='Password' name="password" onChange={handleChange}/>
//       <input type="password" className="input" placeholder='confirmPassword' name="confirmPassword" onChange={handleChange} />

     
      
//       </div>
      

//       <div className="input_field_2">
      
//       <textarea className="textarea" placeholder='Address' name="address" onChange={handleChange} ></textarea>
//       </div>

//       <div className="input_field_1">
//       <input type="text" className="input" placeholder='Postal Code' name="postalCode" onChange={handleChange} />
//       <input type="date" className='input' placeholder='Please enter preffered date and time' name="date" onChange={handleChange} />
//       </div>

//       <div className="select">
//       <select name="gender" onChange={handleChange}>
//       <option value="">Gender</option>
//       <option value="">Male</option>
//       <option value="">Female</option>
//       <option value="">Other</option>
      
//       </select>


      
//       </div>

     

//       <div className="select">
//       <select name="stream" onChange={handleChange}>
//       <option value="">Stream</option>
//       <option value="">Computer Science</option>
//       <option value="">Information Technology</option>
//       <option value="">Mechanical Engineering</option>
//       <option value="">Other</option>
      
//       </select>

//       </div>
      
      

//       <div className="input_field terms">
//       <label className='check'>
//       <input type="checkbox" name="check" onChange={handleChange}/>
//       <span className="checkmark"></span>
//       </label>
//       <p>Agreed to terms and conditions</p>
//       </div>
//       <button className='pillar-button' data-text-3="Enroll"
//       onClick={handleClick}>Enroll</button>
      
//       </div>

//     </div>
//     </div>
//   )
// }

// export default EnrollButton



import React from 'react'
import "./enrollButton.css"
import { FormControl, FormGroup, Paper, TextField, TextareaAutosize as BaseTextareaAutosize, MenuItem, InputLabel, Select, Button, Typography, } from '@mui/material'
import styled from '@emotion/styled'
import { courses } from '../components/options/CourseOptions'
import { useFormik } from 'formik'
import { enrollSchema } from '../Validation/Schema/Scema'
import { SpaRounded, ToysTwoTone } from '@mui/icons-material'


// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
   
  };



  const CustomInputLabel=styled(InputLabel)(()=>({
  marginTop:"30px"
  }))

  const CustomSelect=styled(Select)(()=>({
    marginTop:"30px",
  }))


const CustomPaper=styled(Paper)(({theme})=>({
  width:"30%",
  margin:"auto",
  padding:"30px",
  textAlign:"center",
  marginTop:"40px"
 
}))

const CustomTextField=styled(TextField)(()=>({
  // marginTop:"20px",
  width:"400px",
}))


// import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';






const Textarea = styled(BaseTextareaAutosize)(()=>({
  marginTop:"20px",
  borderRadius:"8px",
  fontSize:"12px",
  padding:"8px",
}))
  

const EnrollButton = () => {

  const initialValues={
    fullname:"",
    email:"",
    phone:"",
    course:"",
    message:"",

  }
  const {handleChange,handleBlur,handleSubmit,values,errors,touched}=useFormik({
    initialValues,
    validationSchema:enrollSchema,
    onSubmit:(values)=>{handleToastify()}

  })
  // console.log(formik)
  console.log(errors)

// TOstify

const handleToastify=()=>{
  toast.success('🦄 Wow so easy!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
}
  
  return (
    <div>

    <CustomPaper elevation={3}>
    <h2>Enrollment Form</h2>

    <FormControl>
    <FormGroup>
    <CustomTextField label="Fullname" name='fullname' onChange={handleChange} 
    onBlur={handleBlur} value={values.fullname}/>
    <Typography component={"span"} color={"red"}
    sx={{marginBottom:"20px"}}
    >{errors?.fullname && touched.fullname?errors?.fullname:null}</Typography>
    <CustomTextField label="Email" name='email'onChange={handleChange} 
    onBlur={handleBlur} value={values.email}/>
    <Typography component={"span"} color={"red"}
    sx={{marginBottom:"20px"}}
    >{errors?.email && touched.email?errors?.email:null}</Typography>
    <CustomTextField label="Phone number" name='phone'onChange={handleChange}
     onBlur={handleBlur} value={values.phone}/>
     <Typography component={"span"} color={"red"}
     sx={{marginBottom:"20px"}}
     >{errors?.phone && touched.phone?errors?.phone:null}</Typography>


    <FormControl>
  <InputLabel id="demo-simple-select-label">Courses</InputLabel>
  <Select
  name="course"
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={values.course}
    label="Courses"
    // sx={{marginTop:"20px"}}
    onChange={handleChange}
    onBlur={handleBlur}

  >
  
  {
    courses.map((course)=>{
      return <MenuItem 
      value={course?.value} 
      disabled={course?.disabled}
      key={course?.id}>{course?.label}</MenuItem>
    })
  }
  </Select>
  <Typography component={"span"} color={"red"}
  sx={{marginBottom:"8px"}}>
  {errors?.course && touched.course?errors?.course:null}
  </Typography>

</FormControl>
    <Textarea  aria-label="minimum height" minRows={2.5} placeholder="Drop your querry message" name='message' 
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.message}
    />
    <Typography component={"span"} color={"red"}
    sx={{marginBottom:"15px"}}
    >{errors?.message && touched.message?errors?.message:null}</Typography>

     
  <Button variant='contained' color='primary' sx={{padding:"20px"}}
   className='Enroll-btn' 
  type='submit' onClick={handleSubmit} >Enroll</Button>



    </FormGroup>
    </FormControl>
    </CustomPaper>
    <ToastContainer/>
    </div>
  )
}

export default EnrollButton