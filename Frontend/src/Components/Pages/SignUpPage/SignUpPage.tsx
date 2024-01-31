import React from "react";

type SignUpPageProps = {
    text: string;
}
const SignUpPage = ({ text }: SignUpPageProps): React.JSX.Element => <button>{ text }</button>;

export default SignUpPage;