import { RouteObject } from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import SignUpPage2 from "./Components/Pages/SignUpPage2/SignUpPage2";
import SignUpPage1 from "./Components/Pages/SignUpPage/SignUpPage1";
import AboutPage from "./Components/Pages/AboutPage/AboutPage";
import ComponentTest from "./Components/Pages/ComponentTest/ComponentTest";
import { FAQ } from "./Components/Pages/FAQ/FAQ";
import { NotFound } from "./Components/Pages/NotFound/NotFound";
import SignUpPage3 from "./Components/Pages/SignUpPage3/SignUpPage3";
import SessionsPage from "./Components/Pages/SessionsPage/SessionsPage";

type CustomRouteObject = RouteObject & {
	name: string;
}

const RouteConfig: CustomRouteObject[] = [
	{
		path: '/',
		errorElement:<NotFound/>,
		name: 'home',
		element: <LandingPage/>,
	},
	{
		path: 'signup',
		name:'signup2',
		element: <SignUpPage2/>
	},
	{
		path: 'signup1',
		name: 'signup1',
		element: <SignUpPage1/>
	},
	{
		path: 'signup3',
		name: 'signup3',
		element: <SignUpPage3/>
	},
	{
		path: 'component-test',
		name: 'component-test',
		element: <ComponentTest/>
	},
	{
		path: 'sessions',
		name: 'sessions',
	    element: <SessionsPage/>
	},
	{
	 	path: 'about',
	 	name: 'about',
		element: <AboutPage/>
	},
	{
		path: 'faq',
		name: 'faq',
	    element: <FAQ/>
	},
	
	 
]

export default RouteConfig;