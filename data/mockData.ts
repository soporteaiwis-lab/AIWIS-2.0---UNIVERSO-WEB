import { User, Product, ClientCompany } from '../types';

// --- Catálogo de Productos AIWIS (Universo Completo) ---
export const products: Product[] = [
  // 1. MASTER ACADEMY
  {
    id: 'aiwis-academy-phase2',
    name: 'AIWIS Master Academy',
    tagline: 'Fase 2 - Adopción IA Corporativa',
    description: 'Portal central de entrenamiento y adopción de Inteligencia Artificial para corporaciones.',
    status: 'active',
    url: 'https://aiwis-training-portal-phase-2-ai-adoption-89422266816.us-west1.run.app',
    features: ['Adopción Corporativa', 'Training Avanzado', 'Fase 2']
  },
  // 2. ACADEMY DEVELOPER
  {
    id: 'academy-developer',
    name: 'Academy Developer',
    tagline: 'Constructor de Portales IA',
    description: 'Plataforma para la creación y gestión de portales corporativos de capacitaciones en IA y tecnologías.',
    status: 'active',
    url: 'https://aiwis-master-portals-ia-89422266816.us-west1.run.app',
    features: ['Builder de Portales', 'Gestión LMS', 'Despliegue Rápido']
  },
  // 3. EDU STUDIO LABS
  {
    id: 'edustudio',
    name: 'Edu Studio Labs',
    tagline: 'Educación Musical Modular',
    description: 'Plataforma educativa para realizar clases de música interactivas y estudio de grabación escolar (Básica y Media).',
    status: 'active',
    url: 'https://edustudio-modular-89422266816.us-west1.run.app',
    features: ['Aula Interactiva', 'DAW Educativo', 'Niveles Adaptativos']
  },
  // 4. ARMONIA HUB
  {
    id: 'armonia',
    name: 'ArmonIA Hub',
    tagline: 'Investigación Musical & IA',
    description: 'Plataforma de diseño e investigación para potenciar a músicos, sonidistas y productores integrando IA en sus flujos.',
    status: 'beta',
    url: 'https://copy-of-armonia-hub-v17-89422266816.us-west1.run.app',
    features: ['Producción Musical', 'IA Generativa', 'Investigación Sonora']
  },
  // 5. CHORD-IA
  {
    id: 'chord-ia',
    name: 'Chord-IA',
    tagline: 'Análisis Armónico en Tiempo Real',
    description: 'Analiza canciones y genera armonía de acordes en tiempo real. Herramienta esencial para músicos.',
    status: 'active',
    url: 'https://copy-of-chord-ia-89422266816.us-west1.run.app',
    features: ['Detección de Acordes', 'Análisis Real-time', 'Asistente de Ensayo']
  },
  // 6. MORPHO STEREO
  {
    id: 'morpho-stereo',
    name: 'Morpho Stereo DSP',
    tagline: 'Procesador de Audio Espacial',
    description: 'Transformación de ondas de audio Mono a Stereo (Prototipo DSP).',
    status: 'development',
    url: 'https://morphostereo-dsp-prototype-89422266816.us-west1.run.app',
    features: ['Mono to Stereo', 'Procesamiento DSP', 'Prototipo']
  },
  // --- APLICACIONES DE CLIENTES / ADOPCIÓN ---
  // 7. SIMPLEDATA CORP
  {
    id: 'simpledata-corp',
    name: 'SimpleData Corporate',
    tagline: 'Portal Corporativo (Prototipo)',
    description: 'Espacio de gestión de proyectos y visualización de datos corporativos.',
    status: 'active',
    url: 'https://sd-spaceproyectos-89422266816.us-west1.run.app',
    features: ['Gestión de Proyectos', 'Data Viz', 'Corporativo']
  },
  // 8. SIMPLEDATA ACADEMY
  {
    id: 'simpledata-academy',
    name: 'SimpleData Academy',
    tagline: 'Portal de Adopción IA',
    description: 'Portal de adopción de IA corporativa específico para el ecosistema SimpleData.',
    status: 'active',
    url: 'https://simpledata-portal-89422266816.us-west1.run.app',
    features: ['Capacitación Datos', 'Adopción IA', 'LMS Corporativo']
  },
  // 9. AFRI ACADEMY
  {
    id: 'afri-academy',
    name: 'AFRI Academy',
    tagline: 'Portal de Adopción IA',
    description: 'Portal de adopción de IA corporativa bajo la metodología AFRI.',
    status: 'active',
    url: 'https://afri-portal-89422266816.us-west1.run.app',
    features: ['Metodología AFRI', 'Training IA', 'Portal Cliente']
  },
  // 10. ADA ACADEMY
  {
    id: 'ada-academy',
    name: 'ADA Academy',
    tagline: 'Portal de Adopción IA',
    description: 'Portal de adopción de IA corporativa bajo la metodología ADA.',
    status: 'active',
    url: 'https://ada-ia-portal-89422266816.us-west1.run.app',
    features: ['Metodología ADA', 'Training IA', 'Portal Cliente']
  }
];

// --- Empresas Clientes ---
export const companies: ClientCompany[] = [
  {
    id: 'aiwis-corp',
    name: 'AIWIS Corporation',
    website: 'https://www.aiwis.cl',
    description: 'Casa matriz y administradora de la plataforma.',
    // Master Root tiene acceso a TODO el universo
    assignedProducts: [
        'aiwis-academy-phase2',
        'academy-developer',
        'edustudio',
        'armonia',
        'chord-ia',
        'morpho-stereo',
        'simpledata-corp',
        'simpledata-academy',
        'afri-academy',
        'ada-academy'
    ]
  },
  {
    id: 'simple-client-spa',
    name: 'SimpleData SpA',
    website: 'https://www.simpledata.cl',
    description: 'Cliente corporativo demo.',
    assignedProducts: ['simpledata-corp', 'simpledata-academy']
  }
];

// --- Usuarios del Sistema ---
export const users: User[] = [
  {
    id: 'admin-01',
    name: 'Armin Salazar (Master Root)',
    email: 'aiwis@aiwis.ai',
    password: '1234', 
    role: 'admin',
    companyId: 'aiwis-corp',
    avatar: 'https://ui-avatars.com/api/?name=Armin+Salazar&background=0891b2&color=fff'
  },
  {
    id: 'client-01',
    name: 'Cliente Demo',
    email: 'demo@cliente.cl',
    password: '1234', 
    role: 'client',
    companyId: 'simple-client-spa',
    avatar: 'https://ui-avatars.com/api/?name=Cliente+Demo&background=random'
  }
];

// Helper para obtener productos por usuario
export const getUserProducts = (user: User): Product[] => {
  const company = companies.find(c => c.id === user.companyId);
  if (!company) return [];
  return products.filter(p => company.assignedProducts.includes(p.id));
};