import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BookStorage from './pages/BookStorage';

import './App.css';
import BookDetail from './pages/BookDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/my-profile' element={<Profile/>}/>
        <Route path='/my-books' element={<BookStorage/>}/>
        <Route path='/book' element={<BookDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
