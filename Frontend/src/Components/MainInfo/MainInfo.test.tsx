import { render, screen } from "@testing-library/react"
import MainInfo from "./MainInfo"

test('MainInfo renders correctly', () => {
    render(<MainInfo></MainInfo>)
    const picture = screen.getByRole('img')
    const heading = screen.getByRole('text', { name: /Heading/i})
    const description = screen.getByRole('text', { name: /Description/i})

    expect(picture).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
})