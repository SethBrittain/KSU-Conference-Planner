import { render, screen } from "@testing-library/react"
import SignUpPage2 from "./SignUpPage2"
import Navbar from "../../Navbars/Navbar"
import { MuiButton } from "../../Button/Button"
import { Checkbox } from "../../CheckBox/Checkbox"

test('SignUpPage2 Navbar renders correctly', () => {
    render(<SignUpPage2></SignUpPage2>)
    //Navbar render test
    const navBar = screen.getByRole(Navbar) 
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

    const firstName = screen.getByText("First Name")
    expect(firstName).toBeInTheDocument()
    const lastName = screen.getByText("Last Name")
    expect(lastName).toBeInTheDocument()
    const attendeeType = screen.getByText("Attendee Type")
    expect(attendeeType).toBeInTheDocument()
    const requestStatus = screen.getByText("Request Status")
    expect(requestStatus).toBeInTheDocument()
    const interestInPresenting = screen.getByText("Interest In Presenting")
    expect(interestInPresenting).toBeInTheDocument()
    //Buttons Test
    const underGrad = screen.getByRole(MuiButton, {name: /K-State Undergrad Student/i})
    const grad = screen.getByRole(MuiButton, {name: /K-State Graduate Student/i})
    const alumni = screen.getByRole(MuiButton, {name: /K-State Alumni/i})
    const faculty = screen.getByRole(MuiButton, {name: /K-State Faculty/i})
    const hsTeacher = screen.getByRole(MuiButton, {name: /High School Teacher/i})
    expect(underGrad).toBeInTheDocument()
    expect(grad).toBeInTheDocument()
    expect(alumni).toBeInTheDocument()
    expect(faculty).toBeInTheDocument()
    expect(hsTeacher).toBeInTheDocument()

    const presenting = screen.getByRole(MuiButton, {name: /Interested/i})
    const notPresenting = screen.getByRole(MuiButton, {name: /Not Interested/i})
    expect(presenting).toBeInTheDocument()
    expect(notPresenting).toBeInTheDocument()

    const next = screen.getByRole(MuiButton, {name: /Next/i})
    expect(next).toBeInTheDocument()
    //Checkbox
    const reviewer = screen.getByRole(Checkbox, {name: /Reviewer/i})
    const scheduler = screen.getByRole(Checkbox, {name: /scheduler/i})
    expect(reviewer).toBeInTheDocument()
    expect(scheduler).toBeInTheDocument()

    //Forms
    const first = screen.getByRole('form', {name: /First Name/i})
    expect(first).toBeInTheDocument()
    const last = screen.getByRole('form', {name: /Last Name/i})
    expect(last).toBeInTheDocument()

});