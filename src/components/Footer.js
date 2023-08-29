import React from 'react';
import { Instagram as InstagramIcon } from '@mui/icons-material';
import { Twitter as TwitterIcon } from '@mui/icons-material';
import { Facebook as FacebookIcon } from '@mui/icons-material';
import { LinkedIn as LinkedInIcon } from '@mui/icons-material';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
            <InstagramIcon className='icons'/><FacebookIcon className='icons'/><TwitterIcon className='icons'/><LinkedInIcon className='icons'/>
      </div>
      <p> &copy; professionalpizza.com</p>
    </div>
  )
}

export default Footer;
