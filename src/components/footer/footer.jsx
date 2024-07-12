import React from 'react';
import { Paper, IconButton, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    const theme = useTheme();
    return (
        <>
            <Paper sx={{
                position: 'fixed',
                bottom: 0,
                width: '100vw',
                height: '5vh',
                backgroundColor: theme.palette.primary.main,
                color: 'white', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}> <span className='montserrat'>©2024 Michael Freeman</span> 
                <IconButton href="https://www.linkedin.com/in/mikef13/" target="_blank" color="inherit">
                    <LinkedInIcon />
                </IconButton>
                <IconButton href="https://github.com/mikef13x" target="_blank" color="inherit">
                    <GitHubIcon />
                </IconButton>
                <IconButton href="mailto:mikef132044@gmail.com" color="inherit">
                    <EmailIcon />
                </IconButton>
                
            </Paper>
        </>
    );
}

export default Footer;