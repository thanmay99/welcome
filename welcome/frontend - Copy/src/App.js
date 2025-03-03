import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './Context';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import Welcome from './components/Welcome';

function App() {
  const { token } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route
        path="/"
        element={token ? <Home /> : <Navigate to="/welcome" />}
      />
    </Routes>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);