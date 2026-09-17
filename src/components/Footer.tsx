import React from 'react';
import { Heart, Sparkles, Phone, Mail, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenInfoModal: (type: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInfoModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080214] border-t border-pink-500/20 text-slate-300 pt-16 pb-24 sm:pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-pink-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400 p-[2px] shadow-lg shadow-pink-500/30 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <h3 className="font-serif-title font-bold text-lg text-white">
                💕 Story Tamu za Dada Marry
              </h3>
            </div>

            <p className="text-sm text-pink-200/80 italic leading-relaxed font-serif-title">
              “Hadithi za Kiswahili zinazogusa moyo, kuchanganya hisia na kukuacha ukitamani ukurasa unaofuata...”
            </p>

            <div className="text-xs text-pink-300/80 flex items-center gap-2 pt-2">
              <Phone className="w-3.5 h-3.5 text-pink-400" />
              <span>Namba ya Malipo & WhatsApp: <strong>0716614099</strong></span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif-title font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-pink-500/20 pb-2">
              Viungo vya Haraka
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-pink-400 transition-colors cursor-pointer"
                >
                  Mwanzo (Home)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('trending')} 
                  className="hover:text-pink-400 transition-colors cursor-pointer"
                >
                  🔥 Stories Zinazovuma
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('categories')} 
                  className="hover:text-pink-400 transition-colors cursor-pointer"
                >
                  📂 Vitengo vya Hadithi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('search')} 
                  className="hover:text-pink-400 transition-colors cursor-pointer"
                >
                  🔍 Tafuta Hadithi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('favorites')} 
                  className="hover:text-pink-400 transition-colors cursor-pointer"
                >
                  ❤️ Vipendwa Vyangu
                </button>
              </li>
            </ul>
          </div>

          {/* Information & Policies */}
          <div>
            <h4 className="font-serif-title font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-pink-500/20 pb-2">
              Taarifa na Sheria
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button 
                  onClick={() => onOpenInfoModal('about')} 
                  className="hover:text-pink-400 transition-colors cursor-pointer"
                >
                  About Us (Kuhusu Dada Marry)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenInfoModal('contact')} 
                  className="hover:text-pink-400 transition-colors cursor-pointer"
                >
                  Contact (Mawasiliano)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenInfoModal('terms')} 
                  className="hover:text-pink-400 transition-colors cursor-pointer"
                >
                  Terms & Conditions (Vigezo na Masharti)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenInfoModal('privacy')} 
                  className="hover:text-pink-400 transition-colors cursor-pointer"
                >
                  Privacy Policy (Sera ya Faragha)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenInfoModal('payment_help')} 
                  className="hover:text-pink-400 transition-colors cursor-pointer"
                >
                  Payment Help (Msaada wa Malipo)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenInfoModal('report')} 
                  className="hover:text-pink-400 transition-colors cursor-pointer text-rose-300"
                >
                  Report Story (Ripoti Hadithi)
                </button>
              </li>
            </ul>
          </div>

          {/* Secure Payment & Trust Card */}
          <div className="p-5 rounded-2xl glass-panel border border-amber-400/30 space-y-3 bg-[#130728]/80">
            <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Soma Bila Kikomo
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Kila hadithi inafunguliwa kwa <strong className="text-amber-300">TSh 300 tu</strong> kupitia namba ya simu <strong className="text-white">0716614099</strong>. Furahia uandishi asilia wa kipekee.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-pink-950/60 text-pink-300 border border-pink-500/30">
                M-Pesa
              </span>
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-purple-950/60 text-purple-300 border border-purple-500/30">
                Tigo Pesa
              </span>
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-red-950/60 text-red-300 border border-red-500/30">
                Airtel
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-pink-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pink-200/60 text-center sm:text-left">
          <p>© 2026 Story Tamu za Dada Marry. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-pink-300">Imebuniwa kwa Mapenzi na Ufundi Mkuu ❤️</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-pink-500/20 text-slate-300 hover:text-pink-300 transition-colors"
              title="Rudi Juu"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
