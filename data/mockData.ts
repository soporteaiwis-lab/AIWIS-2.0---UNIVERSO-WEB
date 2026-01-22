import { User, Product, ClientCompany } from '../types';

// --- 1. CATÁLOGO DE PRODUCTOS AIWIS (IP PROPIA) ---
export const products: Product[] = [
  // CATEGORÍA: EDUCATION (EDTECH)
  {
    id: 'edustudio',
    name: 'Edu Studio Labs',
    category: 'education',
    tagline: 'Plataforma Educativa Progresiva',
    description: 'DAW Educativo Modular donde los alumnos cantan, tocan y componen. Integra Piano Roll y Rúbricas Mineduc automatizadas.',
    status: 'active',
    url: 'https://edustudio-modular-89422266816.us-west1.run.app',
    features: ['Niveles: Explorer, Maker & Pro', 'Cuaderno Digital & Evaluación', 'Motor de Audio Web']
  },
  {
    id: 'aiwis-master-academy',
    name: 'AIWIS Master Academy',
    category: 'education',
    tagline: 'Centro de Entrenamiento Global',
    description: 'Portal central de adopción de IA. Certificaciones y rutas de aprendizaje para docentes y directivos.',
    status: 'active',
    url: 'https://aiwis-training-portal-phase-2-ai-adoption-89422266816.us-west1.run.app',
    features: ['Ruta de Adopción', 'Certificación Docente']
  },

  // CATEGORÍA: CREATIVE (MÚSICA & ARTE)
  {
    id: 'armonia',
    name: 'ArmonIA Platform',
    category: 'creative',
    tagline: 'Copiloto de Producción Híbrida',
    description: 'Estudio de producción musical asistido por IA. Generación de Stems, análisis espectral y Suno Lab integration.',
    status: 'beta',
    url: 'https://copy-of-armonia-hub-v17-89422266816.us-west1.run.app',
    features: ['Suno Lab Integration', 'Separación de Stems', 'Toolbox Creativo']
  },
  {
    id: 'chord-ia',
    name: 'Chord-IA',
    category: 'creative',
    tagline: 'Análisis Armónico en Tiempo Real',
    description: 'Herramienta de análisis musical que detecta acordes y estructuras armónicas instantáneamente.',
    status: 'active',
    url: 'https://copy-of-chord-ia-89422266816.us-west1.run.app',
    features: ['Detección de Acordes', 'Asistente de Ensayo']
  },
  
  // CATEGORÍA: INNOVATION (I+D)
  {
    id: 'morpho-stereo',
    name: 'Morpho Stereo DSP',
    category: 'innovation',
    tagline: 'Procesamiento de Audio Espacial',
    description: 'Investigación en transformación de ondas de audio Mono a Stereo mediante algoritmos DSP.',
    status: 'development',
    url: 'https://morphostereo-dsp-prototype-89422266816.us-west1.run.app',
    features: ['DSP Processing', 'Mono to Stereo']
  },

  // CATEGORÍA: CORPORATE
  {
    id: 'aiwis-assistant',
    name: 'AIWIS Assistant',
    category: 'corporate',
    tagline: 'Soporte Inteligente 24/7',
    description: 'Agente de IA corporativo entrenado para soporte técnico y gestión de conocimiento organizacional.',
    status: 'development',
    url: '#', 
    features: ['Soporte Nivel 1', 'Base de Conocimiento Dinámica']
  },
  {
    id: 'academy-developer',
    name: 'Academy Developer',
    category: 'corporate',
    tagline: 'Factory de Portales',
    description: 'Infraestructura para el despliegue rápido de academias corporativas y sistemas LMS.',
    status: 'active',
    url: 'https://aiwis-master-portals-ia-89422266816.us-west1.run.app',
    features: ['Portal Builder', 'Gestión LMS']
  }
];

// --- 2. CARTERA DE CLIENTES Y PORTALES EXCLUSIVOS (PARTNERS) ---
export const companies: ClientCompany[] = [
  {
    id: 'aiwis-corp',
    name: 'AIWIS Corporation',
    website: 'https://www.aiwis.cl',
    description: 'Casa matriz. Acceso Total.',
    portals: [], 
    assignedProducts: products.map(p => p.id) 
  },
  {
    id: 'simple-data-client',
    name: 'SimpleData',
    website: 'https://www.simpledata.cl',
    description: 'Inteligencia de Datos y Estrategia Corporativa.',
    logo: 'SD',
    portals: [
      {
        id: 'sd-corp-portal',
        name: 'SimpleData Corporate Space',
        type: 'management',
        url: 'https://sd-spaceproyectos-89422266816.us-west1.run.app'
      },
      {
        id: 'sd-academy-portal',
        name: 'SimpleData Academy',
        type: 'lms',
        url: 'https://simpledata-portal-89422266816.us-west1.run.app'
      }
    ],
    assignedProducts: ['aiwis-assistant'] 
  },
  {
    id: 'afri-client',
    name: 'AFRI',
    description: 'Programa de adopción metodológica educativa.',
    logo: 'AF',
    portals: [
      {
        id: 'afri-portal',
        name: 'AFRI Academy Portal',
        type: 'lms',
        url: 'https://afri-portal-89422266816.us-west1.run.app'
      }
    ],
    assignedProducts: ['edustudio']
  },
  {
    id: 'ada-client',
    name: 'ADA',
    description: 'Transformación digital y capacitación.',
    logo: 'AD',
    portals: [
      {
        id: 'ada-portal',
        name: 'ADA Academy Portal',
        type: 'lms',
        url: 'https://ada-ia-portal-89422266816.us-west1.run.app'
      }
    ],
    assignedProducts: []
  },
  // Cliente Demo Genérico
  {
    id: 'demo-partner',
    name: 'Partner Demo',
    description: 'Entorno de demostración para clientes potenciales.',
    logo: 'PD',
    portals: [
        {
            id: 'demo-portal',
            name: 'Demo Corporate Portal',
            type: 'management',
            url: '#'
        }
    ],
    assignedProducts: ['edustudio', 'armonia']
  }
];

// --- USUARIOS ---
export const users: User[] = [
  {
    id: 'admin-01',
    name: 'Armin Salazar (Master Root)',
    email: 'aiwis@aiwis.ai',
    role: 'admin',
    password: '1234', 
    companyId: 'aiwis-corp',
    avatar: 'https://ui-avatars.com/api/?name=Armin+Salazar&background=0891b2&color=fff'
  },
  {
    id: 'client-simpledata',
    name: 'Admin SimpleData',
    email: 'admin@simpledata.cl',
    role: 'client',
    password: '1234', 
    companyId: 'simple-data-client',
    avatar: 'https://ui-avatars.com/api/?name=Simple+Data&background=f59e0b&color=fff'
  },
  // USUARIO DEMO SOLICITADO
  {
    id: 'user-demo-aiwis',
    name: 'Usuario Demo AIWIS',
    email: 'user.aiwis', // Login sin dominio completo para facilitar acceso
    role: 'client',
    password: '', // Sin password
    companyId: 'demo-partner',
    avatar: 'https://ui-avatars.com/api/?name=User+Demo&background=10b981&color=fff'
  }
];

// Helpers
export const getUserProducts = (user: User): Product[] => {
  const company = companies.find(c => c.id === user.companyId);
  if (!company) return [];
  return products.filter(p => company.assignedProducts.includes(p.id));
};

export const getUserPortals = (user: User) => {
  const company = companies.find(c => c.id === user.companyId);
  if (!company) return [];
  return company.portals;
};