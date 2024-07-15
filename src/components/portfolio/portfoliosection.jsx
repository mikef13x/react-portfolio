import React from 'react';
import Box from '@mui/material/Box';
import PortfolioCard from './portfoliocard'
import { motion } from 'framer-motion'
import { Button, Typography, Link } from '@mui/material'



function PortfolioSection({ cards }) {

    const containerInfo = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const cardMovement = {
        hidden: { y: 80, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };





    return (
        <>
            <>
                <Box sx={{
                     position: 'absolute',
                     right: 0,
                      paddingTop: '50px',
                       paddingRight: '50px',
                        alignItems: 'center'
                         }}>
                    <Typography sx={{
                         color: 'white'
                          }}>
                        <Link href="/contact" underline="none">
                            <Button sx={{
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
                        </Link>
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex',
                     flexDirection: 'column',
                      alignItems: 'center',
                       width: '100%'
                        }}>

                    <Box className='montserrat' 
                    sx={{
                         display: 'flex',
                          justifyContent: 'center',
                           width: '100%',
                            textAlign: 'center', 
                            paddingTop: '30px'
                             }}>
                        <h1 style={{ color: 'white' }}>Projects</h1>
                    </Box>
                </Box>


            </>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                width: '80vw',
                height: '65vh',
                p: 2,
                borderRadius: '8px',
                margin: 'auto',
                marginTop: '50px',
                overflow: 'auto',
                gap: '100px',
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                scrollbarWidth: 'none',
            }}>

                <motion.div
                    variants={containerInfo}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '50px' }}
                >
                    {cards?.map(card => (
                        <motion.div key={card._id} variants={cardMovement}>
                            <PortfolioCard card={card} />
                        </motion.div>
                    ))}
                </motion.div>

            </Box>
        </>
    )
}

export default PortfolioSection;