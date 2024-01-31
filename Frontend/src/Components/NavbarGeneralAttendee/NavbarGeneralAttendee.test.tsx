import React from "react";

type NavbarGeneralAttendanceProps = {
    text: string;
}
const Error = ({ text }: NavbarGeneralAttendanceProps): React.JSX.Element => <button>{ text }</button>;

export default Error;