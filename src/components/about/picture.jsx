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
                marginTop: '100px',
               
            }} >
            <img src="https://media.discordapp.net/attachments/1253520612459282453/1260039164062208040/mike_about_me_1.jpg?ex=668dde6b&is=668c8ceb&hm=8fc0f5e6b0cf50fa8df3078188d8944c547b20a989d9959dba43abf4c0cedeec&=&format=webp&width=904&height=904" alt="Name 1" style={{  maxWidth: '600px', maxHeight: '600px'}} />
            </Box>
            <Typography variant="h4" component="h2" item  sx={{ marginBottom: '20px', textAlign: 'center', color: 'white', marginTop: '20px' }}>
                <span className="montserrat"> Michael Freeman</span>
              
            </Typography>
        </Box>
        </>
    )
}