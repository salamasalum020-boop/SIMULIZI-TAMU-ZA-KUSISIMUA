import React, { useState } from 'react';
import { 
  Heart, 
  Search, 
  Flame, 
  Sparkles, 
  User, 
  Bell, 
  ShieldCheck, 
  Menu, 
  X, 
  Bookmark,
  CheckCircle2
} from 'lucide-react';
import { NotificationItem } from '../types';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, data?: any) => void;
  unreadNotificationsCount: number;
  notifications: NotificationItem[];
  onMarkNotificationsRead: () => void;
  favoritesCount: number;
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  unreadNotificationsCount,
  notifications,
  onMarkNotificationsRead,
  favoritesCount,
  isAdmin,
  onToggleAdmin
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications && unreadNotificationsCount > 0) {
      onMarkNotificationsRead();
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0c051a]/85 border-b border-pink-500/20 transition-all duration-300">
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 py-1 px-4 text-center text-xs font-medium text-white flex items-center justify-center gap-2">
        <span className="animate-pulse">✨</span>
        <span>Karibu kwenye ulimwengu wa hadithi tamu za Kiswahili! Fungua story kamili kwa TSh 300 tu</span>
        <span className="hidden sm:inline">📱 0716614099</span>
        <span className="animate-pulse">💕</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div 
            id="nav-logo"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400 p-[2px] shadow-[0_0_15px_rgba(244,63,94,0.5)] group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-[#120726] flex items-center justify-center">
                <Heart className="w-5 h-5 text-pink-400 fill-pink-500 animate-heart-pulse" />
              </div>
            </div>
            <div>
              <span className="font-serif-title font-bold text-lg sm:text-xl tracking-wide bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent group-hover:from-pink-200 group-hover:to-amber-100 transition-colors">
                STORY TAMU ZA DADA MARRY
              </span>
              <p className="text-[10px] text-pink-300/70 uppercase tracking-widest -mt-0.5">
                Simulizi za Mapenzi na Maisha
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              id="nav-btn-home"
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                currentView === 'home'
                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 shadow-[0_0_12px_rgba(236,72,153,0.3)]'
                  : 'text-slate-300 hover:text-pink-300 hover:bg-white/5'
              }`}
            >
              Mwanzo
            </button>

            <button
              id="nav-btn-trending"
              onClick={() => onNavigate('trending')}
              className={`px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all ${
                currentView === 'trending'
                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                  : 'text-slate-300 hover:text-pink-300 hover:bg-white/5'
              }`}
            >
              <Flame className="w-4 h-4 text-orange-400" />
              Zinazovuma
            </button>

            <button
              id="nav-btn-categories"
              onClick={() => onNavigate('categories')}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                currentView === 'categories'
                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                  : 'text-slate-300 hover:text-pink-300 hover:bg-white/5'
              }`}
            >
              Vitengo
            </button>

            <button
              id="nav-btn-search"
              onClick={() => onNavigate('search')}
              className={`px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all ${
                currentView === 'search'
                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                  : 'text-slate-300 hover:text-pink-300 hover:bg-white/5'
              }`}
            >
              <Search className="w-4 h-4 text-pink-400" />
              Tafuta
            </button>

            <button
              id="nav-btn-favorites"
              onClick={() => onNavigate('favorites')}
              className={`px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all ${
                currentView === 'favorites'
                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                  : 'text-slate-300 hover:text-pink-300 hover:bg-white/5'
              }`}
            >
              <Heart className="w-4 h-4 text-rose-400 fill-rose-500/50" />
              Vipendwa
              {favoritesCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 text-[10px] bg-rose-600 text-white rounded-full font-bold">
                  {favoritesCount}
                </span>
              )}
            </button>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search shortcut button on mobile & tablet */}
            <button
              id="btn-quick-search"
              onClick={() => onNavigate('search')}
              className="lg:hidden p-2 text-slate-300 hover:text-pink-300 hover:bg-white/5 rounded-full transition-colors"
              title="Tafuta Hadithi"
            >
              <Search className="w-5 h-5 text-pink-400" />
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                id="btn-notifications"
                onClick={handleNotificationClick}
                className="relative p-2 text-slate-300 hover:text-pink-300 hover:bg-white/5 rounded-full transition-colors"
                title="Arifa"
              >
                <Bell className="w-5 h-5" />
                {unreadNotificationsCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-pink-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                    {unreadNotificationsCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl glass-panel border border-pink-500/30 shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between pb-3 border-b border-pink-500/20">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <h4 className="font-bold text-sm text-pink-200">Arifa za Dada Marry</h4>
                    </div>
                    <span className="text-xs text-pink-400/80">{notifications.length} ujumbe</span>
                  </div>

                  <div className="mt-2 space-y-2 max-h-80 overflow-y-auto pr-1">
                    {notifications.length === 0 ? (
                      <p className="text-center py-6 text-sm text-slate-400">Hakuna arifa mpya kwa sasa.</p>
                    ) : (
                      notifications.map((n) => (
                        <div
                          key={n.id}
                          onClick={() => {
                            setShowNotifications(false);
                            if (n.storyId) {
                              onNavigate('reader', { storyId: n.storyId });
                            }
                          }}
                          className={`p-2.5 rounded-xl transition-colors cursor-pointer border ${
                            n.read 
                              ? 'bg-white/5 border-transparent hover:bg-white/10' 
                              : 'bg-pink-900/30 border-pink-500/30 hover:bg-pink-900/40'
                          }`}
                        >
                          <p className="text-xs font-bold text-pink-300">{n.title}</p>
                          <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{n.message}</p>
                          <p className="text-[10px] text-pink-400/60 mt-1">{n.date}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Admin Toggle */}
            <button
              id="btn-admin-toggle"
              onClick={onToggleAdmin}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isAdmin
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)] font-bold'
                  : 'bg-white/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20'
              }`}
              title={isAdmin ? 'Ondoka kwenye Dashboard ya Admin' : 'Fungua Dashboard ya Admin (Dada Marry)'}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-current" />
              <span className="hidden sm:inline">{isAdmin ? 'Admin Mode' : 'Admin'}</span>
            </button>

            {/* User Account */}
            <button
              id="btn-account"
              onClick={() => onNavigate('account')}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all ${
                currentView === 'account'
                  ? 'bg-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)]'
                  : 'bg-gradient-to-r from-pink-600/30 to-purple-600/30 text-pink-200 border border-pink-500/40 hover:border-pink-400'
              }`}
            >
              <User className="w-4 h-4" />
              <span className="hidden md:inline">Akaunti Yangu</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              id="btn-mobile-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-pink-300 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-pink-500/20 bg-[#120726]/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-pink-200 hover:bg-white/5 flex items-center gap-3"
          >
            <span>🏠</span> Mwanzo (Home)
          </button>
          <button
            onClick={() => { onNavigate('trending'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-pink-200 hover:bg-white/5 flex items-center gap-3"
          >
            <Flame className="w-4 h-4 text-orange-400" /> Stories Zinazovuma
          </button>
          <button
            onClick={() => { onNavigate('categories'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-pink-200 hover:bg-white/5 flex items-center gap-3"
          >
            <span>📂</span> Vitengo vya Hadithi
          </button>
          <button
            onClick={() => { onNavigate('search'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-pink-200 hover:bg-white/5 flex items-center gap-3"
          >
            <Search className="w-4 h-4 text-pink-400" /> Tafuta Hadithi
          </button>
          <button
            onClick={() => { onNavigate('favorites'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-pink-200 hover:bg-white/5 flex items-center gap-3"
          >
            <Heart className="w-4 h-4 text-rose-400" /> Vipendwa Vyangu ({favoritesCount})
          </button>
          <button
            onClick={() => { onNavigate('account'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-pink-200 hover:bg-white/5 flex items-center gap-3"
          >
            <User className="w-4 h-4 text-purple-400" /> Wasifu na Hadithi Zangu
          </button>
          <button
            onClick={() => { onToggleAdmin(); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-amber-300 hover:bg-amber-500/10 flex items-center gap-3 border border-amber-500/30"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            {isAdmin ? 'Ondoka kwenye Admin Dashboard' : '👑 Fungua Admin Dashboard'}
          </button>
        </div>
      )}
    </header>
  );
};
