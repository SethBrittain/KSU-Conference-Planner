import React, { ReactElement, useState } from "react";
import { Button } from "@mui/material";
import {ReactComponent as Icon} from '../Icon.svg';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import UserRole from "../../Utils/UserRole";

type NavbarItem = {
    name: string; 
    shown: boolean;
	path: string;
};

type NavbarProps = {
	userRole : UserRole
}

/**
 * This function is to make a populated array with current items
 * @param user the current users role
 * @returns the navbar items that should be shown
 */
function MakeNavItems( user: UserRole ): NavbarItem[] {
	var navItems:NavbarItem[] = [];
	var home:NavbarItem = {name: "Home", shown: true, path: "/"};
	var sessions:NavbarItem = {name: "Sessions", shown: true, path: "/sessions"};
	var about:NavbarItem = {name: "About", shown: true, path: "/about"};
	var faq:NavbarItem = {name: "FAQ", shown: true, path: "/faq"};
	var yourSchedule:NavbarItem = {name: "Your Schedule", shown: true, path: "/schedule"};
	var yourApplication:NavbarItem = {name: "Your Application", shown: true, path: "/apply"};
	var applicationReview:NavbarItem = {name: "Application Review", shown: true, path: "/review"};
	var scheduler:NavbarItem = {name: "Scheduler", shown: true, path: "/scheduler"};
	
	//These will always be shown
	navItems.push( home );
	navItems.push( sessions );
	navItems.push( about );
	navItems.push( faq );

	//By going through this switch the list will be populated with more items if needed
	switch (user){
		case UserRole.Admin:
			navItems.push( yourSchedule );
			navItems.push( yourApplication );
			navItems.push( applicationReview );
			navItems.push( scheduler );
			break;
		case UserRole.Anonymous:
			break;
		case UserRole.General:
			navItems.push( yourSchedule );
			break;
		case UserRole.Presenter:
			navItems.push( yourApplication );
			break;
		case UserRole.Reviewer:
			navItems.push( applicationReview );
			break;
		case UserRole.Scheduler:
			navItems.push( scheduler );
			break;
	}

	return navItems;
}

/**
 * This checks the current path you are on to see if sign in button should be shown
 * @param user the current users role
 * @returns Null if element is not shown, button if it is shown
 */
function SignItem( user: UserRole ): ReactElement | null {
    if(user === UserRole.Anonymous && document.location.pathname !== "/signup"){ //The Page Address may need to change
        return <a href="/signIn"> <Button style={{ color: '#000000', fontSize: '.8rem'}} >Sign In</Button></a>;
    }
    return null;
}

/**
 * This checks the current path you are on to see if sign up button should be shown
 * @param user the current users role
 * @returns Null if element is not shown, button if it is shown
 */
function SignUpItem(user: UserRole): ReactElement | null {
    if(user === UserRole.Anonymous && document.location.pathname !== "/signup"){ //The Page Address may need to change
        return <a href="/signup1"><Button style={{ color: '#FFFFFF', backgroundColor: '#512888', fontSize: '.8rem'}}>Sign Up</Button></a>;
    }
    return null;
}

/**
 * This checks the role you are to see if logout button should be shown
 * @param user the current users role
 * @returns Null if element is not shown, button if it is shown
 */
function LogOutItem(user: UserRole): ReactElement | null {
    if(user === UserRole.Anonymous){
        return null;
    }
    return <Button style={{ color: '#FFFFFF', backgroundColor: '#512888'}}>Sign Out</Button>;
}

/**
 * How the navbar should be shown get made here
 * @param userRole this is of type UserRole
 * @returns the navbar component
 */
const Navbar = ( {userRole}: NavbarProps) =>
{
	const [show, setShow] = useState(false);

	var NavBarItems : React.JSX.Element[] = [];

	const navItems : NavbarItem[] = MakeNavItems(userRole);

	//Loops through to check the pathname so that if you are on the page it will bold it
	navItems.forEach((item)=>{
		NavBarItems.push(<a href={item.path} className={
			item.shown ? (
				item.path == document.location.pathname
					? "font-bold"
					: ""
			) : "hidden"
		}>{item.name}</a>)
	}); 

	function changeShow() {
		setShow(!show);
	}

	const nav : React.JSX.Element =
		<div id="navbar" className="flex flex-col md:flex-row bg-white drop-shadow-lg items-center sticky top-0 py-4">
			<div className="flex items-center justify-between w-full md:w-auto">
				<Icon/>
				<h1 className="text-md md:text-xl">KSU Conference Planner</h1>
				<span className="md:hidden md:justify-self-left"><Button onClick={changeShow} style={{ outline: "solid 1px"}}><MenuIcon/></Button></span>
			</div>
			<div style={{ maxHeight: show ? "256px" : "0" }} className="flex flex-col lg:hidden navlinks text-[#637381] text-lg grow my-2 overflow-hidden">
				{NavBarItems}
			</div>
			<div className="hidden md:flex flex-row navlinks text-[#637381] text-lg grow my-2">
				{NavBarItems}
			</div>
			<div className="auth flex align-items-middle justify-between shrink">
				{SignItem(userRole)} &nbsp;
				{SignUpItem(userRole)}&nbsp;
				{LogOutItem(userRole)}
			</div>
		</div>;

    return nav;
}

export default Navbar;