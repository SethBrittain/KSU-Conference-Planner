import React from "react";

type RadioButtonItemProps = {
    text: string;
}
const RadioButtonItem = ({ text }: RadioButtonItemProps): React.JSX.Element => <button>{ text }</button>;

export default RadioButtonItem;