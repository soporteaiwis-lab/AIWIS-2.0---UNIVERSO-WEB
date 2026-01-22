import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Music, Cpu, CheckCircle, ExternalLink, Lock, Shield, Server, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeuralBackground from '../../components/NeuralBackground';
import { companies, products } from '../../data/mockData';

const Home: React.FC = () => {
  // Filtrar productos reales (Aiwis IP) para la sección de innovación
  // Excluimos explícitamente cualquier cosa que parezca "Portal Corporativo" o "SimpleData" si estuviera mal clasificado
  const innovationProducts = products.filter(p => 
    (p.category === 'education' || p.category === 'creative') && p.status !== 'development'
  ).slice(0, 3); // Top 3 productos insignia

  // Filtrar Partners (Clientes) para la sección de Ecosistema
  const partners = companies.filter(c => c.id !== 'aiwis-corp');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen">
      <NeuralBackground />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-900/20 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-sm text-cyan-300 tracking-wide font-medium uppercase">Ecosistema AIWIS 2.0</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
        >
          Arquitectos de la <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Evolución Digital
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Fusionamos pedagogía, creatividad y análisis de datos para construir tecnología con propósito humano.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link 
            to="/login"
            className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-lg overflow-hidden transition-all hover:scale-105"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <span className="group-hover:text-white transition-colors flex items-center gap-2">
              <Lock className="w-4 h-4" /> Acceso Plataforma
            </span>
          </Link>
          <a
            href="#innovation"
            className="px-8 py-4 border border-slate-700 text-slate-300 font-medium rounded-lg hover:bg-slate-800 transition-all hover:text-white"
          >
            Explorar Soluciones
          </a>
        </motion.div>
      </section>

      {/* --- INNOVATION SECTION (Products Only) --- */}
      <section id="innovation" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Innovación en Marcha</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Nuestras soluciones tecnológicas insignia para la educación y la industria creativa.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {innovationProducts.map(product => (
               <motion.div key={product.id} variants={itemVariants} className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-500 flex flex-col">
                 <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${product.category === 'creative' ? 'from-purple-500 to-pink-500' : 'from-cyan-500 to-blue-500'}`}></div>
                 
                 <div className="p-8 flex-grow">
                   <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all ${
                     product.category === 'creative' 
                       ? 'bg-purple-900/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white' 
                       : 'bg-cyan-900/30 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white'
                   }`}>
                     {product.category === 'creative' ? <Music className="w-8 h-8" /> : <Cpu className="w-8 h-8" />}
                   </div>
                   
                   <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                   <p className={`text-sm font-medium mb-4 ${product.category === 'creative' ? 'text-purple-400' : 'text-cyan-400'}`}>
                      {product.tagline}
                   </p>
                   <p className="text-slate-400 mb-6 leading-relaxed">
                     {product.description}
                   </p>
                   
                   {product.features && (
                     <ul className="space-y-2 mb-6">
                       {product.features.slice(0, 2).map((feat, i) => (
                         <li key={i} className="flex items-center text-sm text-slate-500">
                           <CheckCircle className={`w-4 h-4 mr-2 ${product.category === 'creative' ? 'text-purple-500' : 'text-cyan-500'}`} /> 
                           {feat}
                         </li>
                       ))}
                     </ul>
                   )}
                 </div>

                 {product.url && (
                    <div className="p-6 pt-0 mt-auto">
                        <a 
                            href={product.url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center text-sm font-bold text-slate-300 hover:text-white transition-colors"
                        >
                            Ver Demo <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                    </div>
                 )}
               </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PARTNERS & CLIENT ECOSYSTEM SECTION (The Fix) --- */}
      <section className="py-24 bg-slate-950 border-y border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Shield className="w-6 h-6 text-green-500" />
                        <span className="text-green-500 font-bold uppercase tracking-widest text-xs">Acceso Corporativo</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Ecosistema de Partners</h2>
                    <p className="text-slate-400 mt-2 max-w-xl">
                        Empresas e instituciones que confían en Aiwis para su transformación digital. Acceso exclusivo a portales privados.
                    </p>
                </div>
                <Link to="/login" className="px-6 py-3 bg-slate-900 border border-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 font-medium">
                    <Lock className="w-4 h-4 text-slate-500" /> Área de Clientes
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map(client => (
                    <motion.div 
                        key={client.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-all group"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold text-xl border border-slate-700 group-hover:border-slate-500 transition-colors">
                                {client.logo || client.name.charAt(0)}
                            </div>
                            <div className="px-2 py-1 bg-slate-950 rounded border border-slate-800 text-[10px] uppercase text-slate-500 font-bold flex items-center gap-1">
                                <Lock className="w-3 h-3" /> Privado
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-1">{client.name}</h3>
                        <p className="text-sm text-slate-500 mb-6">{client.description}</p>
                        
                        <div className="space-y-3">
                            {client.portals.length > 0 ? (
                                client.portals.map(portal => (
                                    <a 
                                        key={portal.id}
                                        href={portal.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm text-slate-300 hover:text-white transition-colors flex items-center justify-between group-link"
                                    >
                                        <span className="truncate pr-2">{portal.name}</span>
                                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-link-hover:text-white" />
                                    </a>
                                ))
                            ) : (
                                <div className="text-xs text-slate-600 italic py-2">Acceso restringido o en configuración.</div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* --- METHODOLOGY TEASER --- */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">¿Listo para transformar tu organización?</h2>
            <Link to="/filosofia" className="inline-flex items-center text-cyan-400 hover:text-white font-bold text-lg transition-colors">
                Conoce nuestra metodología <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;