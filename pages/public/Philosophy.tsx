import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Nuestra Filosofía</h1>
        <div className="prose prose-invert lg:prose-xl">
          <p className="text-slate-300">
            En AIWIS, creemos en la democratización de la inteligencia artificial como herramienta
            potenciadora del talento humano, no como su reemplazo.
          </p>
          <p className="text-slate-300 mt-4">
            Construimos puentes entre la complejidad tecnológica y la usabilidad cotidiana.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Philosophy;