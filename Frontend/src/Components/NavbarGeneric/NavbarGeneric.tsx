import React from "react";

type NavbarGenericProps = {
    text: string;
}
const NavbarGeneric = ({ text }: NavbarGenericProps): React.JSX.Element => <button>{ text }</button>;

export default NavbarGeneric;