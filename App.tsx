import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Páginas Públicas
import Home from './pages/public/Home';
import Philosophy from './pages/public/Philosophy';
import Contact from './pages/public/Contact';
import LoginPage from './pages/auth/LoginPage';

// Páginas Privadas (Router Inteligente)
import DashboardRouter from './pages/dashboard/DashboardRouter';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas Públicas envueltas en MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/filosofia" element={<Philosophy />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Rutas Privadas */}
            <Route element={<ProtectedRoute />}>
              <Route path="/platform" element={<DashboardRouter />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;