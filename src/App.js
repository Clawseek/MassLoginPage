// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import { AuthProvider } from './context/AuthContext';
import useAuth from './hooks/useAuth';
import './styles/App.css';

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
