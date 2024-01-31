import React from "react";

type SessionsPageProps = {
    text: string;
}
const SessionsPage = ({ text }: SessionsPageProps): React.JSX.Element => <button>{ text }</button>;

export default SessionsPage;