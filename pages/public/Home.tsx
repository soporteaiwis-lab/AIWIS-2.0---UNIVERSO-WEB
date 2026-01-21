import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Music, Cpu, BarChart3, Database, Layers, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeuralBackground from '../../components/NeuralBackground';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen">
      {/* Fondo de Red Neuronal */}
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
          <span className="text-sm text-cyan-300 tracking-wide font-medium">PLATAFORMA 2.0 ACTIVA</span>
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
          No solo creamos software. Diseñamos ecosistemas inteligentes donde la educación, 
          la creatividad y los datos convergen para potenciar el talento humano.
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
              Ingresar al Ecosistema <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
          <Link 
            to="/contacto"
            className="px-8 py-4 border border-slate-700 text-slate-300 font-medium rounded-lg hover:bg-slate-800 transition-all hover:text-white"
          >
            Hablar con Consultoría
          </Link>
        </motion.div>
      </section>

      {/* --- INNOVATION SECTION (Products) --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Innovación en Marcha</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Nuestras soluciones insignia redefinen los límites entre la creatividad humana y el poder computacional.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Card 1: ArmonIA */}
            <motion.div variants={itemVariants} className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all">
                  <Music className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">ArmonIA</h3>
                <p className="text-sm font-medium text-purple-400 mb-4">Copiloto Musical Experimental</p>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Más que un generador, un colaborador. Integra Suno AI y análisis espectral para que músicos exploren nuevos paisajes sonoros sin perder su esencia creativa.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 mr-2 text-purple-500" /> Análisis espectral en tiempo real
                  </li>
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 mr-2 text-purple-500" /> Generación melódica asistida
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 2: Edu Studio Labs */}
            <motion.div variants={itemVariants} className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-cyan-900/30 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:text-white group-hover:bg-cyan-600 transition-all">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Edu Studio Labs</h3>
                <p className="text-sm font-medium text-cyan-400 mb-4">DAW Educativo Inteligente</p>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Transformamos el aula de música. Un entorno digital adaptativo (Explorer, Maker, Pro) diseñado pedagógicamente para despertar la curiosidad tecnológica.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 mr-2 text-cyan-500" /> Niveles de complejidad adaptativa
                  </li>
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 mr-2 text-cyan-500" /> Gestión de aula integrada
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 3: SimpleData */}
            <motion.div variants={itemVariants} className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-yellow-900/30 rounded-xl flex items-center justify-center mb-6 text-yellow-400 group-hover:text-white group-hover:bg-yellow-600 transition-all">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">SimpleData</h3>
                <p className="text-sm font-medium text-yellow-400 mb-4">Inteligencia Corporativa</p>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Convertimos el caos de datos en claridad estratégica. Dashboards ejecutivos y análisis predictivo para la toma de decisiones basada en evidencia.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 mr-2 text-yellow-500" /> Reportes automatizados
                  </li>
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 mr-2 text-yellow-500" /> Visualización de datos en tiempo real
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- METHODOLOGY SECTION --- */}
      <section className="py-24 bg-slate-950/50 border-t border-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nuestra Metodología</h2>
              <p className="text-slate-400 text-lg mb-8">
                No vendemos software "enlatado". Implementamos un proceso consultivo profundo para asegurar que la tecnología sirva al propósito de tu organización.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 font-bold border border-slate-700">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Diagnóstico Estratégico</h3>
                    <p className="text-slate-500">Analizamos los flujos de trabajo actuales y detectamos dónde la IA aporta valor real.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 font-bold border border-slate-700">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Arquitectura Modular</h3>
                    <p className="text-slate-500">Diseñamos soluciones escalables. Empieza pequeño, crece rápido. Sin deuda técnica.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 font-bold border border-slate-700">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Implementación y Acompañamiento</h3>
                    <p className="text-slate-500">La tecnología es fácil, el cambio cultural es difícil. Te acompañamos en la adopción.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Abstract Visual Representation of Process */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10"></div>
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center aspect-square hover:border-cyan-500/30 transition-colors">
                        <Database className="w-10 h-10 text-cyan-500 mb-3" />
                        <span className="text-slate-300 font-medium">Data</span>
                    </div>
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center aspect-square hover:border-purple-500/30 transition-colors mt-8">
                        <Layers className="w-10 h-10 text-purple-500 mb-3" />
                        <span className="text-slate-300 font-medium">Modelos</span>
                    </div>
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center aspect-square hover:border-blue-500/30 transition-colors -mt-8">
                        <Cpu className="w-10 h-10 text-blue-500 mb-3" />
                        <span className="text-slate-300 font-medium">Procesamiento</span>
                    </div>
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center aspect-square hover:border-green-500/30 transition-colors">
                        <BarChart3 className="w-10 h-10 text-green-500 mb-3" />
                        <span className="text-slate-300 font-medium">Insights</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;