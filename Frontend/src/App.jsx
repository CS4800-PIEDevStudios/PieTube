import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { LoadingProvider } from "./components/Skeleton/Loading";
import PageLayout from "./components/Skeleton/PageLayout";
import "./components/Skeleton/skeleton.css";
import './App.css';

const Home = lazy(() => import('./components/Home'));
const Logoheader = lazy(() => import('./components/Logoheader'));
const Header = lazy(() => import('./components/Header'));
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const Profile = lazy(() => import('./components/Profile'));
const Changepassword = lazy(() => import('./components/Changepassword'));
const Changeusername = lazy(() => import('./components/Changeusername'));
const EditAbout = lazy(() => import('./components/EditAbout'));
const MovieDescription = lazy(() => import('./components/MovieDescription'));
const MoviePlayer = lazy(() => import('./components/MoviePlayer'));
const SearchResults = lazy(() => import('./components/SearchResults'));
const WatchList = lazy(() => import('./components/WatchList'));

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
      <LoadingProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '90vh'}}>
        <Header/>
        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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
            <Route path="/Profile" element={
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
            <Route path="/MovieDescription/:id" element={
              <MovieDescription />
              } />
            <Route path="/MoviePlayer/:id" element={
              <MoviePlayer />
              } />
            <Route path="/SearchResults" element={
              <SearchResults />
              } />
            <Route path="/WatchList" element={
              <WatchList />
              } />
          </Routes>
        </div>
      </div>
      </LoadingProvider>
    </Router>
  );
};

export default App;