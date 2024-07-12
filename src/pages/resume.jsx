import React from "react";
import ReactResume from "../components/resume/reactresume";
import DownloadResume from "../components/resume/downloadresume";
import Box from "@mui/material/Box"; // Import Box from Material-UI

export default function ResumePage() {
    return (
        <>
            <Box sx={{ display: 'flex', width: '100%'}}>
                <Box sx={{ flex: 1, marginRight: 'auto' }}>
                    <DownloadResume />
                </Box>
                <Box sx={{ flex: 1, marginLeft: 'auto' }}>
                    <ReactResume />
                </Box>
            </Box>
        </>
    );
}