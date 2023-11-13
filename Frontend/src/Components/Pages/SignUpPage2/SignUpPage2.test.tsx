import { render, screen } from "@testing-library/react"
import { SignUpPage2 } from "./SignUpPage2"
import { NavbarsGeneric } from "../../Navbar/Navbar"
import { MainInfo } from "../../MainInfo/MainInfo"
import { Button } from "../../Button/Button"
import { Checkbox } from "../../CheckBox/Checkbox"
import { PhotosAndInfo } from "../../PhotosAndInfo/PhotosAndInfo"

test('SignUpPage2 Navbar renders correctly', () => {
    render(<SignUpPage2></SignUpPage2>)
    //Navbar render test
    const navBar = screen.getByRole(NavbarsGeneric) 
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveStyle('navstyle: Logout')

    //Button test
    const signInButton = screen.getByRole('Button', {name: /Next/i})
    expect(signInButton).toBeInTheDocument()

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