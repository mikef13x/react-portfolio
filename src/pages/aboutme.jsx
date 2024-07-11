import {Box} from '@mui/material'

import React from "react"
import Picture from "../components/about/picture"
import AboutMe from "../components/about/aboutme"
import PortfolioButton from '../components/about/portfolioButton'


export default function AboutPage() {
    return (
        <>
        
        <Box sx={{ display: 'flex', width: '100%', marginTop: '100px', marginLeft:'400px',  justifyContent: 'center', alignItems: 'center'}}> 
        <Picture />
        <Box sx={{ width: '100%', justifyContent: 'center'}}>
                    <AboutMe/>
                </Box>
        
    </Box>
    
    <PortfolioButton/>
        
        </>
    )
}