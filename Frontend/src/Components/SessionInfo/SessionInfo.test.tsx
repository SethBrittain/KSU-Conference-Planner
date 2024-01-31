import { render, screen } from "@testing-library/react"
import { SessionInfo } from "./SessionInfo.tsx"
import { MuiButton } from "../Button/Button"

test('SessionInfo renders correctly', () => {
    render(<SessionInfo></SessionInfo>)

    const sessionInfoButton = screen.getByRole(MuiButton)
    const nameOfSession = screen.getByRole('text', { name: /SessionName/i})
    const description = screen.getByRole('text', { name: /SessionDescription/i})

    expect(sessionInfoButton).toBeInTheDocument()
    expect(nameOfSession).toBeInTheDocument()
    expect(description).toBeInTheDocument()
})