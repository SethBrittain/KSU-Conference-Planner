import React from "react";

type ErrorProps = {
    text: string;
}
const Error = ({ text }: ErrorProps): React.JSX.Element => <button>{ text }</button>;

export default Error;