import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import AdDetail from './pages/AdDetail';
import MyAds from './pages/MyAds';
import CreateAd from './pages/CreateAd';


import './App.css';



function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/my-profile' element={<Profile/>}/>
          <Route path='/edit-profile' element={<EditProfile/>}/>
          <Route path='/ad' element={<AdDetail/>}/>
          <Route path='/create-ad' element={<CreateAd/>}/>
          <Route path='/my-ads' element={<MyAds/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
