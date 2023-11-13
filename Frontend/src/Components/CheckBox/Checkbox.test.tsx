import { fireEvent, render, screen } from "@testing-library/react"
import { Checkbox } from "./Checkbox"

test('Checkbox Renders Correctly', () => {
    render(<Checkbox/>)
    const CheckboxItem1 = screen.getByText('My Value');
    const CheckboxItem2 = screen.getByRole(Checkbox);
    
    expect(CheckboxItem1).toBeInTheDocument();
    expect(CheckboxItem2).toBeInTheDocument();
    
});



