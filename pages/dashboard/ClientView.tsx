import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { getUserProducts } from '../../data/mockData';
import { ExternalLink, Rocket, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const ClientView: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) return null;

  const myProducts = getUserProducts(user);

  return (
    <div className="space-y-10">
      {/* Welcome Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Hola, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{user.name}</span>
        </h1>
        <p className="text-slate-400 text-lg">
          Bienvenido a tu espacio de trabajo. Aquí están tus herramientas habilitadas.
        </p>
      </motion.div>

      {/* Products Grid */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-cyan-400" />
            Mis Aplicaciones
        </h2>
        
        {myProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20"
              >
                {/* Product Card Content */}
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <span className={`inline-block px-2 py-1 text-xs rounded border ${
                      product.status === 'beta' ? 'bg-yellow-900/20 text-yellow-400 border-yellow-900/50' :
                      product.status === 'active' ? 'bg-green-900/20 text-green-400 border-green-900/50' :
                      'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                      {product.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium mb-3">{product.tagline}</p>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{product.description}</p>
                  
                  {/* Features Mini List */}
                  {product.features && (
                    <div className="mb-6 space-y-1">
                        {product.features.slice(0, 3).map((feat, i) => (
                            <div key={i} className="flex items-center text-xs text-slate-500">
                                <span className="w-1 h-1 bg-slate-600 rounded-full mr-2"></span>
                                {feat}
                            </div>
                        ))}
                    </div>
                  )}

                  <button className="w-full mt-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-cyan-600 text-white py-3 rounded-lg transition-colors font-medium group-hover:bg-cyan-600">
                    Iniciar Aplicación <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/50 rounded-xl border border-slate-800 border-dashed">
             <Lock className="w-12 h-12 text-slate-600 mx-auto mb-4" />
             <h3 className="text-lg font-medium text-slate-300">No tienes aplicaciones asignadas</h3>
             <p className="text-slate-500">Contacta al administrador para habilitar servicios.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientView;