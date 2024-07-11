import {Box} from '@mui/material'

import React from "react"
import Picture from "../components/about/picture"
import AboutMe from "../components/about/aboutme"
import ResumeButton from '../components/about/resumeButton'


export default function AboutPage() {
    return (
        <>
        
        <Box sx={{ display: 'flex', width: '80%', marginTop: '200px',  justifyContent: 'center'}}> 
        <Picture />
        <Box sx={{ width: '100%', justifyContent: 'center'}}>
                    <AboutMe/>
                </Box>
        
    </Box>
    
    <ResumeButton/>

        
        </>
    )
}