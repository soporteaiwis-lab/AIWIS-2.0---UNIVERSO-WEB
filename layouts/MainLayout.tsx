import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Fondo fijo global */}
      <div className="fixed inset-0 bg-slate-950 -z-20" />
      
      {/* Elementos de fondo decorativos (animados con CSS nativo o Framer si se implementa a fondo) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-20">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/30 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/30 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      <main className="flex-grow pt-16">
         {/* El pt-16 compensa el Navbar fijo */}
         <div className="w-full">
            <Outlet />
         </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;