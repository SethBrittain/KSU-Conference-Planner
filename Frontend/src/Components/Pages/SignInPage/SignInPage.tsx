import React from "react";

type SignInPageProps = {
    text: string;
}
const SignInPage = ({ text }: SignInPageProps): React.JSX.Element => <button>{ text }</button>;

export default SignInPage;