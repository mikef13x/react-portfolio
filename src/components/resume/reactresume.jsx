import React from "react";
import { Paper, Typography, Box, Button} from "@mui/material";

export default function ReactResume() {
    return (
       
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px'}}>
            <Box sx={{ paddingRight: 15, paddingTop: 7}}>
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 4, borderStyle: 'solid', borderColor: '#0068c4', borderWidth:'3px'}}>
                    <Typography variant="h5" gutterBottom>
                      Education
                    </Typography>
                    <Typography>
                    <strong>edX Coding Bootcamp at University of Connecticut 2024-Present </strong> <br />
                        - MERN Full Stack
                        <br/>
                        <br />
                       <strong>Business Finance University of Maine 2018-2021</strong><br />
                         - member of the Student Portfolio Investment Fund (SPIFFY) <br/>
                        - proud member of Pi Kappa Phi Fraternity
                       
                    </Typography>
                </Paper>
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 4, borderStyle: 'solid', borderColor: '#0068c4', borderWidth:'3px' }}>
                    <Typography variant="h5" gutterBottom>
                       Key Skills
                    </Typography>
                    <Typography>
                    <strong>
                        - React<br />
                        - CSS and Frameworks (Material-UI, Bulma, Tailwind, Bootstrap)<br />
                        - Node.js <br />
                        - Express.js <br />
                        - MongoDB <br />
                        - mySQL and noSQL <br />
                        - GraphQL 
                        </strong>
                    </Typography>
                </Paper>
                <Paper elevation={3} sx={{ padding: 2, borderStyle: 'solid', borderColor: '#0068c4', borderWidth:'3px'}}>
                    <Typography variant="h5" gutterBottom>
                      Projects
                    </Typography>
                    <Typography>
                    <strong>Indie Ignite:</strong> platform for indie game developers to gain support and funding, I took the front-end lead on this project using handlebars and manual CSS to create an intuitive user interface and professional quality finish.<br />
                    
                        <strong>Debate Cafe:</strong> A website to discuss and view debates, I took the React-lead on this project to create an easy to use and simple interface using Material-UI for styling.<br />
                 
                        <strong>Aniname:</strong> An application where users can search, and find new or current anime. For this project, HTML CSS and JavaScript was used. The application has a list for the users to track their current watchlist.
                    </Typography>
                </Paper>
                <Box sx={{ textAlign: 'center', width: '100%' }}>
                <Button sx={{ 
                    color: 'white',
                    backgroundColor: 'rgb(1, 0, 18)',
                    borderColor: '#0068c4',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    marginTop: '30px',
                    '&:hover': {
                            backgroundColor: '#0068c4',
                            color: 'white'
                        }
                }}
                    variant="contained"
                    color="primary"
                    href={'/portfolio'} 
               
                >
                    View more Projects
                </Button>
                </Box>
            </Box>
        </Box>
      
    );
}