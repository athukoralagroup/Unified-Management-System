import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import { Analytics } from "@vercel/analytics/react";
import { HandmadeRoutes } from './pages/HandmadeRoutes';
import { PackingRoutes } from './pages/PackingRoutes';


// 🔐 Protected Route
const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default function App() {

  useEffect(() => {
    // App එක මුලින්ම load වෙද්දී <html> tag එකෙන් 'dark' class එක අයින් කරනවා.
    // මේ නිසා මුළු app එකම default විදිහට Light Mode එකෙන් වැඩ කරනවා.
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Analytics />

      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />

        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          {HandmadeRoutes()}
          {PackingRoutes()}
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}