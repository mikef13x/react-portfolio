import React from "react";
import { Box, Typography, Link, Button } from '@mui/material'
import Typewriter from '../homepage/typewriter'


export default function AboutMe() {

    return (
        <>
        
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    maxHeight: '425px',
               
                 
                    // marginTop: '100px'

                }}>
                    <Box sx={{
                        width: '65%',
                        border: '2px solid #1976d2',
                        borderRadius: '20px',
                        padding: '20px',
                        color: 'white',
                        backgroundColor: '#0068C4',
                        
                        // marginLeft: '100px',
                        overflow: 'auto'
                    }}>
                        <Box>
                            <Typography variant="body1" fontSize={'26px'}>
                                <div className="montserrat">
                                    <Typewriter text=' My name is Michael, I am 23 and from Connecticut. I am currently enrolled in a Full Stack Javascript Course learning the MERN stack. I have skills with both the front and back end, and have been enjoying React! I am hard working and very passionate about coding. I am creative and I know I would be a strong addition to any workspace. Please dont hesitate to reach out to me!' speed={25}></Typewriter>
                                </div>
                            </Typography>
                  
                        </Box>
                    </Box>
                </Box>
               
           
           
         
        </>
    )
}