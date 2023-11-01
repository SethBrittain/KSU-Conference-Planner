import { render, screen } from "@testing-library/react"
import Navbar from "./Navbar"
import Button from "../Button/Button"

test('Navbar renders correctly', () => {
    render(<Navbar></Navbar>)
    const navItem1 = screen.getByText('Home')
    const navItem2 = screen.getByText('Sessions')
    const navItem3 = screen.getByText('About')
    const navItem4 = screen.getByText('FAQ')
    const navItem5 = screen.getByText('Logout')
    expect(navItem1).toBeInTheDocument()
    expect(navItem2).toBeInTheDocument()
    expect(navItem3).toBeInTheDocument()
    expect(navItem4).toBeInTheDocument()
    expect(navItem5).toBeInTheDocument()
})

test('Navbar items are buttons', () => {
    render(<Navbar></Navbar>)
    const navItem1 = screen.getByRole('button', { name: /Home/i})
    const navItem2 = screen.getByRole('button', { name: /Sessions/i})
    const navItem3 = screen.getByRole('button', { name: /About/i})
    const navItem4 = screen.getByRole('button', { name: /FAQ/i})
    const navItem5 = screen.getByRole('button', { name: /Logout/i})
    expect(navItem1).toBeInTheDocument()
    expect(navItem2).toBeInTheDocument()
    expect(navItem3).toBeInTheDocument()
    expect(navItem4).toBeInTheDocument()
    expect(navItem5).toBeInTheDocument()
})