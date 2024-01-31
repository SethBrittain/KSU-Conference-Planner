import React from "react";

type SignUpPage2Props = {
    text: string;
}
const SignUpPage2 = ({ text }: SignUpPage2Props): React.JSX.Element => <button>{ text }</button>;

export default SignUpPage2;