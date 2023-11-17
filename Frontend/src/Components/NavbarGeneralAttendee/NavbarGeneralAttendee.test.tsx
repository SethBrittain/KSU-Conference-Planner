import { render, screen } from "@testing-library/react"
import { NavbarsGeneralAttendee } from "./NavbarGeneralAttendee";
import { Button } from "../Button/Button";

test('Navbar renders correctly', () => {
    render(<NavbarsGeneralAttendee navStyle='Home' className={undefined}></NavbarsGeneralAttendee>)
    const navItem1 = screen.getByText('Home')
    const navItem2 = screen.getByText('Sessions')
    const navItem3 = screen.getByText('About')
    const navItem4 = screen.getByText('FAQ')
    const navItem5 = screen.getByText('Your Schedule')
    const navItem6 = screen.getByText('LogOut')
    expect(navItem1).toBeInTheDocument()
    expect(navItem2).toBeInTheDocument()
    expect(navItem3).toBeInTheDocument()
    expect(navItem4).toBeInTheDocument()
    expect(navItem5).toBeInTheDocument()
    expect(navItem6).toBeInTheDocument()
});

test('Navbar items are buttons', () => {
    render(<NavbarsGeneralAttendee navStyle='Home' className={undefined}></NavbarsGeneralAttendee>)
    const navItem1 = screen.getByRole('Button', { name: /Home/i})
    const navItem2 = screen.getByRole('Button', { name: /Sessions/i})
    const navItem3 = screen.getByRole('Button', { name: /About/i})
    const navItem4 = screen.getByRole('Button', { name: /FAQ/i})
    const navItem5 = screen.getByRole('Button', { name: /LogOut/i})
    expect(navItem1).toBeInTheDocument()
    expect(navItem2).toBeInTheDocument()
    expect(navItem3).toBeInTheDocument()
    expect(navItem4).toBeInTheDocument()
    expect(navItem5).toBeInTheDocument()
});

test('Navbar home bolded', () => {
    render(<NavbarsGeneralAttendee navStyle='Home' className={undefined}></NavbarsGeneralAttendee>)
    
    const navBar = screen.getByRole(NavbarsGeneralAttendee) 
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveStyle('navstyle: home')

    //Bolded
    const aboutButton = screen.getByRole(Button, { name: /'About'/i })
    expect(aboutButton).toHaveProperty('textClassName: !text-[#111928]')

    //Not Bolded
    const FAQButton = screen.getByRole('Button', { name: /FAQ/i})
    const sessionsButton = screen.getByRole('Button', { name: /Sessions/i})
    const homeButton = screen.getByRole('Button', { name: /Home/i})

    expect(FAQButton).toHaveProperty('textClassName: !text-[#637381]')
    expect(sessionsButton).toHaveProperty('textClassName: !text-[#637381]')
    expect(homeButton).toHaveProperty('textClassName: !text-[#637381]')
});

test('Navbar sessions bolded', () => {
    render(<NavbarsGeneralAttendee navStyle='sessions' className={undefined}></NavbarsGeneralAttendee>)
    
    const navBar = screen.getByRole(NavbarsGeneralAttendee) 
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveStyle('navstyle: sessions')

    //Bolded
    const sessionsButton = screen.getByRole(Button, { name: /'Sessions'/i })
    expect(sessionsButton).toHaveProperty('textClassName: !text-[#111928]')

    //Not Bolded
    const FAQButton = screen.getByRole('Button', { name: /FAQ/i})
    const aboutButton = screen.getByRole('Button', { name: /About/i})
    const homeButton = screen.getByRole('Button', { name: /Home/i})

    expect(FAQButton).toHaveProperty('textClassName: !text-[#637381]')
    expect(aboutButton).toHaveProperty('textClassName: !text-[#637381]')
    expect(homeButton).toHaveProperty('textClassName: !text-[#637381]')
});

test('Navbar FAQ bolded', () => {
    render(<NavbarsGeneralAttendee navStyle='FAQ' className={undefined}></NavbarsGeneralAttendee>)
    
    const navBar = screen.getByRole(NavbarsGeneralAttendee) 
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveStyle('navstyle: FAQ')

    //Bolded
    const FAQButton = screen.getByRole(Button, { name: /'FAQ'/i })
    expect(FAQButton).toHaveProperty('textClassName: !text-[#111928]')

    //Not Bolded
    const sessionsButton = screen.getByRole('Button', { name: /Sessions/i})
    const aboutButton = screen.getByRole('Button', { name: /About/i})
    const homeButton = screen.getByRole('Button', { name: /Home/i})

    expect(sessionsButton).toHaveProperty('textClassName: !text-[#637381]')
    expect(aboutButton).toHaveProperty('textClassName: !text-[#637381]')
    expect(homeButton).toHaveProperty('textClassName: !text-[#637381]')
});

test('Navbar about bolded', () => {
    render(<NavbarsGeneralAttendee navStyle='about' className={undefined}></NavbarsGeneralAttendee>)
    
    const navBar = screen.getByRole(NavbarsGeneralAttendee) 
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveStyle('navstyle: home')

    //Bolded
    const aboutButton = screen.getByRole(Button, { name: /'about'/i })
    expect(aboutButton).toHaveProperty('textClassName: !text-[#111928]')

    //Not Bolded
    const sessionsButton = screen.getByRole('Button', { name: /Sessions/i})
    const homeButton = screen.getByRole('Button', { name: /Home/i})
    const FAQButton = screen.getByRole('Button', { name: /FAQ/i})

    expect(sessionsButton).toHaveProperty('textClassName: !text-[#637381]')
    expect(homeButton).toHaveProperty('textClassName: !text-[#637381]')
    expect(FAQButton).toHaveProperty('textClassName: !text-[#637381]')
});