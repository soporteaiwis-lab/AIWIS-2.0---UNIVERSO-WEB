import React, { useState } from 'react';
import { users as initialUsers, products as initialProducts, companies as initialCompanies } from '../../data/mockData';
import { Product, ClientCompany, ProductCategory } from '../../types';
import { 
  Users, Box, DollarSign, Server, ExternalLink, Shield, Briefcase, 
  Zap, Plus, Save, Link as LinkIcon, Trash2, Edit3, Check, X,
  LayoutDashboard, Layers, Building2, Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminView: React.FC = () => {
  // --- STATE MANAGEMENT (Simulando Base de Datos) ---
  const [productsList, setProductsList] = useState<Product[]>(initialProducts);
  const [companiesList, setCompaniesList] = useState<ClientCompany[]>(initialCompanies);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'clients' | 'links'>('dashboard');

  // --- FORM STATES ---
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '', tagline: '', description: '', category: 'education', status: 'active', url: ''
  });
  
  const [newClient, setNewClient] = useState<{name: string, portalName: string, portalUrl: string}>({
    name: '', portalName: '', portalUrl: ''
  });

  // --- ACTIONS ---

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const productToAdd: Product = {
      id: `new-prod-${Date.now()}`,
      name: newProduct.name || 'Nuevo Producto',
      tagline: newProduct.tagline || 'Nueva Innovación',
      description: newProduct.description || '',
      category: newProduct.category as ProductCategory,
      status: 'active',
      url: newProduct.url,
      features: ['Feature 1', 'Feature 2']
    };
    setProductsList([...productsList, productToAdd]);
    setNewProduct({ name: '', tagline: '', description: '', category: 'education', status: 'active', url: '' });
    alert('Producto agregado al catálogo correctamente.');
  };

  const handleAddClient = (e: React.FormEvent) => {
    e.preventDefault();
    const clientToAdd: ClientCompany = {
      id: `client-${Date.now()}`,
      name: newClient.name,
      description: 'Nuevo partner corporativo',
      portals: [
        {
          id: `portal-${Date.now()}`,
          name: newClient.portalName,
          type: 'management',
          url: newClient.portalUrl
        }
      ],
      assignedProducts: []
    };
    setCompaniesList([...companiesList, clientToAdd]);
    setNewClient({ name: '', portalName: '', portalUrl: '' });
    alert('Cliente y Portal configurados correctamente.');
  };

  const handleDeleteProduct = (id: string) => {
    if(window.confirm('¿Seguro que deseas eliminar este producto?')) {
      setProductsList(productsList.filter(p => p.id !== id));
    }
  };

  const handleUpdateLink = (type: 'product' | 'portal', id: string, newUrl: string, portalId?: string) => {
    if (type === 'product') {
        setProductsList(productsList.map(p => p.id === id ? { ...p, url: newUrl } : p));
    } else {
        setCompaniesList(companiesList.map(c => {
            if (c.id === id) {
                return {
                    ...c,
                    portals: c.portals.map(p => p.id === portalId ? { ...p, url: newUrl } : p)
                };
            }
            return c;
        }));
    }
  };

  // --- RENDER HELPERS ---
  const clientPortfolio = companiesList.filter(c => c.id !== 'aiwis-corp');

  return (
    <div className="space-y-6 pb-20">
      
      {/* HEADER & NAV */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Shield className="w-8 h-8 text-cyan-500" />
                Panel de Control
            </h1>
            <p className="text-slate-400 text-sm">Administración centralizada del ecosistema AIWIS.</p>
        </div>
        
        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
            <NavButton active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} icon={<LayoutDashboard size={18}/>} label="Dashboard" />
            <NavButton active={activeTab === 'products'} onClick={() => setActiveTab('products')} icon={<Layers size={18}/>} label="Productos" />
            <NavButton active={activeTab === 'clients'} onClick={() => setActiveTab('clients')} icon={<Building2 size={18}/>} label="Clientes" />
            <NavButton active={activeTab === 'links'} onClick={() => setActiveTab('links')} icon={<Activity size={18}/>} label="Link Health" />
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <AnimatePresence mode="wait">
        
        {/* VIEW: DASHBOARD OVERVIEW */}
        {activeTab === 'dashboard' && (
            <motion.div 
                key="dashboard"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
            >
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <KPICard title="Ingresos (ARR)" value="$4.2M" icon={<DollarSign className="text-green-500" />} />
                    <KPICard title="Apps Activas" value={productsList.length.toString()} icon={<Box className="text-purple-500" />} />
                    <KPICard title="Partners" value={clientPortfolio.length.toString()} icon={<Briefcase className="text-yellow-500" />} />
                    <KPICard title="Usuarios Total" value={initialUsers.length.toString()} icon={<Users className="text-cyan-500" />} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-cyan-400" /> Últimos Productos
                        </h3>
                        <div className="space-y-3">
                            {productsList.slice(0, 4).map(p => (
                                <div key={p.id} className="flex items-center justify-between p-3 bg-slate-950 rounded border border-slate-800">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full ${p.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                        <span className="text-slate-300 text-sm font-medium">{p.name}</span>
                                    </div>
                                    <span className="text-[10px] uppercase bg-slate-900 px-2 py-1 rounded text-slate-500">{p.category}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                         <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                            <Server className="w-5 h-5 text-green-400" /> Estado de Portales
                        </h3>
                         <div className="space-y-3">
                            {clientPortfolio.slice(0, 4).map(c => (
                                <div key={c.id} className="flex items-center justify-between p-3 bg-slate-950 rounded border border-slate-800">
                                    <span className="text-slate-300 text-sm font-medium">{c.name}</span>
                                    <div className="flex gap-2">
                                        {c.portals.map(portal => (
                                            <span key={portal.id} className="text-[10px] bg-green-900/20 text-green-500 px-2 py-1 rounded border border-green-900/30 flex items-center gap-1">
                                                <Check className="w-3 h-3" /> Online
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        )}

        {/* VIEW: MANAGE PRODUCTS */}
        {activeTab === 'products' && (
            <motion.div 
                key="products"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
                {/* Form */}
                <div className="lg:col-span-1">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sticky top-24">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Plus className="w-5 h-5 text-cyan-500" /> Agregar Producto
                        </h3>
                        <form onSubmit={handleAddProduct} className="space-y-4">
                            <InputGroup label="Nombre del Producto" value={newProduct.name || ''} onChange={v => setNewProduct({...newProduct, name: v})} placeholder="Ej: Edu Studio X" />
                            <InputGroup label="Tagline (Subtítulo)" value={newProduct.tagline || ''} onChange={v => setNewProduct({...newProduct, tagline: v})} placeholder="Ej: Revolución Musical" />
                            
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Categoría</label>
                                <select 
                                    className="w-full bg-slate-950 border border-slate-700 text-white rounded p-3 text-sm focus:border-cyan-500 outline-none"
                                    value={newProduct.category}
                                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value as ProductCategory})}
                                >
                                    <option value="education">Educación</option>
                                    <option value="creative">Creatividad</option>
                                    <option value="corporate">Corporativo</option>
                                    <option value="innovation">Innovación (I+D)</option>
                                </select>
                            </div>

                            <InputGroup label="URL de la Aplicación" value={newProduct.url || ''} onChange={v => setNewProduct({...newProduct, url: v})} placeholder="https://..." />
                            
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Descripción</label>
                                <textarea 
                                    className="w-full bg-slate-950 border border-slate-700 text-white rounded p-3 text-sm focus:border-cyan-500 outline-none h-24"
                                    value={newProduct.description}
                                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                                    placeholder="Breve descripción..."
                                />
                            </div>

                            <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                                <Save className="w-4 h-4" /> Guardar Producto
                            </button>
                        </form>
                    </div>
                </div>

                {/* List */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-xl font-bold text-white mb-2">Catálogo Actual</h3>
                    {productsList.map(product => (
                        <div key={product.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-bold text-white">{product.name}</h4>
                                    <span className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold ${
                                        product.category === 'education' ? 'bg-blue-900/30 text-blue-400' : 
                                        product.category === 'creative' ? 'bg-purple-900/30 text-purple-400' : 'bg-slate-800 text-slate-400'
                                    }`}>{product.category}</span>
                                </div>
                                <p className="text-sm text-slate-400 truncate max-w-md">{product.url}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href={product.url} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 text-slate-400 hover:text-white rounded hover:bg-slate-700">
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <button 
                                    onClick={() => handleDeleteProduct(product.id)}
                                    className="p-2 bg-red-900/20 text-red-500 hover:bg-red-900/40 rounded transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        )}

        {/* VIEW: MANAGE CLIENTS */}
        {activeTab === 'clients' && (
            <motion.div 
                key="clients"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
                {/* Form */}
                <div className="lg:col-span-1">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sticky top-24">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-yellow-500" /> Nuevo Cliente
                        </h3>
                        <form onSubmit={handleAddClient} className="space-y-4">
                            <InputGroup label="Nombre Empresa" value={newClient.name} onChange={v => setNewClient({...newClient, name: v})} placeholder="Ej: Corp Inc." />
                            
                            <div className="p-4 bg-slate-950 rounded border border-slate-800">
                                <h4 className="text-xs font-bold text-cyan-500 uppercase mb-3">Configuración Portal</h4>
                                <InputGroup label="Nombre del Portal" value={newClient.portalName} onChange={v => setNewClient({...newClient, portalName: v})} placeholder="Ej: Corp Academy" />
                                <div className="h-2"></div>
                                <InputGroup label="URL del Portal" value={newClient.portalUrl} onChange={v => setNewClient({...newClient, portalUrl: v})} placeholder="https://..." />
                            </div>

                            <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                                <Save className="w-4 h-4" /> Registrar Cliente
                            </button>
                        </form>
                    </div>
                </div>

                {/* List */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-xl font-bold text-white mb-2">Cartera de Clientes</h3>
                    {clientPortfolio.map(client => (
                        <div key={client.id} className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="font-bold text-xl text-white">{client.name}</h4>
                                    <p className="text-sm text-slate-500">Partner Activo</p>
                                </div>
                                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center font-bold text-slate-300 border border-slate-700">
                                    {client.logo || client.name.charAt(0)}
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <p className="text-xs font-bold text-slate-500 uppercase">Portales Asignados</p>
                                {client.portals.map(portal => (
                                    <div key={portal.id} className="flex items-center justify-between p-3 bg-slate-950 rounded border border-slate-800">
                                        <div className="flex items-center gap-2">
                                            <Server className="w-4 h-4 text-cyan-500" />
                                            <span className="text-sm text-slate-300">{portal.name}</span>
                                        </div>
                                        <a href={portal.url} target="_blank" rel="noreferrer" className="text-xs text-cyan-400 hover:text-white flex items-center gap-1">
                                            {portal.url} <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        )}

        {/* VIEW: LINK HEALTH CHECK */}
        {activeTab === 'links' && (
            <motion.div 
                key="links"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
            >
                <div className="p-6 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <Activity className="w-5 h-5 text-red-500" /> Monitor de Enlaces
                        </h3>
                        <p className="text-slate-400 text-sm">Auditoría rápida de URLs de salida para evitar errores 404.</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-white">{productsList.length + clientPortfolio.reduce((acc, c) => acc + c.portals.length, 0)}</p>
                        <p className="text-xs text-slate-500 uppercase">Enlaces Totales</p>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-950 text-slate-500 text-xs uppercase tracking-wider">
                            <tr>
                                <th className="p-4 border-b border-slate-800">Entidad</th>
                                <th className="p-4 border-b border-slate-800">Tipo</th>
                                <th className="p-4 border-b border-slate-800 w-1/2">URL Destino</th>
                                <th className="p-4 border-b border-slate-800 text-right">Estado</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-sm">
                            {/* Products Links */}
                            {productsList.map(p => (
                                <LinkRow 
                                    key={p.id} 
                                    name={p.name} 
                                    type="Producto" 
                                    url={p.url || ''} 
                                    onUpdate={(val) => handleUpdateLink('product', p.id, val)}
                                />
                            ))}
                            {/* Client Portals Links */}
                            {clientPortfolio.map(c => 
                                c.portals.map(portal => (
                                    <LinkRow 
                                        key={portal.id} 
                                        name={`${c.name} - ${portal.name}`} 
                                        type="Portal Cliente" 
                                        url={portal.url} 
                                        onUpdate={(val) => handleUpdateLink('portal', c.id, val, portal.id)}
                                    />
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

// --- SUBCOMPONENTS ---

const NavButton = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) => (
    <button 
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            active 
            ? 'bg-slate-800 text-white shadow-lg' 
            : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
        }`}
    >
        {icon} <span className="hidden md:inline">{label}</span>
    </button>
);

const KPICard = ({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) => (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
        <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-2">{title}</p>
        <div className="flex justify-between items-end">
            <p className="text-2xl font-bold text-white">{value}</p>
            {icon}
        </div>
    </div>
);

const InputGroup = ({ label, value, onChange, placeholder }: { label: string, value: string, onChange: (val: string) => void, placeholder?: string }) => (
    <div>
        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{label}</label>
        <input 
            type="text" 
            className="w-full bg-slate-950 border border-slate-700 text-white rounded p-3 text-sm focus:border-cyan-500 outline-none transition-colors"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    </div>
);

const LinkRow = ({ name, type, url, onUpdate }: { name: string, type: string, url: string, onUpdate: (val: string) => void }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [localUrl, setLocalUrl] = useState(url);

    const handleSave = () => {
        onUpdate(localUrl);
        setIsEditing(false);
    };

    return (
        <tr className="hover:bg-slate-800/30 transition-colors">
            <td className="p-4 text-white font-medium">{name}</td>
            <td className="p-4">
                <span className={`text-[10px] px-2 py-1 rounded uppercase font-bold ${type === 'Producto' ? 'bg-cyan-900/20 text-cyan-400' : 'bg-yellow-900/20 text-yellow-400'}`}>
                    {type}
                </span>
            </td>
            <td className="p-4 font-mono text-slate-400">
                {isEditing ? (
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            value={localUrl} 
                            onChange={(e) => setLocalUrl(e.target.value)}
                            className="w-full bg-slate-950 border border-cyan-500 text-white rounded px-2 py-1 text-xs outline-none"
                        />
                        <button onClick={handleSave} className="text-green-500 hover:text-green-400"><Check size={16}/></button>
                        <button onClick={() => setIsEditing(false)} className="text-red-500 hover:text-red-400"><X size={16}/></button>
                    </div>
                ) : (
                    <div className="flex items-center justify-between group">
                        <span className="truncate max-w-[300px]">{url}</span>
                        <button onClick={() => setIsEditing(true)} className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-cyan-400 transition-opacity">
                            <Edit3 size={14} />
                        </button>
                    </div>
                )}
            </td>
            <td className="p-4 text-right">
                <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={16} />
                </a>
            </td>
        </tr>
    );
};

export default AdminView;