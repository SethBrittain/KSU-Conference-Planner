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
            <Box display="flex" flexDirection="row" style={{width: '500vw'}}>
                <div className="grid grid-cols-8 gap-0 sm:gap-1 place-items-center">
                {
                days.map((day, idx) => {
                    return (
                    <div id="Sessionstext" key={idx} className="font-semibold">
                        {day}
                    </div>
                    );
                })}
                {
                sessions.map((day, idx) => {
                    return (
                    <div key={idx} className="font-semibold">
                        {day}
                    </div>
                    );
                })}
                </div>
                <div style={{ 
                paddingBottom:'10px',}} id="Sessionsh2">Sessions Info</div>
            </Box>
        </>
    )
}


export default SessionsPage;