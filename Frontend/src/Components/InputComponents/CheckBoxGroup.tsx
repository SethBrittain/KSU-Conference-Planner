import React from 'react';

type CheckBoxGroupProps ={
	mainLabel : string;
	columns : number;
	formValues : {[index:string] : string};
}

const CheckBoxGroup = (props: CheckBoxGroupProps) : React.JSX.Element => {
	const boxes : React.JSX.Element[] = [];

	Object.keys(props.formValues).forEach((key)=>{
		boxes.push(
			<li className="flex items-center p-2">
				<input
					className="m-2 form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
					type="checkbox"
					id={key}
					name={key}
				/>
				<label className="p-2" htmlFor={key}>{props.formValues[key]}</label>
			</li>
		)
	});

	return (		
		<div className="flex flex-col justify-start py-2">
			<label className="block text-gray-500 font-bold text-left pb-2">
				{props.mainLabel}
			</label>
			<ul style={{columns: props.columns}} className="w-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
				{boxes}
			</ul>
		</div>
	)
}

export default CheckBoxGroup;