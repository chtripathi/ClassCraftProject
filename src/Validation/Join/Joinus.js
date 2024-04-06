// import React from 'react'

// const Joinus = () => {
//   return (
//     <div>
//       this is join us
//     </div>
//   )
// }


// import React from 'react'
// // import "./enrollButton.css"
// import { FormControl, FormGroup, Paper, TextField, TextareaAutosize as BaseTextareaAutosize, MenuItem, InputLabel, Select, Button, Typography, } from '@mui/material'
// import styled from '@emotion/styled'
// // import { courses } from '../components/options/CourseOptions'
// import { useFormik } from 'formik'
// // import { enrollSchema } from '../Validation/Schema/Scema'
// import { enrollSchema } from '../Schema/Scema'
// import { SpaRounded, ToysTwoTone } from '@mui/icons-material'


// // Toastify
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { courses } from '../../components/options/CourseOptions'


//   const blue = {
//     100: '#DAECFF',
//     200: '#b6daff',
//     400: '#3399FF',
   
//   };



//   const CustomInputLabel=styled(InputLabel)(()=>({
//   marginTop:"30px"
//   }))

//   const CustomSelect=styled(Select)(()=>({
//     marginTop:"30px",
//   }))


// const CustomPaper=styled(Paper)(({theme})=>({
//   width:"30%",
//   margin:"auto",
//   padding:"30px",
//   textAlign:"center",
//   marginTop:"40px"
 
// }))

// const CustomTextField=styled(TextField)(()=>({
//   // marginTop:"20px",
//   width:"400px",
// }))


// // import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';






// const Textarea = styled(BaseTextareaAutosize)(()=>({
//   marginTop:"20px",
//   borderRadius:"8px",
//   fontSize:"12px",
//   padding:"8px",
// }))
  

// const Joinus = () => {

//   const initialValues={
//     fullname:"",
//     email:"",
//     phone:"",
//     course:"",
//     message:"",

//   }
//   const {handleChange,handleBlur,handleSubmit,values,errors,touched}=useFormik({
//     initialValues,
//     validationSchema:enrollSchema,
//     onSubmit:(values)=>{handleToastify()}

//   })
//   // console.log(formik)
//   console.log(errors)

// // TOstify

// const handleToastify=()=>{
//   toast.success('🦄 Wow so easy!', {
//     position: "top-center",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "colored",
//     });
// }
  
//   return (
//     <div>

//     <CustomPaper elevation={3}>
//     <h2>Join Us Form</h2>

//     <FormControl>
//     <FormGroup>
//     <CustomTextField label="Fullname" name='fullname' onChange={handleChange} 
//     onBlur={handleBlur} value={values.fullname}/>
//     <Typography component={"span"} color={"red"}
//     sx={{marginBottom:"20px"}}
//     >{errors?.fullname && touched.fullname?errors?.fullname:null}</Typography>
//     <CustomTextField label="Email" name='email'onChange={handleChange} 
//     onBlur={handleBlur} value={values.email}/>
//     <Typography component={"span"} color={"red"}
//     sx={{marginBottom:"20px"}}
//     >{errors?.email && touched.email?errors?.email:null}</Typography>
//     <CustomTextField label="Phone number" name='phone'onChange={handleChange}
//      onBlur={handleBlur} value={values.phone}/>
//      <Typography component={"span"} color={"red"}
//      sx={{marginBottom:"20px"}}
//      >{errors?.phone && touched.phone?errors?.phone:null}</Typography>


//     <FormControl>
//   <InputLabel id="demo-simple-select-label">Courses</InputLabel>
//   <Select
//   name="course"
//     labelId="demo-simple-select-label"
//     id="demo-simple-select"
//     value={values.course}
//     label="Courses"
//     // sx={{marginTop:"20px"}}
//     onChange={handleChange}
//     onBlur={handleBlur}

//   >
  
//   {
//     courses.map((course)=>{
//       return <MenuItem 
//       value={course?.value} 
//       disabled={course?.disabled}
//       key={course?.id}>{course?.label}</MenuItem>
//     })
//   }
//   </Select>
//   <Typography component={"span"} color={"red"}
//   sx={{marginBottom:"8px"}}>
//   {errors?.course && touched.course?errors?.course:null}
//   </Typography>

// </FormControl>
//     <Textarea  aria-label="minimum height" minRows={2.5} placeholder="Drop your querry message" name='message' 
//     onChange={handleChange}
//     onBlur={handleBlur}
//     value={values.message}
//     />
//     <Typography component={"span"} color={"red"}
//     sx={{marginBottom:"15px"}}
//     >{errors?.message && touched.message?errors?.message:null}</Typography>

     
//   <Button variant='contained' color='primary' sx={{padding:"20px"}}
//    className='Enroll-btn' 
//   type='submit' onClick={handleSubmit} >Enroll</Button>



//     </FormGroup>
//     </FormControl>
//     </CustomPaper>
//     <ToastContainer/>
//     </div>
//   )
// }


// export default Joinus




// import * as React from 'react';
// import "./join.css"
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { FormControl, FormGroup, Paper,  TextareaAutosize as BaseTextareaAutosize, MenuItem, InputLabel, Select,  Typography, styled, } from '@mui/material'
// import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
// import {courses} from "../../components/options/CourseOptions"

// import {enrollSchema} from "../Schema/Scema"
// import { useFormik } from 'formik';


// // Toastify
//  import { ToastContainer, toast } from 'react-toastify';
//  import 'react-toastify/dist/ReactToastify.css';
// import { courses } from '../../components/options/CourseOptions'


// export default function FormDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };


  // Dynamic Functions

//    const Textarea = styled(BaseTextareaAutosize)(()=>({
//    marginTop:"20px",
//    borderRadius:"8px",
//    fontSize:"12px",
//    padding:"8px",
//  }))

  // const CustomTextField=styled(TextField)(()=>({
   // marginTop:"20px",
  //  width:"400px",
//  }))



   


  // Dynamic copied function


//   const initialValues={
//          fullname:"",
//          email:"",
//          phone:"",
//          course:"",
//          message:"",
    
//        }
//        const {handleChange,handleBlur,handleSubmit,values,errors,touched}=useFormik({
//          initialValues,
//          validationSchema:enrollSchema,
//          onSubmit:(values)=>{handleToastify()}
    
//        })
//        // console.log(formik)
//        console.log(errors)
    
//      // TOstify
    
//      const handleToastify=()=>{
//        toast.success('🦄 Wow so easy!', {
//          position: "top-center",
//          autoClose: 5000,
//         hideProgressBar: false,
//          closeOnClick: true,
//          pauseOnHover: true,
//          draggable: true,
//          progress: undefined,
//          theme: "colored",
//          });
//      }

//   return (
//     <React.Fragment>
//      <Button variant="outlined" onClick={handleClickOpen}>
//        Click here
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Join Us</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To join to this website, please enter your email address here. We
//             will send updates occasionally.
//           </DialogContentText>

//           <CustomTextField label="Fullname" name='fullname' onChange={handleChange} 
//      onBlur={handleBlur} value={values.fullname}/>
//      <Typography component={"span"} color={"red"}
//      sx={{marginBottom:"50px"}}
//      >{errors?.fullname && touched.fullname?errors?.fullname:null}</Typography>
//      <CustomTextField label="Email" name='email'onChange={handleChange} 
//      onBlur={handleBlur} value={values.email}/>
//      <Typography component={"span"} color={"red"}
//      sx={{marginBottom:"20px"}}
//      >{errors?.email && touched.email?errors?.email:null}</Typography>
//      <CustomTextField label="Phone number" name='phone'onChange={handleChange}
//       onBlur={handleBlur} value={values.phone}/>
//       <Typography component={"span"} color={"red"}
//       sx={{marginBottom:"20px"}}
//       >{errors?.phone && touched.phone?errors?.phone:null}</Typography>


//      <FormControl>
//    <InputLabel id="demo-simple-select-label">Courses</InputLabel>
//    <Select
//    name="course"
//      labelId="demo-simple-select-label"
//      id="demo-simple-select"
//      value={values.course}
//      label="Courses"
//      // sx={{marginTop:"20px"}}
//      onChange={handleChange}
//      onBlur={handleBlur}

//    >
  
//    {
//      courses.map((course)=>{
//        return <MenuItem 
//        value={course?.value} 
//        disabled={course?.disabled}
//        key={course?.id}>{course?.label}</MenuItem>
//      })
//    }
//    </Select>
//    <Typography component={"span"} color={"red"}
//    sx={{marginBottom:"8px"}}>
//    {errors?.course && touched.course?errors?.course:null}
//    </Typography>

//  </FormControl>
//      <Textarea  aria-label="minimum height" minRows={2.5} placeholder="Drop your querry message" name='message' 
//      onChange={handleChange}
//      onBlur={handleBlur}
//      value={values.message}
//      />
//      <Typography component={"span"} color={"red"}
//      sx={{marginBottom:"15px"}}
//      >{errors?.message && touched.message?errors?.message:null}</Typography>

     
//    <Button variant='contained' color='primary' sx={{padding:"20px"}}
//     className='Enroll-btn' 
//    type='submit' onClick={handleSubmit} >Enroll</Button>


          
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleClose}>Enroll</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { courses } from '../../components/options/CourseOptions';
import { useFormik } from 'formik';
import {enrollSchema} from "../Schema/Scema"
import { toast } from 'react-toastify';


 // Courses Object

 const coursesObj={
  name:"",
  email:"",
  password:"",
  courses:"",
  message:"",
}



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



// Formik


    const initialValues={
          fullname:"",
          email:"",
          password:"",
          phone:"",
          courses:"",

    }


        const {handleChange,handleBlur,handleSubmit,values,errors,touched}=useFormik({
          initialValues,
          validationSchema:enrollSchema,
          onSubmit:(values)=>{handleToastify()}
    
        })

        console.log(errors)

        // Tostify

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Join Pillar
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Elevate your education
          </Typography>
          <TextField label="Name"  sx={{mt: 2, width:"100%"}}
          name='fullname' onChange={handleChange} 
      onBlur={handleBlur} value={values.fullname}
          ></TextField>
          <Typography component={"span"} color={"red"}
    sx={{marginBottom:"20px"}}
    >{errors?.fullname && touched.fullname?errors?.fullname:null}</Typography>
          <TextField label="Email" name="email" sx={{mt: 2, width: "100%"}}
           onChange={handleChange} 
          onBlur={handleBlur} value={values.email}
          ></TextField>
          <Typography component={"span"} color={"red"}
    sx={{marginBottom:"20px"}}
    >{errors?.email && touched.email?errors?.email:null}</Typography>
          <TextField label="Password" name="password" sx={{mt: 2, width: "100%"}}
          onChange={handleChange} 
          onBlur={handleBlur} value={values.password}
          ></TextField>
          <Typography component={"span"} color={"red"}
    sx={{marginBottom:"20px"}}
    >{errors?.password && touched.password?errors?.password:null}</Typography>
          <TextField label="Phone" name='phone' sx={{mt: 2, width: "100%"}}
          onChange={handleChange} 
          onBlur={handleBlur} value={values.phone}
          ></TextField>
          <Typography component={"span"} color={"red"}
    sx={{marginBottom:"20px"}}
    >{errors?.phone && touched.phone?errors?.phone:null}</Typography>

          <InputLabel id="demo-simple-select-label">Courses</InputLabel>
  <Select
  name="course"
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={courses.value}
    label="Courses"
    onChange={handleChange}
    onBlur={handleBlur}
    sx={{width:"100%"}}
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
    sx={{marginBottom:"20px"}}
    >{errors?.course && touched.course?errors?.course:null}</Typography>

  <Button variant='contained' color='primary' type='Submit' 
  onClick={handleSubmit}
  sx={{width:"100%",mt: 2}}>Join</Button>
          
        </Box>
      </Modal>
    </div>
  );
}