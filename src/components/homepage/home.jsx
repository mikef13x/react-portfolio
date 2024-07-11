import React from 'react';
import { useState, useEffect } from 'react'
import Typewriter from './typewriter';
import Container from '@mui/material/Container'
import { Typography, Button, Link, Box} from '@mui/material';


export default function Home() {
    const [showText, setShowText] = useState(false);
    const [showText2, setShowText2] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true)
        }, 2250)
        return () => clearTimeout(timer)
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText2(true)
        }, 5000)
        return () => clearTimeout(timer)
    }, []);


    return (
        <Box sx={{display:'flex', marginTop: '100px' }}>
        <Container sx={{ color: 'white'}} >
            <Typography variant="h1" align="center">
                <p className={'montserrat'}>
                    <Typewriter text="Michael Freeman" speed={80} />
                </p>
            </Typography>
            <Typography variant='h2' align='center'>
                {showText && (
                    <p className={'montserrat '}>
                        <Typewriter text="Welcome to my Portfolio " speed={70} />
                    </p>
                )}
            </Typography>
            <Typography variant='h2' align='center'>
                {showText2 && (
                    <Link href="/about" underline="none">
                        <Button sx={{height: '100px', width: '200px', fontSize: '20px', marginTop: '50px'}}variant="contained" color="primary">
                           <p className='montserrat'>Start Here</p> 
                        </Button>
                    </Link>

                )}
            </Typography>
        </Container>
        </Box>
    )
}


