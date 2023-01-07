import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register';
import Profile from './pages/Profile';
import BookStorage from './pages/BookStorage';

import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/my-profile' element={<Profile/>}/>
        <Route path='/my-books' element={<BookStorage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
