/* THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter} from "react-router-dom";
import RouteConfig from './RouteConfig';
import GenericFooter from './Components/GenericFooter/GenericFooter';
import Navbar from './Components/Navbars/Navbar';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//       <Route>
//           <Route index element={<LandingPage/>}/>          
//           <Route path='SignUp' element={<SignUpPage2/>}/>
//           <Route path='SignUp1' element={<SignUpPage1/>}/>
// 		  <Route path='ComponentTest' element={<ComponentTest/>}/>
//       </Route>
//   )
// )
const router = createBrowserRouter(RouteConfig);

// Main App Component
function App()  {
  return (
    <div id="App">
		<div id="content" className="h-full bg-white flex flex-col">
			<Navbar NavbarType='Generic' CurrentPage='Landing'/>
			<div className='grow'>
				<RouterProvider router={router}/>
			</div>
			<GenericFooter/>
		</div>
    </div>
  )
}

export default App;
