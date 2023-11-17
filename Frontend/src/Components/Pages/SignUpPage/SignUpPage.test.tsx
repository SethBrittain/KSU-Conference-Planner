import { render, screen } from "@testing-library/react"
import { SignUpPage } from "./SignUpPage"
import { NavbarsGeneric } from "../../NavbarGeneric/NavbarGeneric"
import { MainInfo } from "../../MainInfo/MainInfo"
import { Button } from "../../Button/Button"
import { PhotosAndInfo } from "../../PhotosAndInfo/PhotosAndInfo"

test('SignUpPage Navbar renders correctly', () => {
    render(<SignUpPage></SignUpPage>)
    //Navbar render test
    const navBar = screen.getByRole(NavbarsGeneric) 
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveStyle('navstyle: Logout')

    //Button test
    const signInButton = screen.getByRole('Button', {name: /Sign In/i})
    expect(signInButton).toBeInTheDocument()
    const signUpButton = screen.getByRole('Button', {name: /Sign Up/i})
    expect(signUpButton).toBeInTheDocument()

    //Text test
    const welcomeText = screen.getByText("Welcome!")
    expect(welcomeText).toBeInTheDocument()
    const createAccountText = screen.getByText("Create an account for the K-State Computer Science Conference")
    expect(createAccountText).toBeInTheDocument()
    const SignUpText = screen.getByText("SignUpText")
    expect(SignUpText).toBeInTheDocument()
    
    //Forms Test
    const emailForm = screen.getByRole('form', {name: /Email Address/i})
    expect(emailForm).toBeInTheDocument()
    const passwordForm = screen.getByRole('form', {name: /Your Password/i})
    expect(passwordForm).toBeInTheDocument()
    const confirmPasswordForm = screen.getByRole('form', {name: /Confirm Password/i})
    expect(confirmPasswordForm).toBeInTheDocument()
});