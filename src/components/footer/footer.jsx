import React from 'react'
import {Paper, useTheme } from '@mui/material'


 function Footer() {
const theme = useTheme()
    return(
        <>
        <Paper sx={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                height: '100px',
                backgroundColor: theme.palette.primary.main,
                color: 'white', 
                display:'flex',
                alignItems:'center',
                justifyContent: 'center'
            }}>
               <div>This was made by Michael Freeman @2024</div> 
            </Paper>
        </>
    )
}

export default Footer