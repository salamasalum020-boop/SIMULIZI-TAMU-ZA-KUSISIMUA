import React from 'react';
import { Home, Flame, Search, Heart, User } from 'lucide-react';

interface MobileBottomNavProps {
  currentView: string;
  onNavigate: (view: string) => void;
  favoritesCount: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentView,
  onNavigate,
  favoritesCount
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'trending', label: 'Trending', icon: Flame },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'favorites', label: 'Favorites', icon: Heart, count: favoritesCount },
    { id: 'account', label: 'Account', icon: User },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e041f]/95 backdrop-blur-xl border-t border-pink-500/25 px-2 py-2 safe-area-bottom shadow-[0_-5px_25px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-5 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all relative ${
                isActive
                  ? 'text-pink-400 bg-pink-500/15 font-bold shadow-[0_0_12px_rgba(236,72,153,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px] scale-110' : ''}`} />
                {item.count && item.count > 0 ? (
                  <span className="absolute -top-1.5 -right-2.5 w-4 h-4 bg-pink-600 text-white text-[9px] font-black rounded-full flex items-center justify-center">
                    {item.count}
                  </span>
                ) : null}
              </div>
              <span className="text-[10px] mt-1 tracking-tight truncate max-w-[54px]">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
