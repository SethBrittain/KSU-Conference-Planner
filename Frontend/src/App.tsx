/* THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentTest from './Components/Pages/ComponentTest/ComponentTest';
import HelloWorld from './Components/Pages/HelloWorld/HelloWorld';
import ApiTest from './Components/Pages/ApiTest/ApiTest';

// Main App Component
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<HelloWorld />} />
          <Route path="/component-test" element={<ComponentTest />} />
          <Route path="/api-test" element={<ApiTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
