import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

function PortfolioCard({ card }) {
 
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={card.link} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
      <Card
        sx={{
          width: '400px',
          height: '300px',
          margin: 2,
          backgroundColor: '#0068c4',
          border: '1px solid #0068c4',
          color: 'white',
          position: 'relative', 
         
        }}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      >
        <CardMedia
          component="img"
          sx={{
            height: 235,
            objectFit: 'cover',
          }}
          image={card.image}
          alt={card.title}
        />
        {isHovered && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)', 
            }}
          >
            <Box
      sx={{
        maxHeight: '90%', 
        overflow: 'auto',
        padding: '10px',
        textAlign: 'center',
        '&::-webkit-scrollbar': {
        display: 'none', 
      },
      scrollbarWidth: 'none',
      }}
    >
            <Typography variant="h6" color="white" textAlign={'center'} marginBottom={'50px'} padding={'20px'}>
             <span className='montserrat'>{card.description}</span>
            </Typography>
          </Box>
          </Box>
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign={'center'} >
            <span className='montserrat'>{card.title}</span>  
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
}

export default PortfolioCard;