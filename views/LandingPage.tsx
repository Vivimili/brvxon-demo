
import React from 'react';
import { ChevronRight, ShieldCheck, PieChart, BarChart4, Zap, ArrowRight, CheckCircle2, Crown, Gem, Briefcase } from 'lucide-react';

interface LandingPageProps {
  onLaunch: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLaunch }) => {
  return (
    <div className="bg-[#050505] min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 glass z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gold-bg-gradient rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
              <Crown className="text-black" size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">BRVXON</span>
          </div>
          <div className="hidden lg:flex items-center space-x-12 text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
            <a href="#problem" className="hover:text-[#D4AF37] transition-all">Legacy</a>
            <a href="#solution" className="hover:text-[#D4AF37] transition-all">Vision</a>
            <a href="#stats" className="hover:text-[#D4AF37] transition-all">Performance</a>
            <a href="#pricing" className="hover:text-[#D4AF37] transition-all">Adhesion</a>
          </div>
          <button 
            onClick={onLaunch}
            className="group relative inline-flex items-center px-8 py-3 overflow-hidden font-bold rounded-full bg-white text-black hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Portail Elite</span>
              <ChevronRight size={18} />
            </span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-52 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#D4AF37]/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-3 border border-white/10 px-6 py-2 rounded-full mb-10 bg-white/5 animate-pulse">
            <Gem size={16} className="text-[#D4AF37]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-300">Edition Ultra-Premium pour Grands Comptes</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.1] mb-10">
            L'excellence financière <br /> 
            <span className="gold-gradient font-serif-luxury italic">redéfinie.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
            BRVXON fusionne l'intelligence artificielle de pointe et le prestige du service patrimonial pour les directions financières les plus exigeantes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <button 
              onClick={onLaunch}
              className="w-full sm:w-auto gold-bg-gradient text-black px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(212,175,55,0.3)]"
            >
              Accès Privilège
            </button>
            <button className="w-full sm:w-auto text-white border-b-2 border-[#D4AF37] pb-1 px-4 font-bold tracking-widest hover:text-[#D4AF37] transition-all">
              Consultation Privée
            </button>
          </div>
          
          <div className="mt-32 relative max-w-6xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-20 blur-2xl rounded-3xl"></div>
            <div className="relative glass rounded-3xl p-4 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1611974714658-058e11eeeb3c?auto=format&fit=crop&q=80&w=2070" 
                alt="Fintech Luxury" 
                className="rounded-2xl shadow-2xl opacity-80 grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-32 bg-[#0A0A0A] px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -left-10 top-0 text-[10rem] font-black text-white/5 leading-none select-none">01</div>
            <h2 className="text-5xl font-bold text-white mb-10 leading-tight">La fragilité du statu quo financier.</h2>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed">
              Dans un monde de volatilité extrême, l'incertitude est le coût caché le plus élevé. Les solutions archaïques ne suffisent plus à protéger vos actifs stratégiques.
            </p>
            <div className="space-y-8">
              <ProblemFeature title="Opacité des Flux" desc="Des données silotées empêchant une vision à 360° du patrimoine." />
              <ProblemFeature title="Inertie Décisionnelle" desc="Un temps de réaction supérieur à la vitesse du marché." />
              <ProblemFeature title="Exposition aux Risques" desc="L'absence de prédictions IA laisse vos marges vulnérables." />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="glass p-12 rounded-[40px] transform hover:-translate-y-4 transition-all border-l-4 border-l-[#D4AF37]">
              <div className="text-5xl font-black text-white mb-4">85%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Des leaders B2B craignent le manque de précision.</div>
            </div>
            <div className="bg-[#D4AF37] p-12 rounded-[40px] text-black transform hover:translate-y-4 transition-all translate-y-12">
              <div className="text-5xl font-black mb-4">12h</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Gagnées par semaine sur l'analyse manuelle.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 space-y-8 md:space-y-0">
            <div className="max-w-2xl">
              <span className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-sm mb-4 block">Notre Expertise</span>
              <h2 className="text-5xl font-bold text-white leading-tight">Trois piliers pour une domination durable.</h2>
            </div>
            <p className="text-gray-500 max-w-sm border-l border-white/10 pl-8">Une approche holistique mêlant design sensoriel et puissance algorithmique.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <SolutionCard 
              icon={<Gem size={40} className="text-[#D4AF37]" />}
              title="Précision Chirurgicale"
              desc="Visualisez chaque centime avec une granularité millimétrée, de l'opération macro au détail micro."
            />
            <SolutionCard 
              icon={<ShieldCheck size={40} className="text-[#D4AF37]" />}
              title="Forteresse de Données"
              desc="Un coffre-fort numérique protégeant vos secrets industriels derrière des couches de cryptage quantique."
            />
            <SolutionCard 
              icon={<Sparkles className="text-[#D4AF37]" size={40} />}
              title="Intelligence Prédictive"
              desc="Anticipez les bascules de marché grâce à notre moteur IA nourri aux flux financiers globaux."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-32 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
              <StatItem value="€500M+" label="Volume Annuel Audité" />
              <StatItem value="24/7" label="Veille Stratégique" />
              <StatItem value="< 1ms" label="Latence de calcul" />
              <StatItem value="0" label="Compromissions" />
           </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-5xl font-bold text-white mb-6">L'investissement de la sérénité.</h2>
             <p className="text-xl text-gray-500">Un modèle économique aligné sur votre réussite.</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
            <div className="glass p-16 rounded-[48px] border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Standard B2B</span>
                <div className="mt-8 mb-12">
                  <span className="text-6xl font-bold text-white">499€</span>
                  <span className="text-xl text-gray-500 ml-4">/ mois</span>
                </div>
                <ul className="space-y-6">
                  <PricingFeature text="Analytics Standard" />
                  <PricingFeature text="Jusqu'à 10 entités" />
                  <PricingFeature text="Support Email" />
                </ul>
              </div>
              <button className="mt-16 w-full py-5 border border-white/10 text-white rounded-full font-bold hover:bg-white/5 transition-all">S'informer</button>
            </div>

            <div className="bg-white p-16 rounded-[48px] shadow-[0_0_80px_rgba(255,255,255,0.05)] flex flex-col justify-between relative scale-105 z-10">
              <div className="absolute top-8 right-8 bg-black text-[#D4AF37] px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">Prestige Choice</div>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">BRVXON Elite</span>
                <div className="mt-8 mb-12">
                  <span className="text-6xl font-bold text-black">1000€</span>
                  <span className="text-xl text-gray-400 ml-4">/ mois</span>
                </div>
                <ul className="space-y-6">
                  <PricingFeature text="Full Predictive Engine" dark />
                  <PricingFeature text="Entités illimitées" dark />
                  <PricingFeature text="Concierge Dédié 24/7" dark />
                  <PricingFeature text="Onboarding sur site" dark />
                  <PricingFeature text="ROI Garanti x5" dark />
                </ul>
              </div>
              <button 
                onClick={onLaunch}
                className="mt-16 w-full py-5 gold-bg-gradient text-black rounded-full font-black text-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-3"
              >
                <span>Accès Immédiat</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 bg-[#050505] px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-12">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 gold-bg-gradient rounded-lg flex items-center justify-center">
                <Crown className="text-black" size={20} />
              </div>
              <span className="text-3xl font-bold tracking-tighter text-white">BRVXON</span>
            </div>
            <div className="flex flex-wrap justify-center gap-12 text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
              <a href="#" className="hover:text-[#D4AF37]">Confidentialité</a>
              <a href="#" className="hover:text-[#D4AF37]">Presse</a>
              <a href="#" className="hover:text-[#D4AF37]">Investisseurs</a>
              <a href="#" className="hover:text-[#D4AF37]">Contact</a>
            </div>
            <p className="text-gray-700 text-xs tracking-widest">© 2024 BRVXON GROUP LUXEMBOURG S.A. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ProblemFeature: React.FC<{title: string, desc: string}> = ({title, desc}) => (
  <div className="flex space-x-6">
    <div className="mt-1 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></div>
    <div>
      <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

const SolutionCard: React.FC<{icon: React.ReactNode, title: string, desc: string}> = ({icon, title, desc}) => (
  <div className="glass p-12 rounded-[48px] group hover:bg-[#D4AF37]/5 transition-all duration-500 border-white/5 hover:border-[#D4AF37]/20">
    <div className="mb-10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 bg-white/5 w-20 h-20 rounded-3xl flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{title}</h3>
    <p className="text-gray-400 leading-relaxed font-light">{desc}</p>
  </div>
);

const StatItem: React.FC<{value: string, label: string}> = ({value, label}) => (
  <div className="group">
    <div className="text-5xl font-black mb-4 text-black group-hover:text-[#D4AF37] transition-colors font-serif-luxury italic">{value}</div>
    <div className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.4em]">{label}</div>
  </div>
);

const PricingFeature: React.FC<{text: string, dark?: boolean}> = ({text, dark}) => (
  <li className="flex items-center space-x-4">
    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${dark ? 'bg-black' : 'bg-[#D4AF37]'}`}>
      <CheckCircle2 size={12} className={dark ? 'text-[#D4AF37]' : 'text-black'} />
    </div>
    <span className={`font-medium ${dark ? 'text-black' : 'text-gray-300'}`}>{text}</span>
  </li>
);

const Sparkles: React.FC<{size?: number, className?: string}> = ({size, className}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default LandingPage;
