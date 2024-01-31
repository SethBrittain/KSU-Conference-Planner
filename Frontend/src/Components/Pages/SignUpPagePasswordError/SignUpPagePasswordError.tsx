import React from "react";

type SignUpPagePasswordErrorProps = {
    text: string;
}
const SignUpPagePasswordError = ({ text }: SignUpPagePasswordErrorProps): React.JSX.Element => <button>{ text }</button>;

export default SignUpPagePasswordError;