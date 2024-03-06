/* THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import LandingPage from './Components/Pages/LandingPage/LandingPage';
import SignUpPage2 from './Components/Pages/SignUpPage2/SignUpPage2';
import SignUpPage1 from './Components/Pages/SignUpPage/SignUpPage1';
import ComponentTest from './Components/Pages/ComponentTest/ComponentTest';
import Navbar from './Components/Navbars/Navbar';

// Setup router
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path='/' index element={<LandingPage/>}/>
			<Route path='SignUp' element={<SignUpPage2/>}/>
			<Route path='SignUp1' element={<SignUpPage1/>}/>
			<Route path='component-test' element={<ComponentTest/>}/>
		</Route>
	)
  )

// Main App Component
function App()  {
	return (
		<div className="App" id="App">
			<Navbar NavbarType='SignUp' CurrentPage='SignUp'/>
			<RouterProvider router={router} />
		</div>
  )
}

export default App;
