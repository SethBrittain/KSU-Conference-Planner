import { render, screen } from "@testing-library/react"
import { SignInPage } from "./SignInPage"
import { NavbarsGeneric } from "../../NavbarGeneric/NavbarGeneric"

test('SignUpPage Navbar renders correctly', () => {
    render(<SignInPage></SignInPage>)
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
    const welcomeText = screen.getByText("Welcome Back")
    expect(welcomeText).toBeInTheDocument()
    const signUpText = screen.getByText("New Here?")
    expect(signUpText).toBeInTheDocument()
    const SignInText = screen.getByText("Sign In")
    expect(SignInText).toBeInTheDocument()
    const forgotPassword = screen.getByText("Forgot Password?")
    expect(forgotPassword).toBeInTheDocument()
    
    //Forms Test
    const emailForm = screen.getByRole('form', {name: /Email Address/i})
    expect(emailForm).toBeInTheDocument()
    const passwordForm = screen.getByRole('form', {name: /Your Password/i})
    expect(passwordForm).toBeInTheDocument()
});