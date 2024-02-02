import React from "react";

type NavbarGeneralAttendeeProps = {
    navStyle: string;
}
const NavbarGeneralAttendee = ({ navStyle }: NavbarGeneralAttendeeProps): React.JSX.Element => <button>{ navStyle }</button>;

export default NavbarGeneralAttendee;