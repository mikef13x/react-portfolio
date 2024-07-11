import {Box} from '@mui/material'

import React from "react"
import Picture from "../components/about/picture"
import AboutMe from "../components/about/aboutme"



export default function AboutPage() {
    return (
        <>
        <Box sx={{ display: 'flex', width: '100%', marginTop: '100px', justifyContent: 'center'}}> 
        <Picture/>
        <AboutMe/>
    </Box>
      
        
        </>
    )
}