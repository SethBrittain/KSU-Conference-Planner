import { render, screen } from "@testing-library/react"
import { MainInfo } from "./MainInfo"

test('MainInfo renders correctly', () => {
    render(<MainInfo 
        image='https://source.unsplash.com/random'
        title='Test Title'
        description='This is a test description. I am not great at writing these. Hope this works'/>)
    const picture = screen.getByRole('img')
    const heading = screen.getByRole('text', { name: /Heading/i})
    const description = screen.getByRole('text', { name: /Description/i})

    expect(picture).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
})