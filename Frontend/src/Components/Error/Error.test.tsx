import { render, screen } from "@testing-library/react"
import Error  from "./Error"

test('Error renders correctly', () => {
    render(<Error text={"TESTING"}></Error>)
    const icon = screen.getByRole('img')
    const background = screen.getByRole('Rectangle')
    const text = screen.getByRole('text')

    expect(icon).toBeInTheDocument()
    expect(background).toBeInTheDocument()
    expect(text).toBeInTheDocument()
});