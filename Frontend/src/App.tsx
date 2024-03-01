/* THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentTest from './Components/Pages/ComponentTest/ComponentTest';

// Main App Component
function App()  {
  return (
    <div className="App">
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<ComponentTest/>}/>
					<Route path="*" element={<ComponentTest/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
      <ComponentTest/>
    </div>
  )
}

export default App;
