import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"; 
import pdfImage from "../../assets/images/pdf-image (1).png";
// import resumePdf from '../../assets/images/Michael_Freeman.pdf'
export default function DownloadResume() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', 
                    p: 2,
                }}
            >   
                    <h2 className="montserrat" style={{color: 'white', marginTop:'40px'}}>My Resume</h2>
               
                <img src={pdfImage} alt="Resume" style={{ maxWidth: '100%', height:'60vh', marginTop: '20px', borderColor: '#0068c4',
                    borderWidth: '3px',
                    borderStyle: 'solid' }} />
                
              
                <Button sx={{ 
                    color: 'white',
                    backgroundColor: 'rgb(1, 0, 18)',
                    borderColor: '#0068c4',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    marginTop: '50px',
                    '&:hover': {
                            backgroundColor: '#0068c4',
                            color: 'white'
                        }
                }}
                    variant="contained"
                    color="primary"
                    // href={resumePdf} 
                    download="Michael_Freeman.pdf"
                    disabled
                >
                    Download Resume
                </Button>
            </Box>
        </>
    );
}