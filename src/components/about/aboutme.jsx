import React from "react";
import {Box, Typography} from '@mui/material'
import Typewriter from '../homepage/typewriter'

export default function AboutMe() {

    return (
        <>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
           height:'500px',
            width: '50%'
        
        }}>
        <Box sx={{ 
            width:'100%',
            border: '2px solid #1976d2',
            borderRadius: '20px',
            padding: '20px', 
            
            color: 'white',
            backgroundColor: '#0068C4',
            marginTop: '100px',
           marginLeft: '100px',
            overflow: 'auto'
        }}>
            
            <Typography variant="body1" fontSize={'30px'}>
                <div className="montserrat">
                <Typewriter text = ' My name is Michael, I am 23 and from Connecticut. I am currently enrolled in a Full Stack Javascript Course learning the MERN stack. I have skills with both the front and back end, and have been enjoying React! I am hard working and very passionate about coding. I am creative and I know I would be a strong addition to any workspace. Please dont hesitate to reach out to me!' speed = {40}></Typewriter>
                </div>
            </Typography>
        </Box>
        </Box>
        
        </>
    )
}