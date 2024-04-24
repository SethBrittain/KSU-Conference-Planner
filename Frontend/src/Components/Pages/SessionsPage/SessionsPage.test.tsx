import { render, screen } from "@testing-library/react"
import Navbar from "../../Navbars/Navbar";
import SessionsPage from "../SessionsPage/SessionsPage"

test('SessionsPage renders correctly', () => {
    render(<SessionsPage></SessionsPage>)

    const text = screen.getByText("Sessions")

    const time = screen.getByRole("Time", { name: /Times/i})
    const sessionInfo = screen.getByRole("SessionInfo", { name: /Info/i})
    const sessionOne = screen.getByRole("Schedule", { name: /SessionOne/i})
    const sessionTwo = screen.getByRole("Schedule", { name: /SessionTwo/i})
    const sessionThree = screen.getByRole("Schedule", { name: /SessionThree/i})
    
    //Navbar test
    const navBar = screen.getByRole("Navbar") 
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveStyle('navstyle: sessions')

    expect(time).toBeInTheDocument()
    expect(sessionInfo).toBeInTheDocument()
    expect(sessionOne).toBeInTheDocument()
    expect(sessionTwo).toBeInTheDocument()
    expect(sessionThree).toBeInTheDocument()

    expect(text).toBeInTheDocument()
})