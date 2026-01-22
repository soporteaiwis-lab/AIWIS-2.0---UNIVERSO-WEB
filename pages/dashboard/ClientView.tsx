import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { getUserProducts, getUserPortals } from '../../data/mockData';
import { ExternalLink, Rocket, Lock, Layout, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ClientView: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) return null;

  const myPortals = getUserPortals(user);
  const myAiwisProducts = getUserProducts(user);

  return (
    <div className="space-y-12">
      {/* Welcome Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
            <Rocket className="w-32 h-32 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 relative z-10">
          Hola, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{user.name}</span>
        </h1>
        <p className="text-slate-400 text-lg relative z-10 max-w-2xl">
          Bienvenido a tu centro de comando. Accede a tus portales corporativos y herramientas de inteligencia artificial.
        </p>
      </motion.div>

      {/* SECTION 1: MY CORPORATE PORTALS */}
      <div>
         <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 border-l-4 border-cyan-500 pl-3">
            <Layout className="w-5 h-5 text-cyan-400" />
            Mis Portales Corporativos
        </h2>

        {myPortals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {myPortals.map((portal, index) => (
                    <motion.div
                        key={portal.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-cyan-900/20 rounded-lg text-cyan-400">
                                <Layout className="w-8 h-8" />
                            </div>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-950 px-2 py-1 rounded border border-slate-800">
                                {portal.type}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{portal.name}</h3>
                        <p className="text-slate-400 text-sm mb-6">Acceso seguro a tu entorno privado.</p>
                        
                        <a 
                            href={portal.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg transition-all transform group-hover:scale-[1.02]"
                        >
                            Ingresar al Portal <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </motion.div>
                ))}
            </div>
        ) : (
            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-8 text-center">
                <p className="text-slate-500">No tienes portales corporativos asignados.</p>
            </div>
        )}
      </div>

      {/* SECTION 2: ENABLED AIWIS TOOLS */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 border-l-4 border-purple-500 pl-3">
            <Star className="w-5 h-5 text-purple-400" />
            Herramientas Aiwis Habilitadas
        </h2>
        
        {myAiwisProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {myAiwisProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all flex flex-col"
              >
                <div className="p-5 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-950 px-2 py-1 rounded">
                        {product.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                  <p className="text-purple-400 text-xs font-medium mb-3">{product.tagline}</p>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">{product.description}</p>
                  
                  {product.url && product.url !== '#' ? (
                    <a 
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors text-sm font-medium"
                    >
                      Abrir Tool <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button disabled className="mt-auto w-full bg-slate-800/50 text-slate-500 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                       Próximamente
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-slate-900/20 rounded-xl border border-slate-800 border-dashed">
             <Lock className="w-8 h-8 text-slate-600 mx-auto mb-2" />
             <p className="text-slate-500 text-sm">No tienes herramientas adicionales activas.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientView;