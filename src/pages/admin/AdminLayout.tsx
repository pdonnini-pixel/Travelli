import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  Brain,
  Mail,
  Newspaper,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: Building2, label: 'Progetti', path: '/admin/projects' },
  { icon: Users, label: 'Team', path: '/admin/team' },
  { icon: FileText, label: 'Contenuti Pagine', path: '/admin/pages' },
  { icon: Brain, label: 'Intelligence', path: '/admin/intelligence' },
  { icon: Mail, label: 'Contatti Ricevuti', path: '/admin/contacts' },
  { icon: Newspaper, label: 'Newsletter', path: '/admin/newsletter' },
];

export default function AdminLayout() {
  const { user, signOut } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gray-900 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          {sidebarOpen && (
            <h1 className="text-2xl font-bold tracking-tight">TRAVELLI</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-800 rounded transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.path}
                href={item.path}
                className="flex items-center space-x-3 px-4 py-3 rounded hover:bg-gray-800 transition-colors group"
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && (
                  <span className="font-medium">{item.label}</span>
                )}
              </a>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <p className="text-sm text-gray-600 mt-1">Pannello di controllo amministratore</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">{user?.email}</p>
              <p className="text-xs text-gray-500">Amministratore</p>
            </div>
            <div className="w-10 h-10 bg-[#4682B4] rounded-full flex items-center justify-center text-white font-bold">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Progetti Totali</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
                  </div>
                  <Building2 className="w-12 h-12 text-[#4682B4] opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Membri Team</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">50</p>
                  </div>
                  <Users className="w-12 h-12 text-[#4682B4] opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Contatti Ricevuti</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
                  </div>
                  <Mail className="w-12 h-12 text-[#4682B4] opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Newsletter Iscritti</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">156</p>
                  </div>
                  <Newspaper className="w-12 h-12 text-[#4682B4] opacity-20" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benvenuto nel Pannello Admin</h3>
              <p className="text-gray-600 mb-4">
                Da qui puoi gestire tutti gli aspetti del sito Travelli: progetti, contenuti, team e altro ancora.
              </p>
              <p className="text-gray-600">
                Utilizza il menu laterale per navigare tra le diverse sezioni.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
