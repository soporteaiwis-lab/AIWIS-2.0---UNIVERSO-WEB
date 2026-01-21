import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-wider">AIWIS</h3>
            <p className="text-slate-400 text-sm">
              Plataforma de inteligencia artificial y gestión educativa avanzada.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center text-slate-400 text-sm">
                <Phone className="h-4 w-4 mr-2 text-cyan-500" />
                <span>+56 9 3958 0988</span>
              </div>
              <div className="flex items-center text-slate-400 text-sm">
                <Mail className="h-4 w-4 mr-2 text-cyan-500" />
                <span>soporte.aiwis@gmail.com</span>
              </div>
              <div className="flex items-center text-slate-400 text-sm">
                <Globe className="h-4 w-4 mr-2 text-cyan-500" />
                <span>www.aiwis.cl</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liderazgo</h3>
            <p className="text-slate-400 text-sm mb-1">CEO Armin Wildo Salazar San Martin</p>
            <p className="text-xs text-slate-500">© 2024 AIWIS Platform. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;