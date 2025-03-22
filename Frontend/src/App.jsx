import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';
import axios from 'axios';



const Home = lazy(() => import('./components/Home'));
const Logoheader = lazy(() => import('./components/Logoheader'));
const Header = lazy(() => import('./components/Header'));
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const Profile = lazy(() => import('./components/Profile'));
const Changepassword = lazy(() => import('./components/Changepassword'));
const Changeusername = lazy(() => import('./components/Changeusername'));
const EditAbout = lazy(() => import('./components/EditAbout'));

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
    <Router basename='/'>
      <Suspense fallback={<div>Loading...</div>}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '90vh'}}>
        <Header/>
        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Routes>
            <Route path="/" element={
              <Home />
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
                <Profile />
              }/>
            <Route path="/Changepassword" element={
              <Changepassword />
              }/>
            <Route path="/Changeusername" element={
              <Changeusername />
              } />
            <Route path="/EditAbout" element={
              <EditAbout />
              } />
          </Routes>
        </div>
      </div>


      </Suspense>
    </Router>
  );
};

export default App;