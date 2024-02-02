import { render, screen } from "@testing-library/react"
import { Time } from "./Time"

test('Time renders correctly', () => {
    render(<Time text='TODO'></Time>)

    const firstTime = screen.getByRole("text", { name: /FirstTime/i})
    const secondTime = screen.getByRole("text", { name: /SecondTime/i})
    const thirdTime = screen.getByRole("text", { name: /ThirdTime/i})
    const fourthTime = screen.getByRole("text", { name: /FourthTime/i})
    const fifthTime = screen.getByRole("text", { name: /FifthTime/i})
    const sixthTime = screen.getByRole("text", { name: /SixthTime/i})
    const seventhTime = screen.getByRole("text", { name: /SeventhTime/i})

    expect(firstTime).toBeInTheDocument()
    expect(secondTime).toBeInTheDocument()
    expect(thirdTime).toBeInTheDocument()
    expect(fourthTime).toBeInTheDocument()
    expect(fifthTime).toBeInTheDocument()
    expect(sixthTime).toBeInTheDocument()
    expect(seventhTime).toBeInTheDocument()
}
)