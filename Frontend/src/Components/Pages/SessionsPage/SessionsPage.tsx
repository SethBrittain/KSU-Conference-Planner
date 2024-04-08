import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Stack, Button, Box} from "@mui/material";
import './Sessions.css';

const days = ["8 am", "9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm"];
const sessions = ["Session 1", "Session 2", "Session 3", "Session 4", "Session 5", "Session 6", "Session 7"];

const SessionsPage = () =>
{
    return(
        <>
            <h1 style={{ 
                paddingBottom:'10px',
                textAlign:'left'}} id="Sessionsh1">Sessions</h1>
            <Box className="h-full flex bg-[#512888]" flexDirection="row" id="SessionsBox1">
                <div style={{margin:'10px'}} className=" grid grid-cols-8 gap-0 sm:gap-1 place-items-center">
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
                <Box className="h-full flex bg-[20c997]" flexDirection="row">
                <div style={{ 
                paddingBottom:'10px',}} id="Sessionsh2">Session Info</div>
                <div  ></div>
                </Box>
            </Box>
        </>
    )
}


export default SessionsPage;