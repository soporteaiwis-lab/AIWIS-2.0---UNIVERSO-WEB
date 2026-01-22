import React from 'react';
import { users, products } from '../../data/mockData';
import { Users, Box, Activity, DollarSign, Trash2, Edit, Shield, Server, ExternalLink } from 'lucide-react';

const AdminView: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Panel Master Root</h1>
        <p className="text-slate-400">Control total del ecosistema AIWIS.</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 text-sm font-medium">Usuarios Totales</h3>
            <Users className="w-5 h-5 text-cyan-500" />
          </div>
          <p className="text-3xl font-bold text-white">{users.length}</p>
          <span className="text-xs text-green-400">+12% vs mes anterior</span>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 text-sm font-medium">Productos Activos</h3>
            <Box className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-3xl font-bold text-white">{products.length}</p>
          <span className="text-xs text-slate-500">En catálogo</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 text-sm font-medium">Estado del Sistema</h3>
            <Activity className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-3xl font-bold text-white">99.9%</p>
          <span className="text-xs text-slate-500">Uptime</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 text-sm font-medium">Ingresos Recurrentes</h3>
            <DollarSign className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="text-3xl font-bold text-white">$4.2M</p>
          <span className="text-xs text-green-400">ARR Estimado</span>
        </div>
      </div>

      {/* All Products List */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Catálogo de Productos y Accesos Rápidos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map(product => (
                    <div key={product.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-slate-950/50 rounded-lg border border-slate-800 hover:border-cyan-500/30 transition-colors">
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
                            <Server className="w-6 h-6 text-slate-400" />
                        </div>
                        <div className="flex-grow">
                            <h4 className="text-white font-medium">{product.name}</h4>
                            <p className="text-sm text-slate-500 line-clamp-1">{product.tagline}</p>
                            <div className="mt-2 flex gap-2">
                                <span className={`text-xs px-2 py-1 rounded text-slate-300 border ${
                                    product.status === 'active' ? 'bg-green-900/20 border-green-900/50 text-green-400' : 'bg-slate-800 border-slate-700'
                                }`}>
                                    {product.status.toUpperCase()}
                                </span>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 w-full md:w-auto">
                            {product.url ? (
                                <a 
                                    href={product.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-cyan-600 text-white rounded-lg transition-colors text-sm font-medium w-full md:w-auto"
                                >
                                    Abrir App <ExternalLink className="w-4 h-4" />
                                </a>
                            ) : (
                                <span className="text-xs text-slate-600 italic px-2">Sin enlace</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h3 className="text-lg font-semibold text-white">Gestión de Usuarios</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-950 text-slate-200 uppercase font-medium">
              <tr>
                <th className="px-6 py-4">Usuario</th>
                <th className="px-6 py-4">Rol</th>
                <th className="px-6 py-4">Empresa / ID</th>
                <th className="px-6 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="font-medium text-white">{user.name}</p>
                      <p className="text-xs">{user.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.role === 'admin' 
                        ? 'bg-purple-900/30 text-purple-400 border border-purple-800' 
                        : 'bg-blue-900/30 text-blue-400 border border-blue-800'
                    }`}>
                      {user.role === 'admin' ? <Shield className="w-3 h-3 mr-1" /> : null}
                      {user.role.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {user.companyId || '-'}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminView;