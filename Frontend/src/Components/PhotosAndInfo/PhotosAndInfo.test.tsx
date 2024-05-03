import { render, screen } from "@testing-library/react"
import PhotosAndInfo from "./PhotosAndInfo"

test('PhotosAndInfo renders correctly', () => {
    render(<PhotosAndInfo image = 'done' text='TODO' spacing={5} size={1} side={true}></PhotosAndInfo>)
    const picture = screen.getByRole('img')
    const description = screen.getByRole('text', { name: /Discription/i})

    expect(picture).toBeInTheDocument()
    expect(description).toBeInTheDocument()
})