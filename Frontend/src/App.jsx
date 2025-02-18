import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './App.css'

const Home = lazy(() => import('./components/Home'));
const Page1 = lazy(() => import('./components/Page1'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/PieTube" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </Router>
  );
};

export default App;