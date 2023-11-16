import { render, screen } from "@testing-library/react"
import { NavbarsGeneralAttendee } from "../../NavbarGeneric/Navbar"
import { MainInfo } from "../../MainInfo/MainInfo"
import { Button } from "../../Button/Button"
import { Checkbox } from "../../CheckBox/Checkbox"
import { PhotosAndInfo } from "../../PhotosAndInfo/PhotosAndInfo"
import {Schedule} from "../Schedule/Schedule"
import {SessionInfo} from "../Time/Time"

test('PersonalSchedulePage renders correctly', () => {
    render(<PersonalSchedulePage></PersonalSchedulePage>)
    //Navbar render test
    const navBar = screen.getByRole(NavbarsGeneralAttendee) 
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
    const drop = screen.getByRole(Button)
    expect(drop).toBeInTheDocument()
});