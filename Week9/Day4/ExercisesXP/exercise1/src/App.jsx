import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary component
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ShopScreen from './ShopScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container"> {/* Add a container class for Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex align-items-center">
        <NavLink className="nav-link mr-2" to="/">Home</NavLink> {/* Added mr-2 for margin */}
        <NavLink className="nav-link mr-2" to="/profile">Profile</NavLink> {/* Added mr-2 for margin */}
        <NavLink className="nav-link" to="/shop">Shop</NavLink>
      </nav>

        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
