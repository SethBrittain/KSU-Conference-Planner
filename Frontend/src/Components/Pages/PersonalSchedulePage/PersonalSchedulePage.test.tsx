import { render, screen } from "@testing-library/react"
import Navbar from "../../Navbars/Navbar"
import { MuiButton } from "../../Button/Button"
import Schedule from "../../Schedule/Schedule"
import { SessionInfo } from "../../SessionInfo/SessionInfo"
import PersonalSchedulePage from "./PersonalSchedulePage"
/**
 * Test for the personal schedule page
 */
test('PersonalSchedulePage renders correctly', () => {
    render(<PersonalSchedulePage></PersonalSchedulePage>)
    //Navbar render test
    const navBar = screen.getByRole(Navbar) 
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveStyle('navstyle: Your Schedule')
    //Text
    const yourSchedule = screen.getByText("Your Schedule")
    expect(yourSchedule).toBeInTheDocument()

    //Time render test
    const sessionInfo = screen.getByRole(SessionInfo)
    expect(SessionInfo).toBeInTheDocument()
    //Schedule render test
    const schedule = screen.getByRole(Schedule)
    expect(schedule).toBeInTheDocument()
    //Button render test
    const drop = screen.getByRole(MuiButton)
    expect(drop).toBeInTheDocument()
});