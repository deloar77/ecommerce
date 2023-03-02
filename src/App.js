
import { Toaster } from 'react-hot-toast';
import { Routes,Route } from 'react-router-dom';
import Menu from './components/nav/Menu';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home.js';
function App() {
  return (
    <div className="App">
      <Menu/>
      <Toaster/>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      
      </Routes> 
    </div>
  );
}

export default App;
