import * as React from 'react';
export const Checkbox = () : JSX.Element => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }
    return(
        <div>
           <MakeCheckbox
            label="My Value"
            value ={checked}
            onChange={handleChange}           
           />
        </div>
    );
};
const MakeCheckbox = ({label,value,onChange}:{label:any,value:any,onChange:any}) =>
{
    return(
<label>
    <input type = "checkbox" checked={value} onChange={onChange}/>
    {label}
</label>
    );
};
export default MakeCheckbox;