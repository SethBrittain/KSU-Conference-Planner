import { Button } from '../../Button/Button';
import { NavbarsGeneric } from '../../Navbar/Navbar';

const ComponentTest = (): React.JSX.Element => { 
    return (
        <div>
            <NavbarsGeneric Navstyle='about' className={undefined}></NavbarsGeneric>
            <Button text="test"></Button>
        </div>
    ); 
};

export default ComponentTest;