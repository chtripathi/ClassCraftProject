import React from 'react'
import "./firstTop.css";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FirstTop = () => {
  return (
    <div className='fistTop-container'>
      <CallIcon fontSize='small'/><span>9627859798</span>
      <MailOutlineIcon fontSize='small' style={{paddingLeft:"5px"}}/><span>chandresh.tri04@gmail.com</span>
      <div className="right-icons">
        <FacebookIcon fontSize='small'/>
        <LinkedInIcon fontSize='small'/>
        <TwitterIcon fontSize='small'/>
        <InstagramIcon fontSize='small'/>
        <YouTubeIcon fontSize='small'/>

      </div>

    </div>
  )
}

export default FirstTop
