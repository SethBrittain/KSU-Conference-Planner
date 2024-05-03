import React from 'react';
import './InputComponents.css';

/**
 * The information that is needed to create the TextInput component
 * If there is a question mark by an item, that means it is nullable
 */
type TextInputProps = {
	label: string;
	formValue: string;
	placeholder: string;
	labelPosition?: "top" | "left";
	inputAlignment?: "center" | "left";
	require: boolean;
	labelid?: string;
}

/**
 * A component that acts as space for text input by the user. To be used when the 
 * user only needs to input a small amount of text
 * @param props The items needed to create the component
 * @returns A textinput box for the web app
 */
const TextInput = (props: TextInputProps) : React.JSX.Element => {
	// Logs the position of the label
	console.log(props.labelPosition);
	/** The position of the label for the textinput */
	const position : string = props.labelPosition == "top" 
		? "flex flex-col py-2"
		: "flex flex-row align-start py-2";
	return (
		
		<div className={position}>
			<label
				className="text-gray-500 font-bold text-left py-2" id = {props.labelid}
			>
				{props.label}
			</label>
			<input required = {props.require}
				className={"ml-2 bg-white-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 items-center"}
				type="text"
				placeholder={props.placeholder}
				id={props.formValue}
				name={props.formValue}
			/>
		</div>
	)
}

export default TextInput;