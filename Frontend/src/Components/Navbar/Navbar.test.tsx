import { render, screen } from "@testing-library/react"
import { NavbarsGeneric } from "./Navbar";
import { Button } from "../Button/Button";

test('Navbar renders correctly', () => {
    render(<NavbarsGeneric navStyle='about' className={undefined}></NavbarsGeneric>)
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
});

test('Navbar items are buttons', () => {
    render(<NavbarsGeneric navStyle='about' className={undefined}></NavbarsGeneric>)
    const navItem1 = screen.getByRole('Button', { name: /Home/i})
    const navItem2 = screen.getByRole('Button', { name: /Sessions/i})
    const navItem3 = screen.getByRole('Button', { name: /About/i})
    const navItem4 = screen.getByRole('Button', { name: /FAQ/i})
    const navItem5 = screen.getByRole('Button', { name: /Logout/i})
    expect(navItem1).toBeInTheDocument()
    expect(navItem2).toBeInTheDocument()
    expect(navItem3).toBeInTheDocument()
    expect(navItem4).toBeInTheDocument()
    expect(navItem5).toBeInTheDocument()
});

test('Navbar about bolded', () => {
    render(<NavbarsGeneric navStyle='about' className={undefined}></NavbarsGeneric>)
    const navItem1 = screen.getByRole('Button', { name: /Home/i})
    const navItem2 = screen.getByRole('Button', { name: /Sessions/i})
    const navItem3 = screen.getByRole('Button', { name: /About/i})
    const navItem4 = screen.getByRole('Button', { name: /FAQ/i})
    const navItem5 = screen.getByRole('Button', { name: /Logout/i})
    expect(navItem1).
    expect(navItem2).toBeInTheDocument()
    expect(navItem3).toBeInTheDocument()
    expect(navItem4).toBeInTheDocument()
    expect(navItem5).toBeInTheDocument()
});