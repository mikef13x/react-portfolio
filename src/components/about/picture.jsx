import React from "react";
import {Box, Typography} from "@mui/material"

export default function Picture() {

    return (
        <>
        <Box>
        <Box
            sx={{
                width: 400,
                height: 400,
                border: '2px solid #1976d2', 
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'hidden',
                marginLeft: '300px'
               
            }} >
            <img src="../../../assets/images/mike_about_me_1.jpg" alt="Name 1" style={{  maxWidth: '600px', maxHeight: '600px'}} />
            </Box>
            <Typography variant="h4" component="h2" item  sx={{ marginBottom: '20px', marginLeft:'250px', textAlign: 'center', color: 'white', marginTop: '20px' }}>
                <span className="montserrat"> Michael Freeman</span>
              
            </Typography>
        </Box>
        </>
    )
}