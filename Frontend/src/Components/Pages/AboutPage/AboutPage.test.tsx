import Navbar from '../../Navbars/Navbar';
import GenericFooter from '../../GenericFooter/GenericFooter';
import AboutPage from './AboutPage';
import { render, screen } from "@testing-library/react"

/**
 * The test for the About Page
 */
test('About Page renders correctly', () => {
    render(<AboutPage></AboutPage>)
    const navBar = screen.getByRole("Navbar")
    const genericFooter  = screen.getByRole("GenericFooter")
    expect(navBar).toBeInTheDocument()
    expect(genericFooter).toBeInTheDocument()

});