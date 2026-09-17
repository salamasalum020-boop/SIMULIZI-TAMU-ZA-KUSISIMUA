import React, { useState } from 'react';
import { 
  User, 
  Heart, 
  Bookmark, 
  Clock, 
  Lock, 
  CheckCircle2, 
  Bell, 
  Sparkles, 
  BookOpen, 
  Phone, 
  Mail,
  ShieldCheck,
  Edit2,
  Check
} from 'lucide-react';
import { Story, UserAccount, NotificationItem } from '../types';
import { StoryCard } from './StoryCard';

interface UserAccountModalProps {
  user: UserAccount;
  onUpdateUser: (updated: Partial<UserAccount>) => void;
  stories: Story[];
  notifications: NotificationItem[];
  onReadStory: (storyId: string) => void;
  onToggleBookmark: (storyId: string) => void;
  onToggleLike: (storyId: string) => void;
  likedStoryIds: string[];
}

export const UserAccountModal: React.FC<UserAccountModalProps> = ({
  user,
  onUpdateUser,
  stories,
  notifications,
  onReadStory,
  onToggleBookmark,
  onToggleLike,
  likedStoryIds
}) => {
  const [activeTab, setActiveTab] = useState<'purchased' | 'bookmarks' | 'history' | 'favorites' | 'profile' | 'notifications'>('purchased');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser({ name, phone, email });
    setIsEditingProfile(false);
  };

  // Filtered stories for each tab
  const unlockedStories = stories.filter(s => user.unlockedStoryIds.includes(s.id));
  const bookmarkedStories = stories.filter(s => user.bookmarks.includes(s.id));
  const favoriteStories = stories.filter(s => user.favoriteStoryIds.includes(s.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Profile Header Card */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-pink-500/30 bg-gradient-to-r from-[#1e0a35]/90 via-[#150729]/95 to-[#1c0836]/90 shadow-2xl mb-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-pink-500 shadow-xl shadow-pink-500/30"
            />
            <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#120726] flex items-center justify-center text-white text-xs">
              ✓
            </span>
          </div>

          <div className="text-center sm:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h2 className="font-serif-title font-bold text-2xl sm:text-3xl text-white">
                {user.name}
              </h2>
              <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold bg-pink-500/20 text-pink-300 border border-pink-400/30 self-center sm:self-auto">
                Msomaji Mwaminifu 💕
              </span>
            </div>

            <p className="text-xs sm:text-sm text-pink-200/80 mt-1 flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <span>📱 {user.phone}</span>
              <span>•</span>
              <span>✉️ {user.email}</span>
            </p>

            {/* Micro stats */}
            <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold">
              <span className="px-3 py-1 rounded-xl bg-pink-950/60 text-pink-200 border border-pink-500/20">
                🔐 {user.unlockedStoryIds.length} Stories Zilizofunguliwa
              </span>
              <span className="px-3 py-1 rounded-xl bg-purple-950/60 text-purple-200 border border-purple-500/20">
                🔖 {user.bookmarks.length} Zilizohifadhiwa
              </span>
              <span className="px-3 py-1 rounded-xl bg-rose-950/60 text-rose-200 border border-rose-500/20">
                ❤️ {user.favoriteStoryIds.length} Vipendwa
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-pink-500/20 scrollbar-none">
        <button
          onClick={() => setActiveTab('purchased')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'purchased'
              ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/30'
              : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10'
          }`}
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>Stories Nilizonunua ({unlockedStories.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'bookmarks'
              ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/30'
              : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10'
          }`}
        >
          <Bookmark className="w-4 h-4 text-pink-400" />
          <span>Bookmarks ({bookmarkedStories.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'history'
              ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/30'
              : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10'
          }`}
        >
          <Clock className="w-4 h-4 text-amber-400" />
          <span>Historia ya Kusoma</span>
        </button>

        <button
          onClick={() => setActiveTab('favorites')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'favorites'
              ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/30'
              : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10'
          }`}
        >
          <Heart className="w-4 h-4 text-rose-400" />
          <span>Vipendwa ({favoriteStories.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('notifications')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'notifications'
              ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/30'
              : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10'
          }`}
        >
          <Bell className="w-4 h-4 text-yellow-400" />
          <span>Arifa ({notifications.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'profile'
              ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/30'
              : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10'
          }`}
        >
          <User className="w-4 h-4 text-purple-400" />
          <span>Wasifu Wangu</span>
        </button>
      </div>

      {/* Tab Contents */}
      {/* 1. Purchased / Unlocked Stories */}
      {activeTab === 'purchased' && (
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-serif-title font-bold text-xl text-white">
              Hadithi Zilizofunguliwa Kikamilifu
            </h3>
            <span className="text-xs text-pink-300 font-semibold">
              Furahia kusoma bila kikomo chochote ❤️
            </span>
          </div>

          {unlockedStories.length === 0 ? (
            <div className="text-center py-16 glass-panel rounded-3xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-pink-900/30 text-pink-400 flex items-center justify-center mx-auto mb-3 text-2xl">
                🔐
              </div>
              <h4 className="font-serif-title font-bold text-lg text-white">Hujafungua story bado</h4>
              <p className="text-xs text-pink-200/70 mt-1">
                Lipa TSh 300 tu kupitia 0716614099 kufungua hadithi yoyote kamili!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {unlockedStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  onReadStory={onReadStory}
                  onToggleLike={onToggleLike}
                  isLiked={likedStoryIds.includes(story.id)}
                  onToggleBookmark={onToggleBookmark}
                  isBookmarked={user.bookmarks.includes(story.id)}
                  customButtonLabel="SOMA HADITHI HII (UNLOCKED)"
                  badge="🎉 IMEFUNGULIWA"
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* 2. Bookmarks */}
      {activeTab === 'bookmarks' && (
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-serif-title font-bold text-xl text-white">
              Hadithi Zilizohifadhiwa (Bookmarks)
            </h3>
          </div>

          {bookmarkedStories.length === 0 ? (
            <div className="text-center py-16 glass-panel rounded-3xl p-8 max-w-md mx-auto">
              <Bookmark className="w-12 h-12 text-pink-400 mx-auto mb-3 opacity-60" />
              <h4 className="font-serif-title font-bold text-lg text-white">Hakuna hadithi zilizohifadhiwa</h4>
              <p className="text-xs text-pink-200/70 mt-1">
                Bofya alama ya bookmark kwenye hadithi yoyote ili uihifadhi hapa kwa ajili ya baadaye.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {bookmarkedStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  onReadStory={onReadStory}
                  onToggleLike={onToggleLike}
                  isLiked={likedStoryIds.includes(story.id)}
                  onToggleBookmark={onToggleBookmark}
                  isBookmarked={true}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* 3. History */}
      {activeTab === 'history' && (
        <div className="space-y-4 max-w-3xl mx-auto">
          <h3 className="font-serif-title font-bold text-xl text-white mb-4">
            Historia ya Kusoma
          </h3>

          {stories.slice(0, 3).map((story, i) => (
            <div
              key={story.id}
              onClick={() => onReadStory(story.id)}
              className="p-4 rounded-2xl glass-panel border border-pink-500/20 hover:border-pink-400/50 transition-all flex items-center justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <h4 className="font-serif-title font-bold text-sm sm:text-base text-white hover:text-pink-300">
                    {story.title}
                  </h4>
                  <p className="text-xs text-pink-300/70 mt-0.5">
                    Ulifikia Sura ya {i + 1} • {i === 0 ? 'Masaa 2 yaliyopita' : 'Jana'}
                  </p>
                </div>
              </div>

              <button className="px-4 py-2 rounded-full text-xs font-bold bg-pink-600/30 text-pink-200 border border-pink-500/30 hover:bg-pink-600 transition-colors whitespace-nowrap">
                Endelea Kusoma →
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 4. Favorites */}
      {activeTab === 'favorites' && (
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-serif-title font-bold text-xl text-white">
              Hadithi Unazopenda (Favorites)
            </h3>
          </div>

          {favoriteStories.length === 0 ? (
            <div className="text-center py-16 glass-panel rounded-3xl p-8 max-w-md mx-auto">
              <Heart className="w-12 h-12 text-rose-400 mx-auto mb-3 opacity-60" />
              <h4 className="font-serif-title font-bold text-lg text-white">Huna hadithi uliyoweka moyoni</h4>
              <p className="text-xs text-pink-200/70 mt-1">
                Bofya alama ya moyo ❤️ kwenye hadithi yoyote ili ionekane hapa.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {favoriteStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  onReadStory={onReadStory}
                  onToggleLike={onToggleLike}
                  isLiked={true}
                  onToggleBookmark={onToggleBookmark}
                  isBookmarked={user.bookmarks.includes(story.id)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* 5. Notifications */}
      {activeTab === 'notifications' && (
        <div className="max-w-2xl mx-auto space-y-3">
          <h3 className="font-serif-title font-bold text-xl text-white mb-4">
            Arifa za Dada Marry
          </h3>

          {notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => {
                if (n.storyId) onReadStory(n.storyId);
              }}
              className="p-4 rounded-2xl glass-panel border border-pink-500/20 hover:border-pink-400/40 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-pink-300">{n.title}</span>
                <span className="text-[10px] text-pink-400/60">{n.date}</span>
              </div>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{n.message}</p>
            </div>
          ))}
        </div>
      )}

      {/* 6. Profile Edit */}
      {activeTab === 'profile' && (
        <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-3xl glass-panel border border-pink-500/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif-title font-bold text-xl text-white">
              Taarifa za Wasifu Wako
            </h3>
            <button
              onClick={() => setIsEditingProfile(!isEditingProfile)}
              className="text-xs font-semibold text-pink-400 hover:text-pink-300 flex items-center gap-1 cursor-pointer"
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span>{isEditingProfile ? 'Ghairi' : 'Badilisha'}</span>
            </button>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-pink-200 mb-1">
                Jina Kamili
              </label>
              <input
                type="text"
                disabled={!isEditingProfile}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm border ${
                  isEditingProfile 
                    ? 'bg-black/40 border-pink-500/50 text-white' 
                    : 'bg-black/20 border-white/10 text-slate-300'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-pink-200 mb-1">
                Namba ya Simu (Kwa ajili ya uthibitisho wa malipo)
              </label>
              <input
                type="tel"
                disabled={!isEditingProfile}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm border ${
                  isEditingProfile 
                    ? 'bg-black/40 border-pink-500/50 text-white' 
                    : 'bg-black/20 border-white/10 text-slate-300'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-pink-200 mb-1">
                Barua Pepe
              </label>
              <input
                type="email"
                disabled={!isEditingProfile}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm border ${
                  isEditingProfile 
                    ? 'bg-black/40 border-pink-500/50 text-white' 
                    : 'bg-black/20 border-white/10 text-slate-300'
                }`}
              />
            </div>

            {isEditingProfile && (
              <button
                type="submit"
                className="w-full py-3 rounded-full font-bold text-xs text-white bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 glow-button flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Check className="w-4 h-4" />
                <span>Hifadhi Mabadiliko</span>
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};
