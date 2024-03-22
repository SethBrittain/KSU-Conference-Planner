import React, { ReactElement } from "react";
import { AppBar, Toolbar, Typography, Stack, Button, Box} from "@mui/material";
import {ReactComponent as Icon} from '../Icon.svg';
import { Link } from "react-router-dom";

type itemType = {
    name: string; 
    shown: boolean;
    current: string;
};

type signItem = {
    name: string;
};

type signUpItem = {
    name: string;
};

type LogItem = {
    name: string;
};

type NavbarProps = {
    NavbarType: string;
    CurrentPage: string;
};

type NavbarItem = {
    Name: string;
};

const homeBtn: NavbarItem = {
    Name: 'Home'
};

const sessionsBtn: NavbarItem = {
    Name: 'Sessions'
};

const aboutBtn: NavbarItem = {
    Name: 'About'
};

const faqBtn: NavbarItem = {
    Name: 'FAQ'
};

const yourScheduleBtn: NavbarItem = {
    Name: 'Your Schedule'
};

const yourApplicationBtn: NavbarItem = {
    Name: 'Your Application'
};

const applicationReviewBtn: NavbarItem = {
    Name: 'Application Review'
};

function Item( itemType: itemType ): ReactElement | null {
    if( !itemType.shown ){
        return null;
    }
    if( itemType.current === "Landing" && itemType.name === "Home"){
        return (<Button style={{ color: '#000000'}}>{itemType.name}</Button>);
    }
    if( itemType.current === "Sessions" && itemType.name === "Sessions"){
        return (<Button style={{ color: '#000000'}}>{itemType.name}</Button>);
    }
    if( itemType.current === "About" && itemType.name === "About"){
        return (<Button style={{ color: '#000000'}}>{itemType.name}</Button>);
    }
    if( itemType.current === "FAQ" && itemType.name === "FAQ"){
        return (<Button style={{ color: '#000000'}}>{itemType.name}</Button>);
    }
    if( itemType.current === "Schedule" && itemType.name === "Your Schedule"){
        return (<Button style={{ color: '#000000'}}>{itemType.name}</Button>);
    }
    if( itemType.current === "Application" && itemType.name === "Your Application"){
        return (<Button style={{ color: '#000000'}}>{itemType.name}</Button>);
    }
    if( itemType.current === "Review" && itemType.name === "Application Review"){
        return (<Button style={{ color: '#000000'}}>{itemType.name}</Button>);
    }
    return ( <Button style={{ color: '#637381'}}>{itemType.name}</Button>);
}

function SignItem( type: signItem ): ReactElement | null {
    if(type.name === "Generic" || type.name === "LogIn"){
        return <Button style={{ color: '#000000', fontSize: '.8rem'}} >Sign In</Button>;
    }
    return null;
}

function SignUpItem(type: signUpItem): ReactElement | null {
    if(type.name === "Generic"){
        return <Link to ='/Signup' ><Button style={{ color: '#FFFFFF', backgroundColor: '#512888', fontSize: '.8rem'}}>Sign Up</Button></Link>;
    }
    return null;
}

function LogOutItem(type: LogItem): ReactElement | null {
    if(type.name === "Generic" || type.name === "SignUp"){
        return null;
    }
    return <Button style={{ color: '#FFFFFF', backgroundColor: '#512888'}}>Sign Out</Button>;
}

function ShouldShow( type: string, name: string ): boolean{
    if(type === "Generic"){
        if(name === "Home" || name === "Sessions" || name === "About" || name === "FAQ"){
            return true;
        }
    }
    if(type === "GeneralAttendee"){
        if(name === "Home" || name === "Sessions" || name === "About" || name === "FAQ" || name === "Your Schedule"){
            return true;
        }
    }
    if(type === "Presenter"){
        if(name === "Home" || name === "Sessions" || name === "About" || name === "FAQ" || name === "Your Schedule" || name === "Your Application"){
            return true;
        }
    }
    if(type === "Reviewer"){
        if(name === "Home" || name === "Sessions" || name === "About" || name === "FAQ" || name === "Your Schedule" || name === "Application Review"){
            return true;
        }        
    }
    if(type === "SignUp"){
        if(name === "Home" || name === "Sessions" || name === "About" || name === "FAQ"){
            return true;
        }        
    }
    return false;
}


const Navbar = ({NavbarType, CurrentPage}: NavbarProps) =>
{
    return(
        <Box display="flex" flexDirection="row">
        <AppBar position='static'style={{ background: '#FFFFFF'}}>
            <Toolbar >
                <Icon/>
                <Typography variant='h5' component='div' style={{ color: '#000000'}} sx={{ flexGrow: 0, m: 2}}>
                KSU Conference Planner
                </Typography>
                <Stack direction ='row' spacing = {2} sx={{ flexGrow: 1  }}>
                    <Item name={homeBtn.Name} current={CurrentPage} shown={ShouldShow( NavbarType, homeBtn.Name )}></Item>
                    <Item name={sessionsBtn.Name} current={CurrentPage} shown={ShouldShow( NavbarType, sessionsBtn.Name )}></Item>
                    <Item name={aboutBtn.Name} current={CurrentPage} shown={ShouldShow( NavbarType, aboutBtn.Name )}></Item>
                    <Item name={faqBtn.Name} current={CurrentPage} shown={ShouldShow( NavbarType, faqBtn.Name )}></Item>
                    <Item name={yourScheduleBtn.Name} current={CurrentPage} shown={ShouldShow( NavbarType, yourScheduleBtn.Name )}></Item>
                    <Item name={yourApplicationBtn.Name} current={CurrentPage} shown={ShouldShow( NavbarType, yourApplicationBtn.Name )}></Item>
                    <Item name={applicationReviewBtn.Name} current={CurrentPage} shown={ShouldShow( NavbarType, applicationReviewBtn.Name )}></Item>
                </Stack>
                <Stack direction ='row' spacing = {2} sx={{ flexGrow: 0  }}>
                    <SignItem name={NavbarType}></SignItem>
                    <SignUpItem name={NavbarType}></SignUpItem>
                    <LogOutItem name={NavbarType}></LogOutItem>
                </Stack>
            </Toolbar>
        </AppBar>
        </Box>
        
    )
}

export default Navbar;