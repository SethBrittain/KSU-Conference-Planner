import React, { ReactElement, useState } from "react";
import { AppBar, Toolbar, Typography, Stack, Button, Box} from "@mui/material";
import {ReactComponent as Icon} from '../Icon.svg';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import RouteConfig from '../../RouteConfig';

type NavbarItem = {
    name: string; 
    shown: boolean;
	path: string;
};

const Navbar = () =>
{
	const [show, setShow] = useState(false);

	var NavBarItems : React.JSX.Element[] = [];

	const navItems : NavbarItem[] = [
		{name: "Home", shown: true, path: "/"},
		{name: "Sessions", shown: true, path: "/sessions"},
		{name: "About", shown: true, path: "/about"},
		{name: "FAQ", shown: true, path: "/faq"},
		{name: "Your Schedule", shown: true, path: "/schedule"},
		{name: "Your Application", shown: true, path: "/apply"},
		{name: "Application Review", shown: true, path: "/review"}
	];

	navItems.forEach((item)=>{
		NavBarItems.push(<a href={item.path} className={
			item.shown ? (
				item.path == document.location.pathname
					? "font-bold"
					: ""
			) : "hidden"
		}>{item.name}</a>)
	});

	const newVersion : React.JSX.Element =
		<div id="navbar" className="flex flex-col md:flex-row bg-white drop-shadow-lg items-center sticky top-0 py-4">
			<div className="flex items-center justify-between w-full md:w-auto">
				<Icon/>
				<h1 className="text-md md:text-xl">KSU Conference Planner</h1>
				<span className="md:hidden md:justify-self-left"><Button onClick={()=>{setShow(!show)}} style={{ outline: "solid 1px"}}><MenuIcon/></Button></span>
			</div>
			<div style={{ maxHeight: show ? "256px" : "0" }} className="flex flex-col lg:hidden navlinks text-[#637381] text-lg grow my-2 overflow-hidden">
				{NavBarItems}
			</div>
			<div className="hidden md:flex flex-row navlinks text-[#637381] text-lg grow my-2">
				{NavBarItems}
			</div>
			<div className="auth flex align-items-middle justify-between shrink">
				<Button style={{ color: '#000000', fontSize: '.8rem'}} >Sign In</Button>&nbsp;
				<Button style={{ color: '#FFFFFF', backgroundColor: '#512888', fontSize: '.8rem'}}>Sign Up</Button>&nbsp;
				<Button style={{ color: '#FFFFFF', backgroundColor: '#512888'}}>Sign Out</Button>
			</div>
		</div>;

    return newVersion;
}

export default Navbar;