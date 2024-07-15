import React from 'react';
import { TextField, Button, Paper, Box, Typography } from '@mui/material';
import { useState } from 'react'

export default function ContactForm() {
    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(true)
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [message, setMessage] = useState('');
    const [isMessageValid, setIsMessageValid] = useState(true)

    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("this button");
    };


    const handleNameChange = (e) => {
        const nameInput = e.target.value;
        setName(nameInput);
        setIsNameValid(nameInput.length >= 0);
    }

    const handleEmailChange = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput);
        const isValid = emailRegex.test(emailInput)
        setIsEmailValid(isValid);
    };

    const handleMessageChange = (e) => {
        const messageInput = e.target.value;
        setMessage(messageInput);
        setIsMessageValid(messageInput.length >= 0);
    }


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
                    value={name}
                    onChange={handleNameChange}
                    error={!isNameValid}
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
                    value={email}
                    onChange={handleEmailChange}
                    error={!isEmailValid}
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
                    value={message}
                    onChange={handleMessageChange}
                    error={!isMessageValid}
                    rows={4}
                    required
                    InputProps={{
                        style: { backgroundColor: 'white', color: 'black' },
                    }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Button disabled = {name === '' || !isNameValid || email === '' || !isEmailValid || message === "" || !isMessageValid
                } onClick={handleSubmit} 
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