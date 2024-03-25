import Navbar from '../../Navbars/Navbar';
import GenericFooter from '../../GenericFooter/GenericFooter';
import AboutPage from './AboutPage';
import { render, screen } from "@testing-library/react"

test('Landing Page renders correctly', () => {
    render(<AboutPage></AboutPage>)
    const navBar = screen.getByRole(Navbar)
    const genericFooter  = screen.getByRole(GenericFooter)
    expect(navBar).toBeInTheDocument()
    expect(genericFooter).toBeInTheDocument()

});