import { render, screen } from "@testing-library/react"
import { Schedule } from "./Schedule"

test('Schedule renders correctly', () => {
    render(<Schedule></Schedule>)

    const roomNumber = screen.getByRole('text', { name: /RoomNumber/i})
    const title = screen.getByRole('text', { name: /Title/i})
    const presenterName = screen.getByRole('text', { name: /presenterName/i})
    const timeFrame = screen.getByRole('text', { name: /TimeFrame/i})

    expect(roomNumber).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(presenterName).toBeInTheDocument()
    expect(timeFrame).toBeInTheDocument()
})