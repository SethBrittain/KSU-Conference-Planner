import { RouteObject } from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import SignUpPage2 from "./Components/Pages/SignUpPage2/SignUpPage2";
import SignUpPage1 from "./Components/Pages/SignUpPage/SignUpPage1";
import AboutPage from "./Components/Pages/AboutPage/AboutPage";
import ComponentTest from "./Components/Pages/ComponentTest/ComponentTest";

type CustomRouteObject = RouteObject & {
	name: string;
}

const RouteConfig: CustomRouteObject[] = [
	{
		path: '/',
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
		path: 'component-test',
		name: 'component-test',
		element: <ComponentTest/>
	},
	 {
	 	path: 'about',
	 	name: 'about',
		element: <AboutPage/>
	 }
]

export default RouteConfig;