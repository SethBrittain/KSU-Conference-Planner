import { render, screen } from "@testing-library/react"
import { SignUpPage3 } from "./SignUpPage3"
import { NavbarsGeneric } from "../../NavbarGeneric/NavbarGeneric"
import { Button } from "../../Button/Button"

test('SignUpPage Navbar renders correctly', () => {
    render(<SignUpPage3></SignUpPage3>)
    //Navbar render test
    const navBar = screen.getByRole(NavbarsGeneric) 
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveStyle('navstyle: Logout')

    //Button test
    const signInButton = screen.getByRole(Button, {name: /Finish Sign Up/i})
    expect(signInButton).toBeInTheDocument()

    //Text test
    const welcomeText = screen.getByText("Welcome!")
    expect(welcomeText).toBeInTheDocument()
    const createAccountText = screen.getByText("Create an account for the K-State Computer Science Conference")
    expect(createAccountText).toBeInTheDocument()
    const dietText = screen.getByText("Any dietary restrictions?")
    expect(dietText).toBeInTheDocument()
    const accomidationText = screen.getByText("Do you need any accommodations to attend the event?")
    expect(accomidationText).toBeInTheDocument()
    
    //Forms Test
    const dietForm = screen.getByRole('form', {name: /Diet/i})
    expect(dietForm).toBeInTheDocument()
    const accomidationForm = screen.getByRole('form', {name: /Accomidations/i})
    expect(accomidationForm).toBeInTheDocument()
});