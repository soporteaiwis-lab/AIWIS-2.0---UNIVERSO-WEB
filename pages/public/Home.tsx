import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Music, Cpu, CheckCircle, ExternalLink, Lock, Shield, Server, ArrowUpRight, Zap, PlayCircle, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeuralBackground from '../../components/NeuralBackground';
import { companies, products } from '../../data/mockData';

const Home: React.FC = () => {
  // Filtrar productos reales (Aiwis IP) 
  const innovationProducts = products.filter(p => 
    (p.category === 'education' || p.category === 'creative') && p.status !== 'development'
  );

  // Filtrar Partners (Clientes) para la sección de Ecosistema
  const partners = companies.filter(c => c.id !== 'aiwis-corp' && c.id !== 'demo-partner');

  return (
    <div className="relative min-h-screen">
      <NeuralBackground />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[85vh] text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 animate-pulse" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-900/10 backdrop-blur-md"
        >
          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
          <span className="text-sm text-cyan-300 tracking-wide font-medium uppercase">AIWIS Platform 2.0</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
        >
          Arquitectos de la <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
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
            className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
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
            Explorar Productos
          </a>
        </motion.div>
      </section>

      {/* --- INNOVATION SECTION (Product Showcase) --- */}
      <section id="innovation" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Catálogo de Innovación</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Soluciones tecnológicas insignia desarrolladas por Aiwis.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
            {innovationProducts.map((product, index) => (
               <ProductShowcaseCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* --- ZONA DE CLIENTES (Ecosistema Partners) --- */}
      <section className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-slate-900 to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-slate-800 pb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-green-500" />
                        <span className="text-green-500 font-bold uppercase tracking-widest text-xs">Zona de Clientes</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Ecosistema de Partners</h2>
                    <p className="text-slate-400 mt-2 max-w-xl">
                        Acceso seguro a los entornos digitales exclusivos de nuestros partners.
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
                        className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-all group backdrop-blur-sm"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold text-xl border border-slate-700 group-hover:border-slate-500 transition-colors shadow-lg">
                                {client.logo || client.name.charAt(0)}
                            </div>
                            <div className="px-2 py-1 bg-slate-950 rounded border border-slate-800 text-[10px] uppercase text-slate-500 font-bold flex items-center gap-1">
                                <Lock className="w-3 h-3" /> Privado
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-1">{client.name}</h3>
                        <p className="text-sm text-slate-500 mb-6">{client.description}</p>
                        
                        <div className="space-y-3">
                            {client.portals.map(portal => (
                                <a 
                                    key={portal.id}
                                    href={portal.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm text-slate-300 hover:text-white transition-colors flex items-center justify-between group-link border border-transparent hover:border-slate-600"
                                >
                                    <span className="truncate pr-2 font-medium">{portal.name}</span>
                                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-link-hover:text-white" />
                                </a>
                            ))}
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
            <Link to="/filosofia" className="inline-flex items-center text-cyan-400 hover:text-white font-bold text-lg transition-colors border-b-2 border-cyan-500/30 hover:border-cyan-400 pb-1">
                Conoce nuestra metodología de 3 fases <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
        </div>
      </section>
    </div>
  );
};

// --- Subcomponent: Product Showcase Card ---
const ProductShowcaseCard: React.FC<{ product: any, index: number }> = ({ product, index }) => {
    const isCreative = product.category === 'creative';
    const isEducation = product.category === 'education';

    // Estilos dinámicos basados en la categoría
    const gradient = isCreative 
        ? "from-purple-900/40 via-purple-900/10 to-transparent" 
        : "from-cyan-900/40 via-cyan-900/10 to-transparent";
    
    const accentColor = isCreative ? "text-purple-400" : "text-cyan-400";
    const bgAccent = isCreative ? "bg-purple-500" : "bg-cyan-500";
    const buttonClass = isCreative 
        ? "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)]" 
        : "bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(8,145,178,0.4)]";

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 backdrop-blur-sm group hover:border-slate-600 transition-colors duration-500`}
        >
            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${gradient} opacity-50`}></div>
            
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
                
                {/* Visual Icon / Graphic */}
                <div className="flex-shrink-0">
                    <div className={`w-32 h-32 md:w-48 md:h-48 rounded-3xl ${isCreative ? 'bg-purple-950/50 border-purple-500/30' : 'bg-cyan-950/50 border-cyan-500/30'} border-2 flex items-center justify-center relative overflow-hidden shadow-2xl`}>
                        {/* Inner glow */}
                        <div className={`absolute inset-0 ${bgAccent} opacity-10 blur-xl`}></div>
                        {isCreative ? (
                            <Music className={`w-16 h-16 md:w-24 md:h-24 ${accentColor}`} />
                        ) : (
                            <Zap className={`w-16 h-16 md:w-24 md:h-24 ${accentColor}`} />
                        )}
                        {/* Decorative UI elements mimicking interface */}
                        <div className="absolute bottom-4 left-4 right-4 h-2 bg-slate-800/50 rounded-full overflow-hidden">
                            <div className={`h-full w-2/3 ${bgAccent} opacity-70`}></div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-grow text-left">
                    <div className="flex items-center gap-3 mb-3">
                         <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${isCreative ? 'bg-purple-900/30 text-purple-300' : 'bg-cyan-900/30 text-cyan-300'}`}>
                             {isCreative ? 'AI Studio DAW' : 'EduTech Platform'}
                         </span>
                         <span className="text-slate-500 text-xs font-mono">{product.status} v2.0</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{product.name}</h3>
                    <p className={`text-lg font-medium ${accentColor} mb-4`}>{product.tagline}</p>
                    
                    <p className="text-slate-300 mb-8 max-w-2xl leading-relaxed text-lg">
                        {product.description}
                    </p>

                    <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
                        {product.features?.map((feat: string, i: number) => (
                            <div key={i} className="flex items-center text-slate-400 text-sm">
                                <CheckCircle className={`w-4 h-4 mr-2 ${accentColor}`} />
                                {feat}
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <a 
                            href={product.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 ${buttonClass}`}
                        >
                            {isCreative ? <PlayCircle className="w-5 h-5" /> : <Layers className="w-5 h-5" />}
                            Launch App
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;