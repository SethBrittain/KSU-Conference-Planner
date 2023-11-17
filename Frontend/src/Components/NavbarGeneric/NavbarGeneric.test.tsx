import { render, screen } from "@testing-library/react"
import { NavbarsGeneric } from "./NavbarGeneric";
import { Button } from "../Button/Button";

test('Navbar renders correctly', () => {
    render(<NavbarsGeneric navStyle='about' className={undefined}></NavbarsGeneric>)
    const navItem1 = screen.getByText('Home')
    const navItem2 = screen.getByText('Sessions')
    const navItem3 = screen.getByText('About')
    const navItem4 = screen.getByText('FAQ')
    const navItem5 = screen.getByText('SignUp')
    const navItem6 = screen.getByText('SignIn')
    expect(navItem1).toBeInTheDocument()
    expect(navItem2).toBeInTheDocument()
    expect(navItem3).toBeInTheDocument()
    expect(navItem4).toBeInTheDocument()
    expect(navItem5).toBeInTheDocument()
    expect(navItem6).toBeInTheDocument()
});

test('Navbar items are buttons', () => {
    render(<NavbarsGeneric navStyle='about' className={undefined}></NavbarsGeneric>)
    const navItem1 = screen.getByRole('Button', { name: /Home/i})
    const navItem2 = screen.getByRole('Button', { name: /Sessions/i})
    const navItem3 = screen.getByRole('Button', { name: /About/i})
    const navItem4 = screen.getByRole('Button', { name: /FAQ/i})
    const navItem5 = screen.getByRole('Button', { name: /SignUp/i})
    const navItem6 = screen.getByRole('Button', { name: /SignIn/i})
    expect(navItem1).toBeInTheDocument()
    expect(navItem2).toBeInTheDocument()
    expect(navItem3).toBeInTheDocument()
    expect(navItem4).toBeInTheDocument()
    expect(navItem5).toBeInTheDocument()
    expect(navItem6).toBeInTheDocument()
});

test('Navbar about bolded', () => {
    render(<NavbarsGeneric navStyle='about' className={undefined}></NavbarsGeneric>)
    
    const navBar = screen.getByRole(NavbarsGeneric) 
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveStyle('navstyle: about')

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
    render(<NavbarsGeneric navStyle='sessions' className={undefined}></NavbarsGeneric>)
    
    const navBar = screen.getByRole(NavbarsGeneric) 
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
    render(<NavbarsGeneric navStyle='FAQ' className={undefined}></NavbarsGeneric>)
    
    const navBar = screen.getByRole(NavbarsGeneric) 
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

test('Navbar home bolded', () => {
    render(<NavbarsGeneric navStyle='home' className={undefined}></NavbarsGeneric>)
    
    const navBar = screen.getByRole(NavbarsGeneric) 
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveStyle('navstyle: home')

    //Bolded
    const homeButton = screen.getByRole(Button, { name: /'home'/i })
    expect(homeButton).toHaveProperty('textClassName: !text-[#111928]')

    //Not Bolded
    const sessionsButton = screen.getByRole('Button', { name: /Sessions/i})
    const aboutButton = screen.getByRole('Button', { name: /About/i})
    const FAQButton = screen.getByRole('Button', { name: /FAQ/i})

    expect(sessionsButton).toHaveProperty('textClassName: !text-[#637381]')
    expect(aboutButton).toHaveProperty('textClassName: !text-[#637381]')
    expect(FAQButton).toHaveProperty('textClassName: !text-[#637381]')
});

test('Navbar will not have signUp or signIn buttons', () => {
    render(<NavbarsGeneric navStyle='logout' className={undefined}></NavbarsGeneric>)
    
    const navBar = screen.getByRole(NavbarsGeneric) 
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveStyle('navstyle: logout')

    const SignUpButton = screen.getByRole(Button, { name: /'SignUp'/i })
    const SignInButton = screen.getByRole(Button, { name: /'SignIn'/i })
    expect(SignUpButton).not.toBeInTheDocument()
    expect(SignInButton).not.toBeInTheDocument()

    //Not Bolded
    const homeButton = screen.getByRole('Button', { name: /Home/i})
    const sessionsButton = screen.getByRole('Button', { name: /Sessions/i})
    const aboutButton = screen.getByRole('Button', { name: /About/i})
    const FAQButton = screen.getByRole('Button', { name: /FAQ/i})

    expect(homeButton).toHaveProperty('textClassName: !text-[#637381]')
    expect(sessionsButton).toHaveProperty('textClassName: !text-[#637381]')
    expect(aboutButton).toHaveProperty('textClassName: !text-[#637381]')
    expect(FAQButton).toHaveProperty('textClassName: !text-[#637381]')
});