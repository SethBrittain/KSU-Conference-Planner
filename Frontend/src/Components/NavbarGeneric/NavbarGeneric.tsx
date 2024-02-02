import React from "react";

type NavbarGenericProps = {
    navStyle: string;
}
const NavbarGeneric = ({ navStyle }: NavbarGenericProps): React.JSX.Element => <button>{ navStyle }</button>;

export default NavbarGeneric;