import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BrainCircuit, ChevronDown, Lock, FlaskConical, Users, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { products } from '../data/mockData';

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

  const handlePlaceholder = (e: React.MouseEvent, msg: string) => {
    e.preventDefault();
    alert(`Próximamente: ${msg}`);
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="bg-cyan-900/20 p-2 rounded-lg group-hover:bg-cyan-900/40 transition-colors">
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
                  <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-lg bg-slate-900 ring-1 ring-black ring-opacity-5 border border-slate-700 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-1">
                      <a href="#" onClick={(e) => handlePlaceholder(e, 'Edu Studio Labs')} className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-800 hover:text-white">
                        <span className="block font-bold text-cyan-400">Edu Studio Labs</span>
                        <span className="text-xs text-slate-500">Educación Musical</span>
                      </a>
                      <a href="#" onClick={(e) => handlePlaceholder(e, 'ArmonIA Platform')} className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-800 hover:text-white border-t border-slate-800/50">
                         <span className="block font-bold text-purple-400">ArmonIA</span>
                         <span className="text-xs text-slate-500">Producción Musical AI</span>
                      </a>
                      <a href="#" onClick={(e) => handlePlaceholder(e, 'AIWIS Assistant')} className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-800 hover:text-white border-t border-slate-800/50">
                         <span className="block font-bold text-green-400">Aiwis Assistant</span>
                         <span className="text-xs text-slate-500">Soporte Corporativo</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a href="#" onClick={(e) => handlePlaceholder(e, 'Laboratorio de Innovación')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
                 <FlaskConical className="w-4 h-4" /> I+D Labs
              </a>

              <Link to="/filosofia" className={`${isActive('/filosofia')} px-3 py-2 rounded-md text-sm font-medium`}>
                Metodología
              </Link>
              
              {/* Botón Clientes (Login directo o sección) */}
              <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
                 <Users className="w-4 h-4" /> Clientes
              </Link>

              {/* Acciones de Usuario */}
              {isAuthenticated ? (
                <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
                  {user?.role === 'admin' && (
                     <Link to="/platform" className="text-red-400 hover:text-red-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4" /> ROOT
                     </Link>
                  )}
                  <Link to="/platform" className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-lg shadow-cyan-900/20">
                    Dashboard
                  </Link>
                  <button onClick={logout} className="text-slate-400 hover:text-white text-sm">
                    Salir
                  </button>
                </div>
              ) : (
                <Link to="/login" className="ml-4 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all border border-slate-600 flex items-center gap-2 group">
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
        <div className="md:hidden bg-slate-950 border-b border-slate-800 shadow-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest">Soluciones</div>
            <a href="#" onClick={(e) => { handlePlaceholder(e, 'Edu Studio'); toggleMenu(); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 pl-6 border-l-2 border-slate-800 hover:border-cyan-500">Edu Studio Labs</a>
            <a href="#" onClick={(e) => { handlePlaceholder(e, 'ArmonIA'); toggleMenu(); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 pl-6 border-l-2 border-slate-800 hover:border-purple-500">ArmonIA</a>
            
            <div className="my-2 border-t border-slate-800"></div>
            
            <a href="#" onClick={(e) => { handlePlaceholder(e, 'I+D'); toggleMenu(); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800">I+D Labs</a>
            <Link to="/filosofia" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800">Metodología</Link>
            <Link to="/contacto" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800">Contacto</Link>
            
            <div className="my-4 border-t border-slate-800"></div>
            
             {isAuthenticated ? (
                <>
                  <Link to="/platform" onClick={toggleMenu} className="block w-full text-center px-3 py-3 rounded-lg text-base font-bold text-white bg-cyan-600 hover:bg-cyan-500">
                    Ir al Dashboard
                  </Link>
                  <button onClick={() => { logout(); toggleMenu(); }} className="block w-full text-left px-3 py-2 mt-2 rounded-md text-base font-medium text-slate-400 hover:text-white text-center">
                    Cerrar Sesión
                  </button>
                </>
             ) : (
                <Link to="/login" onClick={toggleMenu} className="block w-full text-center px-3 py-3 rounded-lg text-base font-bold text-white bg-slate-800 border border-slate-700">
                  Acceso Clientes
                </Link>
             )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;