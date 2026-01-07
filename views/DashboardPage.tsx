
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { 
  LayoutDashboard, Building2, CreditCard, Settings, LogOut, Search, Bell, 
  ArrowUpRight, ArrowDownRight, Sparkles, Filter, Download, Crown, ChevronDown, User, Layers
} from 'lucide-react';
import { MOCK_COMPANIES, CHART_DATA, COLORS } from '../constants';

interface DashboardPageProps {
  onExit: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onExit }) => {
  return (
    <div className="flex min-h-screen bg-[#050505] text-[#E5E5E5]">
      {/* Premium Sidebar */}
      <aside className="w-72 bg-[#0A0A0A] border-r border-white/5 flex flex-col fixed inset-y-0 left-0 z-40 shadow-2xl">
        <div className="p-10">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="w-10 h-10 gold-bg-gradient rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/10 group-hover:scale-110 transition-transform">
              <Crown className="text-black" size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase">BRVXON</span>
          </div>
        </div>

        <div className="flex-1 px-6 space-y-12">
          <div>
            <span className="px-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-6 block">Menu Principal</span>
            <nav className="space-y-2">
              <SidebarLink icon={<LayoutDashboard size={20} />} label="Performance" active />
              <SidebarLink icon={<Layers size={20} />} label="Patrimoine" />
              <SidebarLink icon={<Building2 size={20} />} label="Filiales" />
              <SidebarLink icon={<CreditCard size={20} />} label="Flux Cash" />
            </nav>
          </div>

          <div>
            <span className="px-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-6 block">Intelligence</span>
            <nav className="space-y-2">
              <SidebarLink icon={<Sparkles size={20} />} label="Predictive IA" />
              <SidebarLink icon={<Settings size={20} />} label="Configuration" />
            </nav>
          </div>
        </div>

        <div className="p-8 border-t border-white/5">
          <div className="bg-white/5 rounded-2xl p-4 mb-6 border border-white/5">
             <div className="flex items-center space-x-3 mb-3">
               <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-bold text-xs">V</div>
               <div className="flex-1 overflow-hidden">
                 <div className="text-sm font-bold truncate text-white">Victor de Rothschild</div>
                 <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Elite Member</div>
               </div>
             </div>
             <div className="w-full bg-black h-1 rounded-full overflow-hidden">
               <div className="bg-[#D4AF37] h-full w-3/4"></div>
             </div>
          </div>
          <button 
            onClick={onExit}
            className="flex items-center space-x-4 text-gray-500 hover:text-white transition-all w-full px-4 py-3 rounded-xl hover:bg-white/5 group"
          >
            <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Quitter</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-72 flex-1 p-12 bg-[#050505]">
        {/* Top Header Bar */}
        <header className="flex items-center justify-between mb-16">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 font-serif-luxury italic">Vue d'Ensemble</h1>
            <p className="text-gray-500 font-medium tracking-tight">Rapport consolidé • <span className="text-[#D4AF37]">{new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</span></p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Rechercher une entité..." 
                className="pl-12 pr-6 py-3 bg-[#0A0A0A] border border-white/5 rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 w-80 text-sm font-medium transition-all"
              />
            </div>
            <button className="relative w-12 h-12 glass flex items-center justify-center rounded-2xl hover:border-[#D4AF37]/50 transition-all">
              <Bell size={20} className="text-gray-400" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]"></span>
            </button>
            <button className="flex items-center space-x-3 glass px-4 py-2 rounded-2xl hover:border-[#D4AF37]/30 transition-all">
              <div className="w-8 h-8 rounded-lg gold-bg-gradient flex items-center justify-center shadow-lg">
                <User size={16} className="text-black" />
              </div>
              <ChevronDown size={14} className="text-gray-500" />
            </button>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <KPICard label="Volume de Revenus" value="10,358,000 €" trend={12.5} color="#D4AF37" />
          <KPICard label="Opérations / Mois" value="1,452" trend={4.2} color="#F9DE81" />
          <KPICard label="Capital Connecté" value="340.5 M€" trend={2.1} color="#D4AF37" />
        </div>

        {/* Analytics & Insights Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2 glass p-10 rounded-[40px] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Crown size={120} />
            </div>
            <div className="flex items-center justify-between mb-12 relative z-10">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Croissance Organique</h2>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Flux de Trésorerie Consolidés</p>
              </div>
              <div className="flex bg-black p-1 rounded-xl">
                <button className="px-5 py-2 text-xs font-black uppercase tracking-widest text-[#D4AF37] bg-white/5 rounded-lg shadow-inner">Mensuel</button>
                <button className="px-5 py-2 text-xs font-black uppercase tracking-widest text-gray-600 hover:text-white transition-all">Annuels</button>
              </div>
            </div>
            <div className="h-[380px] w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHART_DATA}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity={0.4}/>
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#222" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#444', fontSize: 11, fontWeight: 700}} dy={15} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#444', fontSize: 11, fontWeight: 700}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0A0A0A', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.2)', color: '#fff' }}
                    itemStyle={{ color: '#D4AF37', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#D4AF37" strokeWidth={4} fillOpacity={1} fill="url(#colorRevenue)" animationDuration={2000} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[40px] text-black shadow-[0_0_60px_rgba(255,255,255,0.05)] flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-black/10">
                <Sparkles size={32} className="text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tight leading-tight uppercase">Intelligence Strategique</h3>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed font-medium">
                  "L'IA anticipe une hausse de <span className="text-black font-black">12.5%</span> de vos revenus filiales pour le trimestre suivant. 
                  <span className="block mt-2 font-bold italic text-black/40">Recommandation: Consolidation immédiate de Farel Digital.</span>"
                </p>
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Opportunité de Marché</div>
                  <div className="text-lg font-bold">+3.2M€ arbitrage identifié</div>
                </div>
              </div>
            </div>
            <button className="mt-12 w-full py-5 bg-black text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all shadow-xl shadow-black/20">
              Générer Rapport IA
            </button>
          </div>
        </div>

        {/* Wealth Portofolio Table */}
        <div className="glass rounded-[40px] border border-white/5 overflow-hidden">
          <div className="p-10 border-b border-white/5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Portefeuille Elite</h2>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Audit Temps Réel</p>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 px-6 py-3 glass rounded-xl hover:border-[#D4AF37]/50 text-gray-400 text-xs font-bold uppercase tracking-widest transition-all">
                <Filter size={16} />
                <span>Segmentation</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 gold-bg-gradient rounded-xl hover:scale-105 text-black text-xs font-black uppercase tracking-widest transition-all">
                <Download size={16} />
                <span>Consolider</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/2 text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
                  <th className="px-10 py-6">Entité Strategique</th>
                  <th className="px-10 py-6">Secteur</th>
                  <th className="px-10 py-6">Statut</th>
                  <th className="px-10 py-6 text-right">Apport Flux</th>
                  <th className="px-10 py-6 text-right">Dernière Veille</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {MOCK_COMPANIES.map((company) => (
                  <tr key={company.id} className="hover:bg-white/[0.03] transition-colors group">
                    <td className="px-10 py-7">
                      <div className="flex items-center space-x-5">
                        <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-[#D4AF37] font-black text-lg group-hover:scale-110 transition-transform">
                          {company.name.charAt(0)}
                        </div>
                        <div>
                           <div className="font-bold text-white text-base tracking-tight">{company.name}</div>
                           <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">ID: #{company.id}002</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-7">
                      <span className="text-gray-400 font-bold text-sm">{company.industry}</span>
                    </td>
                    <td className="px-10 py-7">
                      <span className={`inline-flex items-center px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em]
                        ${company.status === 'active' ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/20' : 
                          company.status === 'pending' ? 'bg-white/10 text-gray-400' : 'bg-[#16B87F]/20 text-[#16B87F]'}
                      `}>
                        {company.status}
                      </span>
                    </td>
                    <td className="px-10 py-7 text-right">
                      <span className="font-serif-luxury italic text-xl text-white">
                        {company.revenue > 0 ? `€ ${company.revenue.toLocaleString()}` : 'En attente'}
                      </span>
                    </td>
                    <td className="px-10 py-7 text-right text-gray-600 text-[10px] font-bold uppercase tracking-widest group-hover:text-gray-300 transition-colors">
                      {company.lastActive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

const SidebarLink: React.FC<{icon: React.ReactNode, label: string, active?: boolean}> = ({icon, label, active}) => (
  <a href="#" className={`flex items-center space-x-5 px-6 py-4 rounded-2xl transition-all font-bold text-sm tracking-tight ${
    active ? 'bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.1)]' : 'text-gray-600 hover:text-white hover:bg-white/5'
  }`}>
    <span className={active ? 'text-black' : 'text-[#D4AF37]'}>{icon}</span>
    <span>{label}</span>
  </a>
);

const KPICard: React.FC<{label: string, value: string, trend?: number, color: string}> = ({label, value, trend, color}) => (
  <div className="glass p-8 rounded-[40px] border border-white/5 relative group hover:border-[#D4AF37]/30 transition-all">
    <div className="absolute top-8 right-8 text-[#D4AF37] opacity-20 group-hover:opacity-100 transition-opacity">
       <Crown size={20} />
    </div>
    <div className="mb-6">
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">{label}</span>
    </div>
    <div className="flex items-end justify-between">
      <div>
        <div className="text-3xl font-bold text-white mb-2 tracking-tighter">{value}</div>
        {trend && (
          <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">
            <ArrowUpRight size={14} className="mr-2" />
            <span>+{trend}% vs mois dernier</span>
          </div>
        )}
      </div>
      <div className="w-16 h-1 gold-bg-gradient rounded-full opacity-20 group-hover:opacity-100 transition-all"></div>
    </div>
  </div>
);

export default DashboardPage;
