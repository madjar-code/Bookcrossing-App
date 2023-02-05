import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import { AuthProvider } from './context/AuthContext';
import AuthContext from './context/AuthContext';
import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import AdDetail from './pages/AdDetail';
import MyAds from './pages/MyAds';
import CreateAd from './pages/CreateAd';

import './App.css';
import NotFoundPage from './pages/NotFoundPage';


function PrivateRoute({ children }) {
  let { authTokens } = useContext(AuthContext)
  return authTokens ? children : <Navigate to="/login"/>
}


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:str' element={<AdDetail/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route
            path='/my-profile'
            element={
              <PrivateRoute>
                <Profile/>
              </PrivateRoute>
            }/>
          <Route
            path='/edit-profile'
            element={
              <PrivateRoute>
                <EditProfile/>
              </PrivateRoute>
            }/>
          <Route
            path='/create-ad'
            element={
              <PrivateRoute>
                <CreateAd/>
              </PrivateRoute>
            }/>
          <Route
            path='/my-ads'
            element={
              <PrivateRoute>
                <MyAds/>
              </PrivateRoute>
            }/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
