import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BrainCircuit } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path ? "text-cyan-400 font-bold" : "text-gray-300 hover:text-white";

  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <BrainCircuit className="h-8 w-8 text-cyan-500" />
              <span className="font-bold text-xl text-white tracking-wider">AIWIS</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`${isActive('/')} px-3 py-2 rounded-md text-sm transition-colors`}>
                Home
              </Link>
              <Link to="/filosofia" className={`${isActive('/filosofia')} px-3 py-2 rounded-md text-sm transition-colors`}>
                Filosofía
              </Link>
              <Link to="/contacto" className={`${isActive('/contacto')} px-3 py-2 rounded-md text-sm transition-colors`}>
                Contacto
              </Link>
              {isAuthenticated ? (
                <>
                  <Link to="/platform" className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Dashboard
                  </Link>
                  <button onClick={logout} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm transition-colors">
                    Salir
                  </button>
                </>
              ) : (
                <Link to="/login" className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors border border-slate-600">
                  Acceso Plataforma
                </Link>
              )}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-800">Home</Link>
            <Link to="/filosofia" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800">Filosofía</Link>
            <Link to="/contacto" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800">Contacto</Link>
             {isAuthenticated ? (
                <Link to="/platform" onClick={toggleMenu} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-cyan-400 hover:text-cyan-300 hover:bg-slate-800">
                  Ir al Dashboard
                </Link>
             ) : (
                <Link to="/login" onClick={toggleMenu} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-cyan-400 hover:text-cyan-300 hover:bg-slate-800">
                  Acceso Plataforma
                </Link>
             )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;