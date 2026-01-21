import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User } from '../types';
import { users } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  loginWithGoogle: () => void;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Persistencia básica (opcional, para que no se pierda al recargar mientras desarrollas)
  useEffect(() => {
    const storedUser = localStorage.getItem('aiwis_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, pass: string): Promise<boolean> => {
    setError(null);
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 500));

    const foundUser = users.find(u => u.email === email && u.password === pass);

    if (foundUser) {
      const safeUser = { ...foundUser, password: '' }; // No guardar password en estado
      setUser(safeUser);
      localStorage.setItem('aiwis_user', JSON.stringify(safeUser));
      return true;
    } else {
      setError('Credenciales inválidas. Intenta nuevamente.');
      return false;
    }
  };

  const loginWithGoogle = () => {
    // Simulación de Google Auth
    setError(null);
    console.log("Simulating Google Login...");
    // Usamos el cliente demo para Google Auth
    const demoClient = users.find(u => u.role === 'client');
    if (demoClient) {
      const safeUser = { ...demoClient, password: '' };
      setUser(safeUser);
      localStorage.setItem('aiwis_user', JSON.stringify(safeUser));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('aiwis_user');
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      loginWithGoogle, 
      logout,
      error
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};