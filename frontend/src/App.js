import { useContext, useEffect, useState } from 'react';
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
import ProfileAndAds from './pages/ProfileAndAds';
import EditProfile from './pages/EditProfile';
import AdDetail from './pages/AdDetail';
import MyAds from './pages/MyAds';
import CreateAd from './pages/CreateAd';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';
import LoginAndRegister from './pages/LoginAndRegister';


function PrivateRoute({ children }) {
  let { authTokens } = useContext(AuthContext)
  return authTokens ? children : <Navigate to="/login"/>
}


function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 620


  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ads/:slug' element={<AdDetail/>}/>
          <Route path='/users/:slug' element={<Profile/>}/>

          {
            width < breakpoint
            ?
            <>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            </>
            :
            <>
            <Route path='/login' element={<LoginAndRegister/>}/>
            <Route path='/register' element={<LoginAndRegister/>}/>
            </>
          }
          {
            width < breakpoint
            ?
            <Route
              path='/my-profile'
              element={
                <PrivateRoute>
                  <Profile/>
                </PrivateRoute>
              }/>
            :
            <Route
              path='/my-profile'
              element={
                <PrivateRoute>
                  <ProfileAndAds/>
                </PrivateRoute>
              }/>
          }
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
