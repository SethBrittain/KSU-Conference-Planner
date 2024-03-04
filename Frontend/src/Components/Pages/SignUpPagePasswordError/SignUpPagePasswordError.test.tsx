import { render, screen } from "@testing-library/react"
import SignUpPage from "../SignUpPage/SignUpPage1";
import Navbar from "../../Navbars/Navbar";
import Error  from "../../Error/Error"

test('SignUpPage Navbar renders correctly', () => {
    render(<SignUpPage></SignUpPage>)
    //Navbar render test
    const navBar = screen.getByRole(Navbar) 
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

    //Error Message Test
    const errorMsg = screen.getByText('Passwords Do Not Match')
    expect(errorMsg).toBeInTheDocument()
    const errorRectangle = screen.getByRole(Error)
    expect(errorRectangle).toBeInTheDocument()
});