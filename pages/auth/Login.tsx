import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock } from 'lucide-react';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Pass demo credentials to satisfy the interface
    await login('aiwis@aiwis.ai', '1234');
    navigate('/platform');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl w-full max-w-md">
        <div className="flex justify-center mb-6">
            <div className="p-3 bg-cyan-900/30 rounded-full">
                <Lock className="w-8 h-8 text-cyan-400" />
            </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-white mb-8">Acceso Plataforma</h2>
        <div className="space-y-4">
            <button 
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-[1.02]"
            >
                Iniciar Sesión (Demo)
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">
                Este es un entorno de demostración. Haz clic para simular autenticación.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;