import { User, Product, ClientCompany } from '../types';

// --- 1. CATÁLOGO DE PRODUCTOS AIWIS (IP PROPIA) ---
export const products: Product[] = [
  // CATEGORÍA: EDUCATION (EDTECH)
  {
    id: 'edustudio',
    name: 'Edu Studio Labs',
    category: 'education',
    tagline: 'DAW Educativo Modular',
    description: 'Plataforma educativa para realizar clases de música interactivas y estudio de grabación escolar.',
    status: 'active',
    url: 'https://edustudio-modular-89422266816.us-west1.run.app',
    features: ['Nivel Explorer, Maker & Pro', 'Cuaderno Digital', 'Rúbricas Mineduc']
  },
  {
    id: 'aiwis-master-academy',
    name: 'AIWIS Master Academy',
    category: 'education',
    tagline: 'Training Center Global',
    description: 'Portal central de entrenamiento y adopción de Inteligencia Artificial.',
    status: 'active',
    url: 'https://aiwis-training-portal-phase-2-ai-adoption-89422266816.us-west1.run.app',
    features: ['Fase 2 Adopción', 'Certificaciones']
  },

  // CATEGORÍA: CREATIVE (MÚSICA & ARTE)
  {
    id: 'armonia',
    name: 'ArmonIA Platform',
    category: 'creative',
    tagline: 'Copiloto de Producción',
    description: 'Investigación y diseño para potenciar a músicos integrando IA en sus flujos.',
    status: 'beta',
    url: 'https://copy-of-armonia-hub-v17-89422266816.us-west1.run.app',
    features: ['Suno Lab Integration', 'Análisis Espectral', 'Toolbox Creativo']
  },
  {
    id: 'chord-ia',
    name: 'Chord-IA',
    category: 'creative',
    tagline: 'Análisis Armónico',
    description: 'Analiza canciones y genera armonía de acordes en tiempo real.',
    status: 'active',
    url: 'https://copy-of-chord-ia-89422266816.us-west1.run.app',
    features: ['Real-time Chords', 'Asistente de Ensayo']
  },
  
  // CATEGORÍA: INNOVATION (I+D)
  {
    id: 'morpho-stereo',
    name: 'Morpho Stereo DSP',
    category: 'innovation',
    tagline: 'Audio Espacial',
    description: 'Prototipo de transformación de ondas de audio Mono a Stereo.',
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
    description: 'Asistente virtual corporativo para gestión de consultas y soporte técnico.',
    status: 'development',
    url: '#', // Placeholder
    features: ['Soporte Nivel 1', 'Base de Conocimiento Dinámica']
  },
  {
    id: 'academy-developer',
    name: 'Academy Developer',
    category: 'corporate',
    tagline: 'Constructor de Portales',
    description: 'Plataforma para la creación y despliegue rápido de portales corporativos.',
    status: 'active',
    url: 'https://aiwis-master-portals-ia-89422266816.us-west1.run.app',
    features: ['Portal Builder', 'Gestión LMS']
  }
];

// --- 2. CARTERA DE CLIENTES Y PORTALES EXCLUSIVOS ---
export const companies: ClientCompany[] = [
  {
    id: 'aiwis-corp',
    name: 'AIWIS Corporation',
    website: 'https://www.aiwis.cl',
    description: 'Casa matriz. Acceso Total.',
    portals: [], // Admin accede directo por Dashboard
    assignedProducts: products.map(p => p.id) // Acceso a todos los productos propios
  },
  {
    id: 'simple-data-client',
    name: 'SimpleData',
    website: 'https://www.simpledata.cl',
    description: 'Líderes en inteligencia de datos corporativos.',
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
    assignedProducts: ['aiwis-assistant'] // Productos Aiwis que ellos usan
  },
  {
    id: 'afri-client',
    name: 'AFRI',
    description: 'Programa de adopción metodológica.',
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
    description: 'Programa de adopción metodológica.',
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
  }
];

// Helper: Obtener productos Aiwis asignados al usuario
export const getUserProducts = (user: User): Product[] => {
  const company = companies.find(c => c.id === user.companyId);
  if (!company) return [];
  return products.filter(p => company.assignedProducts.includes(p.id));
};

// Helper: Obtener portales exclusivos del cliente
export const getUserPortals = (user: User) => {
  const company = companies.find(c => c.id === user.companyId);
  if (!company) return [];
  return company.portals;
};