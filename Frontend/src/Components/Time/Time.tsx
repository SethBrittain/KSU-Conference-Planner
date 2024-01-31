import React from "react";

type TimeProps = {
    text: string;
}
const Time = ({ text }: TimeProps): React.JSX.Element => <button>{ text }</button>;

export default Time;