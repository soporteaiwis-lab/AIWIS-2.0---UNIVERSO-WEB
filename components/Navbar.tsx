import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BrainCircuit, ChevronDown, Lock, FlaskConical, Users, ShieldCheck, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path ? "text-cyan-400 font-bold" : "text-gray-300 hover:text-white";

  // Scroll to innovation section handler
  const scrollToInnovation = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('innovation');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setSolutionsOpen(false);
        setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="bg-cyan-900/20 p-2 rounded-lg group-hover:bg-cyan-900/40 transition-colors border border-cyan-500/10">
                 <BrainCircuit className="h-8 w-8 text-cyan-500" />
              </div>
              <div className="flex flex-col">
                 <span className="font-bold text-xl text-white tracking-wider leading-none">AIWIS</span>
                 <span className="text-[10px] text-cyan-400 uppercase tracking-[0.2em] leading-none">Platform 2.0</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              
              {/* Dropdown Soluciones */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Soluciones <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {solutionsOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-xl shadow-2xl bg-slate-900 ring-1 ring-black ring-opacity-5 border border-slate-700 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="p-2">
                      <a href="#innovation" onClick={scrollToInnovation} className="group block px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                        <span className="block font-bold text-white group-hover:text-cyan-400 mb-1">Edu Studio Labs</span>
                        <span className="text-xs text-slate-400 block">Plataforma Educativa & DAW</span>
                      </a>
                      <a href="#innovation" onClick={scrollToInnovation} className="group block px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                         <span className="block font-bold text-white group-hover:text-purple-400 mb-1">ArmonIA Platform</span>
                         <span className="text-xs text-slate-400 block">Producción Musical Híbrida</span>
                      </a>
                      <a href="#innovation" onClick={scrollToInnovation} className="group block px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                         <span className="block font-bold text-white group-hover:text-green-400 mb-1">Aiwis Assistant</span>
                         <span className="text-xs text-slate-400 block">Soporte Corporativo 24/7</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors">
                 <FlaskConical className="w-4 h-4" /> I+D Labs
              </a>

              <Link to="/filosofia" className={`${isActive('/filosofia')} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Metodología
              </Link>
              
              {/* Botón Clientes */}
              <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors">
                 <Users className="w-4 h-4" /> Clientes
              </Link>

              {/* Acciones de Usuario */}
              {isAuthenticated ? (
                <div className="flex items-center gap-3 pl-4 border-l border-slate-700 ml-2">
                  {user?.role === 'admin' && (
                     <Link to="/platform" className="text-red-400 hover:text-red-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4" /> ROOT
                     </Link>
                  )}
                  <Link to="/platform" className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-lg shadow-cyan-900/20 flex items-center gap-2">
                    <LayoutDashboardIcon className="w-4 h-4" /> Dashboard
                  </Link>
                  <button onClick={logout} className="text-slate-400 hover:text-white text-sm font-medium">
                    Salir
                  </button>
                </div>
              ) : (
                <Link to="/login" className="ml-4 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all border border-slate-600 flex items-center gap-2 group hover:border-cyan-500/50">
                  <Lock className="w-3 h-3 text-cyan-400 group-hover:text-white transition-colors" /> Acceso
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 shadow-2xl animate-in slide-in-from-top-5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest">Soluciones Aiwis</div>
            <a href="#innovation" onClick={scrollToInnovation} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 pl-6 border-l-2 border-slate-800 hover:border-cyan-500 transition-colors">Edu Studio Labs</a>
            <a href="#innovation" onClick={scrollToInnovation} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 pl-6 border-l-2 border-slate-800 hover:border-purple-500 transition-colors">ArmonIA Platform</a>
            
            <div className="my-2 border-t border-slate-800"></div>
            
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800">I+D Labs</a>
            <Link to="/filosofia" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800">Metodología</Link>
            <Link to="/login" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800">Clientes</Link>
            
            <div className="my-4 border-t border-slate-800"></div>
            
             {isAuthenticated ? (
                <>
                  <Link to="/platform" onClick={toggleMenu} className="block w-full text-center px-3 py-3 rounded-lg text-base font-bold text-white bg-cyan-600 hover:bg-cyan-500 mb-2">
                    Ir al Dashboard
                  </Link>
                  <button onClick={() => { logout(); toggleMenu(); }} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800">
                    Cerrar Sesión
                  </button>
                </>
             ) : (
                <Link to="/login" onClick={toggleMenu} className="block w-full text-center px-3 py-3 rounded-lg text-base font-bold text-white bg-slate-800 border border-slate-700">
                  Acceso Plataforma
                </Link>
             )}
          </div>
        </div>
      )}
    </nav>
  );
};

// Icon helper
const LayoutDashboardIcon = ({className}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
);

export default Navbar;