import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         className="max-w-md mx-auto bg-slate-900 p-8 rounded-xl border border-slate-800"
      >
        <h1 className="text-3xl font-bold text-white mb-6">Contáctanos</h1>
        <p className="text-slate-400 mb-8">
            Estamos listos para atender tus dudas y requerimientos sobre la plataforma.
        </p>
        <div className="space-y-4">
            <div className="p-4 bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-500">Email</p>
                <p className="text-white">soporte.aiwis@gmail.com</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-500">Teléfono</p>
                <p className="text-white">+56 9 3958 0988</p>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;