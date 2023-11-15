import { render, screen } from "@testing-library/react"
import { Time } from "./Time"
import { Button } from "../Button/Button"

test('PhotosAndInfo renders correctly', () => {
    render(<Time></Time>)

    const signUpforSession = screen.getByRole(Button, { name: /SignUp/i})
    const nameOfSession = screen.getByRole('text', { name: /SessionName/i})
    const description = screen.getByRole('text', { name: /SessionDescription/i})

    expect(signUpforSession).toBeInTheDocument()
    expect(nameOfSession).toBeInTheDocument()
    expect(description).toBeInTheDocument()
})