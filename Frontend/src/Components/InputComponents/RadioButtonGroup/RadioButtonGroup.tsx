import './RadioButtonGroup.css';

/**
 * The items needed to create the RadioButtonGroup Component
 */
type RadioButtonGroupProps = {
	label: string;
	columns: number;
	formValue: string;
	values: string[];
	labelPosition?: "left" | "top";
	require: boolean;
	labelid?: string;
}

/**
 * Creates the component for the RadioButtonGroup
 * @param props The information needed to create the component
 * @returns The component for the RadioButtonGroup
 */
const RadioButtonGroup = (props : RadioButtonGroupProps) : React.JSX.Element => {
	//The position of the label in the RadioButtonGroup
	var labelPosititioning = props.labelPosition === "top" 
		? "block md:flex-col md:items-center py-2"
		: "block md:flex md:items-center py-2" 
	return (
		<div className={labelPosititioning}>
			<div>
				<label className="block text-gray-500 font-bold text-left mb-1 md:mb-0 pb-2" form="inline-full-name" id={props.labelid}>
				 {props.label}
				</label>
			</div>
			<ul 
			style={{columns: props.columns}}
			className="w-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
				{
					props.values.map((value, index) => {
						return (
							<li key={index} className="flex items-center p-2">
								<input required = {props.require}
									type="radio" 
									id={value} name={props.label} value={value} className="m-2 form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
								<label htmlFor={value} className="p-2">{value}</label>
							</li>
						);
					})
				}
			</ul>
		</div>
	);
}

export default RadioButtonGroup;