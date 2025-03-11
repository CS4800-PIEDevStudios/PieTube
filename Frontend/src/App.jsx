import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './App.css'

const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/PieTube" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;