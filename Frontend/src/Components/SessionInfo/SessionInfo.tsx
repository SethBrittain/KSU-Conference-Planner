import React from "react";

type SessionInfoProps = {
    text: string;
}
const SessionInfo = ({ text }: SessionInfoProps): React.JSX.Element => <button>{ text }</button>;

export default SessionInfo;