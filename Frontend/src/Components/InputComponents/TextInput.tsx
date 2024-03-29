import React from 'react';
import './InputComponents.css';

type TextInputProps = {
	label: string;
	formValue: string;
	placeholder: string;
	labelPosition?: "top" | "left";
	require: boolean;
	labelid?: string;
}

const TextInput = (props: TextInputProps) : React.JSX.Element => {
	console.log(props.labelPosition);
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
				className="ml-2 bg-white-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
				type="text"
				placeholder={props.placeholder}
				id={props.formValue}
				name={props.formValue}
			/>
		</div>
	)
}

export default TextInput;