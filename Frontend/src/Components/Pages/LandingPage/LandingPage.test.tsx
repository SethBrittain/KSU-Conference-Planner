import { render, screen } from "@testing-library/react"
import LandingPage from "./LandingPage"
import Navbar from "../../Navbars/Navbar";
import { MainInfo } from "../../MainInfo/MainInfo"
import { MuiButton } from "../../Button/Button"
import PhotosAndInfo from "../../PhotosAndInfo/PhotosAndInfo"

test('Landing Page renders correctly', () => {
    render(<LandingPage></LandingPage>)
    const navBar = screen.getByRole("Navbar")
    const picture = screen.getByRole('img')
    const currentSessions = screen.getByRole("MuiButton", {name: /CurrentSessionsButton/i} )
    const joinEvent = screen.getByRole("MuiButton", {name: /JoinEventButton/i})
    const MainInfo1 = screen.getByRole("MainInfo", {name: /MainInfo1/i})
    const MainInfo2 = screen.getByRole("MainInfo", {name: /MainInfo2/i})
    const MainInfo3 = screen.getByRole("MainInfo", {name: /MainInfo3/i})
    const Photos = screen.getByRole("PhotosAndInfo")

    expect(navBar).toBeInTheDocument()
    expect(picture).toBeInTheDocument()
    expect(currentSessions).toBeInTheDocument()
    expect(joinEvent).toBeInTheDocument()
    expect(MainInfo1).toBeInTheDocument()
    expect(MainInfo2).toBeInTheDocument()
    expect(MainInfo3).toBeInTheDocument()
    expect(Photos).toBeInTheDocument()
});