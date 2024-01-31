import React from "react";

type MainInfoProps = {
    text: string;
}
const Error = ({ text }: MainInfoProps): React.JSX.Element => <button>{ text }</button>;

export default Error;