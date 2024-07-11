import React from 'react'
import {Paper, useTheme } from '@mui/material'


 function Footer() {
const theme = useTheme()
    return(
        <>
        <Paper sx={{
                position: 'fixed',
                bottom: 0,
                width: '100vw',
                height: '5vh',
                backgroundColor: theme.palette.primary.main,
                color: 'white', 
                display:'flex',
                alignItems:'center',
                justifyContent: 'center'
            }}>
               <span className='montserrat'>This was made by Michael Freeman @2024</span> 
            </Paper>
        </>
    )
}

export default Footer