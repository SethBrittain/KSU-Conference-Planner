import { render, screen } from "@testing-library/react"
import { PhotosAndInfo } from "./PhotosAndInfo"

test('PhotosAndInfo renders correctly', () => {
    render(<PhotosAndInfo inverted={false} className={undefined}></PhotosAndInfo>)
    const picture = screen.getByRole('img')
    const description = screen.getByRole('text', { name: /Discription/i})

    expect(picture).toBeInTheDocument()
    expect(description).toBeInTheDocument()
})