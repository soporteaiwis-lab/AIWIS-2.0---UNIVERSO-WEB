import React from 'react';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
        <p className="text-slate-400">Bienvenido al área privada de AIWIS Platform 2.0</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Módulo 1</h3>
                <p className="text-slate-400 text-sm">Estadísticas generales del sistema.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Módulo 2</h3>
                <p className="text-slate-400 text-sm">Gestión de usuarios y recursos.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Módulo 3</h3>
                <p className="text-slate-400 text-sm">Configuraciones avanzadas de IA.</p>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;