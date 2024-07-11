
import React from "react";
import { Link, Button, Typography } from '@mui/material'

import { useEffect, useState } from "react";



export default function ResumeButton() {

    const [showText2, setShowText2] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText2(true)
        }, 10500)
        return () => clearTimeout(timer)
    }, []);

    return (
        <Typography variant='h2' align='center'>
            {showText2 && (
                <Link href="/resume" underline="none">
                    <Button sx={{
                        height: '50px',
                        width: '400px',
                        fontSize: '16px',
                        marginTop: '50px',
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
                        variant="contained" >
                        <p className='montserrat'>Take a look at my Resume!</p>
                    </Button>
                </Link>

            )}
        </Typography>
    )
}