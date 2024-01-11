import React from 'react'
import './Contact.css'
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import {LinkedIn, Instagram} from '@mui/icons-material'

const Contact = () => {
  return (
    <Element className='contact' name='contact'>
        <h1>Contact</h1>
        <div className='contact__container'> 
            <p>
                Email : <span>pravennkumar328be@gmail.com</span>
            </p>
            <p>
                Github Username : <span>@Praveen-Kr-S</span>
            </p>
            <div className='contact__icons'>
                <a href="https://www.linkedin.com/in/praveen-kumar-s-2b6315244/">
                    <IconButton>
                       <LinkedIn />
                    </IconButton>
                </a>
                <a href="https://www.instagram.com/praveen_kr_s_ind/">
                    <IconButton>
                       <Instagram />
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact