import React from "react";

type SignUpPageEmailErrorProps = {
    text: string;
}
const SignUpPageEmailError = ({ text }: SignUpPageEmailErrorProps): React.JSX.Element => <button>{ text }</button>;

export default SignUpPageEmailError;