import React from "react";

type NavbarGeneralAttendeeProps = {
    text: string;
}
const NavbarGeneralAttendee = ({ text }: NavbarGeneralAttendeeProps): React.JSX.Element => <button>{ text }</button>;

export default NavbarGeneralAttendee;