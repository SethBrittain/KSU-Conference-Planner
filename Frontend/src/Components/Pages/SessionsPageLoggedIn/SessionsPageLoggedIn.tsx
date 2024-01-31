import React from "react";

type SessionsPageLoggedInProps = {
    text: string;
}
const SessionsPageLoggedIn = ({ text }: SessionsPageLoggedInProps): React.JSX.Element => <button>{ text }</button>;

export default SessionsPageLoggedIn;