import React from 'react';
import { useAuth } from '../../context/AuthContext';
import AdminView from './AdminView';
import ClientView from './ClientView';

const DashboardRouter: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return null; // Should be handled by ProtectedRoute, but safe fallback
  }

  // Router de roles
  return (
    <div className="container mx-auto px-4 py-8">
      {user.role === 'admin' ? (
        <AdminView />
      ) : (
        <ClientView />
      )}
    </div>
  );
};

export default DashboardRouter;