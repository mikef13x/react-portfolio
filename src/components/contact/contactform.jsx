import React from 'react';
import { TextField, Button, Paper, Box, Typography } from '@mui/material';

export default function ContactForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("this button");
    };

    return (
        <>
        <Box>
            <Typography variant='h2' sx={{
                 marginTop: '180px',
                  color: 'white',
                   textAlign: 'center'
                   }}>
               <span className='montserrat'> Contact Me! </span>
            </Typography>

        </Box>
        <Box sx={{
            display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
              width:'99vw',
              marginTop: '40px'
              }}>
       
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    InputProps={{
                        style: { backgroundColor: 'white', color: 'black' },
                    }}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="email"
                    required
                    InputProps={{
                        style: { backgroundColor: 'white', color: 'black' },
                    }}
                />
                <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    required
                    InputProps={{
                        style: { backgroundColor: 'white', color: 'black' },
                    }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Button onClick={handleSubmit} 
                            sx={{
                                height: '50px',
                                width: '300px',
                                fontSize: '16px',
                                color: 'white',
                                borderColor: '#0068c4',
                                backgroundColor: 'rgb(1, 0, 18)',
                                borderWidth: '2px',
                                borderStyle: 'solid',
                                '&:hover': {
                                    backgroundColor: '#0068c4',
                                    color: 'white'
                                }
                            }}
                                variant="contained">
                                <p className='montserrat'>Contact Me</p>
                            </Button>
                </Box>
            </form>
       
        </Box>
        </>
    );
}