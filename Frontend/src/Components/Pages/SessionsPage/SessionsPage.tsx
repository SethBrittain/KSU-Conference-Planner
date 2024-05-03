import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Stack, Button, Box} from "@mui/material";
import './Sessions.css';

//Lists of time categories and filler examples to be mapped into left display
const days = ["8 am", "9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm"];
const sessions = ["Session 1", "Session 2", "Session 3", "Session 4", "Session 5", "Session 6", "Session 7", "Session 8"];

const SessionsPage = () =>
{
    return(
        <>
            {//Header placed above other elements
            }
            <h1 style={{ 
                paddingBottom:'10px',
                textAlign:'left'}} id="Sessionsh1">Sessions</h1>
            {//Container for left and right sides of page
            }
            <Box className="h-full flex bg-[#512888]" flexDirection="row" id="SessionsBox1">
                {//Div mapping all categories and sessions into 8 spaced columns. Planned to work as a dynamic list, listing
                //sessions that begin on the time-of-day clicked, changing based on the last hour selected, and displaying
                //the extended info of any specific session clicked on the right.
                }
                <div style={{margin:'10px'}} className=" grid grid-cols-8 gap-0 sm:gap-1 place-items-center">
                {//Maps a list of elements into a repeated format
                }
                {
                days.map((day, idx) => {
                    return (
                    <div id="Sessionstext1" key={idx} className="font-semibold">
                        {day}
                    </div>
                    );
                })}
                {
                sessions.map((session, idx) => {
                    return (
                    <div id="Sessionstext2" key={idx} className="font-semibold">
                        {session}
                    </div>
                    );
                })}
                </div>
                {
                    //Right-side elements, arranged in rows in a Box, filled with placeholder text. Update to dynamically
                    //load session names and info from session(s) clicked on left.
                }
                <Box id="SessionsBox" className="flex" flexDirection="row">
                <div id="Sessionsh2">Session Info</div>
                <div id="Sessionsh3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </Box>
                
            </Box>
        </>
    )
}


export default SessionsPage;