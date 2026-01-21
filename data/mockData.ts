import { User, Product, ClientCompany } from '../types';

// --- Catálogo de Productos AIWIS ---
export const products: Product[] = [
  {
    id: 'armonia',
    name: 'ArmonIA',
    tagline: 'Plataforma de Producción Musical Experimental',
    description: 'Copiloto creativo, no reemplaza al músico. Integra Suno y análisis espectral para potenciar la creatividad musical, permitiendo a los artistas explorar nuevos horizontes sonoros asistidos por IA.',
    status: 'beta',
    features: [
      'Generación asistida con Suno AI',
      'Análisis Espectral en tiempo real',
      'Asistente de Composición Melódica',
      'Exportación multiformato'
    ]
  },
  {
    id: 'edustudio',
    name: 'Edu Studio Labs',
    tagline: 'DAW Educativo para Colegios',
    description: 'Innovación para clases de música con niveles adaptativos. Una herramienta diseñada pedagógicamente para introducir a los estudiantes en la producción musical digital.',
    status: 'active',
    features: [
      'Nivel Explorer (Básico)',
      'Nivel Maker (Intermedio)',
      'Nivel Pro (Avanzado)',
      'Gestión de Aula para Docentes',
      'Biblioteca de Instrumentos Virtuales'
    ]
  },
  {
    id: 'simpledata',
    name: 'SimpleData',
    tagline: 'Inteligencia de Datos Corporativos',
    description: 'Suite de análisis de datos simplificada para empresas. Transformamos datos complejos en decisiones estratégicas claras.',
    status: 'active',
    features: [
      'Dashboards en tiempo real',
      'Reportes automatizados',
      'Integración con múltiples fuentes de datos'
    ]
  },
  {
    id: 'aiwis-core',
    name: 'AIWIS Core',
    tagline: 'Ecosistema Central',
    description: 'El núcleo de gestión de inteligencia artificial que potencia todas nuestras soluciones.',
    status: 'active'
  }
];

// --- Empresas Clientes ---
export const companies: ClientCompany[] = [
  {
    id: 'aiwis-corp',
    name: 'AIWIS Corporation',
    website: 'https://www.aiwis.cl',
    description: 'Casa matriz y administradora de la plataforma.',
    assignedProducts: ['armonia', 'edustudio', 'simpledata', 'aiwis-core']
  },
  {
    id: 'simple-client-spa',
    name: 'SimpleData SpA',
    website: 'https://www.simpledata.cl',
    description: 'Cliente corporativo enfocado en análisis de datos.',
    assignedProducts: ['simpledata']
  }
];

// --- Usuarios del Sistema ---
export const users: User[] = [
  {
    id: 'admin-01',
    name: 'Armin Salazar (CEO)',
    email: 'aiwis@aiwis.ai',
    password: '1234', // Simulación
    role: 'admin',
    companyId: 'aiwis-corp',
    avatar: 'https://ui-avatars.com/api/?name=Armin+Salazar&background=0891b2&color=fff'
  },
  {
    id: 'client-01',
    name: 'Cliente Demo',
    email: 'demo@cliente.cl',
    password: '1234', // Simulación
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
