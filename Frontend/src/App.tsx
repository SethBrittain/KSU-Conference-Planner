/* THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter} from "react-router-dom";
import RouteConfig from './RouteConfig';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbars/Navbar';
import UserRole from './Utils/UserRole';

const router = createBrowserRouter(RouteConfig);

// Main App Component
const App = () : React.JSX.Element => {
	return (
		<div id="App">
			<div id="content" className="h-full bg-white flex flex-col">
				<Navbar userRole={UserRole.Anonymous}/> {/*TODO*/}
				<div className='grow'>
					<RouterProvider router={router}/>
				</div>
				<Footer/>
			</div>
		</div>
	)
}

export default App;
