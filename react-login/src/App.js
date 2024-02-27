import './App.css';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import {Routes,BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>REACT LOGIN OR SIGNUP PAGE</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
