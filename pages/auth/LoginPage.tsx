import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { BrainCircuit, Mail, Lock, AlertCircle, ArrowRight, UserCheck } from 'lucide-react';

const LoginPage: React.FC = () => {
  const { login, loginWithGoogle, error } = useAuth();
  const navigate = useNavigate();
  
  // PRE-LLENADO PARA ACCESO MASTER ROOT POR DEFECTO
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const success = await login(email, password);
    setIsLoading(false);
    if (success) {
      navigate('/platform');
    }
  };

  const handleDemoLogin = async (role: 'root' | 'client') => {
      setIsLoading(true);
      if(role === 'root') {
          await login('aiwis@aiwis.ai', '1234');
      } else {
          // Login para el user.aiwis sin password
          await login('user.aiwis', '');
      }
      setIsLoading(false);
      navigate('/platform');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 pt-20">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border border-slate-700 mb-4 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <BrainCircuit className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Bienvenido a AIWIS</h2>
          <p className="text-slate-400 mt-2 text-sm">Ingresa tus credenciales para acceder al ecosistema.</p>
        </div>

        {/* Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm relative">
          <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          <div className="p-8">
            
            {error && (
              <div className="mb-6 bg-red-900/20 border border-red-900/50 rounded-lg p-3 flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-200">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Usuario / Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-500" />
                  </div>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all sm:text-sm"
                    placeholder="user.aiwis"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Contraseña</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-500" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-white font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-900 transition-all transform ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
              >
                {isLoading ? 'Autenticando...' : 'Iniciar Sesión'} <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-800">
               <p className="text-xs text-center text-slate-500 mb-4 uppercase tracking-widest font-bold">Accesos Rápidos (Demo)</p>
               <div className="grid grid-cols-2 gap-3">
                   <button 
                      onClick={() => handleDemoLogin('root')}
                      className="p-3 bg-slate-950 border border-cyan-900/30 rounded-lg hover:border-cyan-500/50 transition-all group text-left"
                   >
                       <p className="text-xs text-cyan-500 font-bold mb-1 group-hover:text-cyan-400">Master Root</p>
                       <p className="text-[10px] text-slate-500">Gestión Total</p>
                   </button>
                   <button 
                      onClick={() => handleDemoLogin('client')}
                      className="p-3 bg-slate-950 border border-green-900/30 rounded-lg hover:border-green-500/50 transition-all group text-left"
                   >
                       <p className="text-xs text-green-500 font-bold mb-1 group-hover:text-green-400 flex items-center gap-1"><UserCheck className="w-3 h-3" /> Demo Client</p>
                       <p className="text-[10px] text-slate-500">Partner View</p>
                   </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;