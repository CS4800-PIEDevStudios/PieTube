import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const Logoheader = lazy(() => import('./components/Logoheader'));
const Header = lazy(() => import('./components/Header'));

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
        <Routes>
          <Route path="/PieTube" element={
              <Layout header={<Header />}>
                <Home />
              </Layout>
            }/>
          <Route
            path="/Login"
            element={
              <Layout header={<Logoheader />}>
                <Login />
              </Layout>
            }
          />
          <Route path="/Signup" element={
              <Layout header={<Logoheader />}>
                <Signup />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;