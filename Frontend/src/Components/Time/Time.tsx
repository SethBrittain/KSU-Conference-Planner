import React from "react";

type TimeProps = {
    text: string;
}

export const Time = ({ text }: TimeProps): React.JSX.Element => <button>{ text }</button>;;