import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const Logoheader = lazy(() => import('./components/Logoheader'));
const Header = lazy(() => import('./components/Header'));
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const Profile = lazy(() => import('./components/Profile'));
const Changepassword = lazy(() => import('./components/Changepassword'));

const Layout = ({ children, header }) => {
  return (
    <div>
      {header} {/* Render the header based on the route */}
      <main>{children}</main> {/* Render the main content */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Header/>
      <div className='d-flex align-items-center justify-content-center'>
        <Routes>
          <Route path="/PieTube" element={
            <Home />
            }/>
          <Route path="/Changepassword" element={
            <Changepassword />
            }/>    
          <Route path="/Login" element={
            <Layout header={<Logoheader />}>
              <Login />
            </Layout>
            }/>
          <Route path="/Signup" element={
              <Layout header={<Logoheader />}>
                <Signup />
              </Layout>
            }/>
          <Route path="/profile"
            element={
              <Layout header={<Header />}>
                <Profile />
              </Layout>
            }/>
        </Routes>
      </div>

      </Suspense>
    </Router>
  );
};

export default App;