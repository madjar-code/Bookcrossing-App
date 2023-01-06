import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Login from './pages/Login'

import './App.css';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='my-profile' element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
