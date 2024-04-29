import { render, screen } from "@testing-library/react"
import SignInPage from "./SignInPage";
import Navbar from "../../Navbars/Navbar";
//Sign-in page tests
test('SignUpPage Navbar renders correctly', () => {
    render(<SignInPage></SignInPage>)
    //Navbar render test
    const navBar = screen.getByRole("Navbar") 
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveStyle('')

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