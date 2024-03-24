import { RouteObject } from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import SignUpPage2 from "./Components/Pages/SignUpPage2/SignUpPage2";
import SignUpPage1 from "./Components/Pages/SignUpPage/SignUpPage1";
import ComponentTest from "./Components/Pages/ComponentTest/ComponentTest";

const RouteConfig: RouteObject[] = [
	{
		path: '/',
		element: <LandingPage/>,
	},
	{
		path: 'signup',
		element: <SignUpPage2/>
	},
	{
		path: 'signup1',
		element: <SignUpPage1/>
	},
	{
		path: 'component-test',
		element: <ComponentTest/>
	}
]

export default RouteConfig;