import React, { useState } from 'react';
import { 
  ShieldCheck, 
  DollarSign, 
  Users, 
  Eye, 
  Heart, 
  BookOpen, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  XCircle, 
  Bell, 
  Sparkles, 
  Send, 
  TrendingUp, 
  Layers, 
  MessageSquare,
  Clock,
  ArrowRight,
  Zap,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Story, PaymentRecord, Comment, NotificationItem } from '../types';
import { CATEGORIES } from '../data/categories';

interface AdminDashboardProps {
  stories: Story[];
  payments: PaymentRecord[];
  comments: Comment[];
  onApprovePayment: (paymentId: string) => void;
  onRejectPayment: (paymentId: string) => void;
  onAddStory: (newStory: Story) => void;
  onUpdateStory: (updatedStory: Story) => void;
  onDeleteStory: (storyId: string) => void;
  onSendNotification: (title: string, message: string, storyId?: string) => void;
  onDeleteComment: (commentId: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  stories,
  payments,
  comments,
  onApprovePayment,
  onRejectPayment,
  onAddStory,
  onUpdateStory,
  onDeleteStory,
  onSendNotification,
  onDeleteComment
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'payments' | 'stories' | 'notifications' | 'comments'>('overview');

  // New Story Form State
  const [isAddingStory, setIsAddingStory] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTeaser, setNewTeaser] = useState('');
  const [newCategory, setNewCategory] = useState('love-stories');
  const [newCoverImage, setNewCoverImage] = useState('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop');
  const [newReadingTime, setNewReadingTime] = useState('12 min');
  const [newPrice, setNewPrice] = useState(300);
  const [newChapter1Title, setNewChapter1Title] = useState('Sura ya 1: Mwanzo wa Safari');
  const [newChapter1Text, setNewChapter1Text] = useState('');
  const [newChapter2Title, setNewChapter2Title] = useState('Sura ya 2: Siri Yafichuka');
  const [newChapter2Text, setNewChapter2Text] = useState('');

  // Notification Broadcaster State
  const [notifTitle, setNotifTitle] = useState('');
  const [notifMessage, setNotifMessage] = useState('');
  const [notifStoryId, setNotifStoryId] = useState('');
  const [notifSentAlert, setNotifSentAlert] = useState(false);

  // Calculate metrics
  const totalApprovedPayments = payments.filter(p => p.status === 'approved');
  const totalRevenue = totalApprovedPayments.reduce((acc, p) => acc + p.amountTsh, 0);
  const pendingPayments = payments.filter(p => p.status === 'pending');
  const totalViews = stories.reduce((acc, s) => acc + s.views, 0);
  const totalLikes = stories.reduce((acc, s) => acc + s.likes, 0);

  const handleApproveWithCelebration = (paymentId: string) => {
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 }
    });
    onApprovePayment(paymentId);
  };

  const handleCreateStorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newTeaser.trim() || !newChapter1Text.trim()) {
      alert('Tafadhali jaza taarifa muhimu za hadithi ikiwemo Sura ya Kwanza!');
      return;
    }

    const createdStory: Story = {
      id: `story-${Date.now()}`,
      title: newTitle.trim(),
      teaser: newTeaser.trim(),
      category: newCategory,
      readingTime: newReadingTime,
      likes: 1,
      views: 12,
      coverImage: newCoverImage || 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop',
      author: 'Dada Marry',
      isPremium: true,
      priceTsh: Number(newPrice) || 300,
      isTrending: true,
      createdAt: new Date().toISOString().split('T')[0],
      chapters: [
        {
          chapterNumber: 1,
          title: newChapter1Title || 'Sura ya Kwanza',
          isFreePreview: true,
          content: newChapter1Text
        },
        ...(newChapter2Text ? [{
          chapterNumber: 2,
          title: newChapter2Title || 'Sura ya Pili',
          isFreePreview: false,
          content: newChapter2Text
        }] : [])
      ]
    };

    onAddStory(createdStory);
    setIsAddingStory(false);
    // Reset form
    setNewTitle('');
    setNewTeaser('');
    setNewChapter1Text('');
    setNewChapter2Text('');
    alert('🎉 Hadithi mpya imeongezwa kikamilifu!');
  };

  const handleBroadcastNotification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifTitle.trim() || !notifMessage.trim()) return;
    onSendNotification(notifTitle, notifMessage, notifStoryId || undefined);
    setNotifTitle('');
    setNotifMessage('');
    setNotifSentAlert(true);
    setTimeout(() => setNotifSentAlert(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Admin Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl glass-panel-gold border border-amber-400/40 bg-gradient-to-r from-[#210c3b]/95 via-[#18092d]/95 to-[#1c0836]/95 shadow-2xl mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-2 border border-amber-400/30">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>DADA MARRY ADMIN CONTROL PANEL</span>
          </div>
          <h2 className="font-serif-title font-extrabold text-2xl sm:text-3xl text-white">
            👑 Simamisha Platform ya Simulizi
          </h2>
          <p className="text-xs sm:text-sm text-pink-200/80 mt-1">
            Thibitisha malipo ya wasomaji (TSh 300), ongeza hadithi mpya, simamia chapters na tuma arifa.
          </p>
        </div>

        <button
          onClick={() => setIsAddingStory(true)}
          className="px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2 cursor-pointer self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Ongeza Story Mpya</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-pink-500/20 scrollbar-none">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'overview'
              ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md font-bold'
              : 'text-slate-300 hover:text-white bg-white/5'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Takwimu (Overview)</span>
        </button>

        <button
          onClick={() => setActiveTab('payments')}
          className={`relative px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'payments'
              ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md font-bold'
              : 'text-slate-300 hover:text-white bg-white/5'
          }`}
        >
          <DollarSign className="w-4 h-4" />
          <span>Thibitisha Malipo ({payments.length})</span>
          {pendingPayments.length > 0 && (
            <span className="px-1.5 py-0.2 rounded-full bg-rose-600 text-white text-[10px] font-bold animate-pulse">
              {pendingPayments.length} Mpya
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('stories')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'stories'
              ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md font-bold'
              : 'text-slate-300 hover:text-white bg-white/5'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Simamia Hadithi ({stories.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('notifications')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'notifications'
              ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md font-bold'
              : 'text-slate-300 hover:text-white bg-white/5'
          }`}
        >
          <Bell className="w-4 h-4" />
          <span>Tuma Arifa kwa Wasomaji</span>
        </button>

        <button
          onClick={() => setActiveTab('comments')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'comments'
              ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md font-bold'
              : 'text-slate-300 hover:text-white bg-white/5'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Maoni ya Wasomaji ({comments.length})</span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW METRICS & CHARTS */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl glass-panel-gold border border-amber-400/30">
              <div className="flex items-center justify-between text-amber-300 mb-2">
                <span className="text-xs font-semibold">Mapato ya Jumla</span>
                <DollarSign className="w-5 h-5 text-amber-400" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-amber-300">
                TSh {totalRevenue.toLocaleString()}
              </p>
              <p className="text-[11px] text-amber-200/70 mt-1">
                Kutoka malipo {totalApprovedPayments.length} yaliyothibitishwa
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-panel border border-pink-500/20">
              <div className="flex items-center justify-between text-pink-300 mb-2">
                <span className="text-xs font-semibold">Wasomaji Waliotazama</span>
                <Eye className="w-5 h-5 text-pink-400" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white">
                {totalViews.toLocaleString()}
              </p>
              <p className="text-[11px] text-pink-200/70 mt-1">+14% wiki hii</p>
            </div>

            <div className="p-5 rounded-2xl glass-panel border border-rose-500/20">
              <div className="flex items-center justify-between text-rose-300 mb-2">
                <span className="text-xs font-semibold">Likes za Wasomaji</span>
                <Heart className="w-5 h-5 text-rose-400 fill-rose-500/40" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white">
                {totalLikes.toLocaleString()}
              </p>
              <p className="text-[11px] text-rose-200/70 mt-1">Kwenye hadithi zote {stories.length}</p>
            </div>

            <div className="p-5 rounded-2xl glass-panel border border-purple-500/20">
              <div className="flex items-center justify-between text-purple-300 mb-2">
                <span className="text-xs font-semibold">Malipo Yanayosubiri</span>
                <Clock className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-purple-300">
                {pendingPayments.length}
              </p>
              <p className="text-[11px] text-purple-200/70 mt-1">Yahitaji uthibitisho wako</p>
            </div>
          </div>

          {/* Visual Revenue & Activity Chart Simulation */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-pink-500/20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-serif-title font-bold text-lg sm:text-xl text-white">
                  Mwenendo wa Wasomaji & Mapato (Siku 7 Zilizopita)
                </h3>
                <p className="text-xs text-pink-200/70">Wastani wa wasomaji wapya 2,400 kila siku</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                +28.4% Ukuaji
              </span>
            </div>

            {/* Custom SVG Bar Chart */}
            <div className="h-48 w-full flex items-end justify-between gap-2 sm:gap-4 pt-6 border-b border-pink-500/20 pb-2">
              {[
                { day: 'Jumatatu', val: 65, rev: 'TSh 15,300' },
                { day: 'Jumanne', val: 78, rev: 'TSh 18,900' },
                { day: 'Jumatano', val: 55, rev: 'TSh 12,600' },
                { day: 'Alhamisi', val: 85, rev: 'TSh 21,300' },
                { day: 'Ijumaa', val: 95, rev: 'TSh 27,000' },
                { day: 'Jumamosi', val: 100, rev: 'TSh 34,500' },
                { day: 'Jumapili', val: 90, rev: 'TSh 28,200' },
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                  <span className="text-[10px] text-pink-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.rev}
                  </span>
                  <div 
                    className="w-full max-w-[40px] rounded-t-xl bg-gradient-to-t from-pink-600 via-rose-500 to-amber-400 group-hover:brightness-125 transition-all shadow-[0_0_12px_rgba(236,72,153,0.3)]"
                    style={{ height: `${item.val}%` }}
                  />
                  <span className="text-[11px] text-slate-400 font-medium truncate">
                    {item.day.slice(0, 3)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PAYMENTS VERIFICATION */}
      {activeTab === 'payments' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-title font-bold text-xl text-white">
              Uthibitisho wa Malipo ya Wasomaji (TSh 300)
            </h3>
            <span className="text-xs text-amber-300">
              Namba ya Mapokezi: <strong className="text-white">0716614099</strong>
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl glass-panel border border-pink-500/20">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#1a0a33] text-pink-200 border-b border-pink-500/20">
                <tr>
                  <th className="p-4">Mtumaji & Simu</th>
                  <th className="p-4">Hadithi</th>
                  <th className="p-4">Kiasi</th>
                  <th className="p-4">Kodi ya Muamala</th>
                  <th className="p-4">Hali</th>
                  <th className="p-4 text-right">Hatua</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-500/10">
                {payments.map((p) => (
                  <tr key={p.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <p className="font-bold text-white">{p.senderName}</p>
                      <p className="text-xs text-pink-300/80">{p.phoneNumber} • {p.network}</p>
                      <p className="text-[10px] text-slate-500">{p.createdAt}</p>
                    </td>

                    <td className="p-4 max-w-xs">
                      <span className="line-clamp-2 font-medium text-slate-200">
                        {p.storyTitle}
                      </span>
                    </td>

                    <td className="p-4 font-bold text-amber-400">
                      TSh {p.amountTsh}
                    </td>

                    <td className="p-4 font-mono font-bold text-pink-300">
                      {p.transactionCode}
                    </td>

                    <td className="p-4">
                      {p.status === 'approved' && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          ✓ Imethibitishwa
                        </span>
                      )}
                      {p.status === 'rejected' && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          ✗ Imekataliwa
                        </span>
                      )}
                      {p.status === 'pending' && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse">
                          ⏳ Inasubiri
                        </span>
                      )}
                    </td>

                    <td className="p-4 text-right space-x-2 whitespace-nowrap">
                      {p.status === 'pending' ? (
                        <>
                          <button
                            onClick={() => handleApproveWithCelebration(p.id)}
                            className="px-3 py-1.5 rounded-xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-sm cursor-pointer"
                          >
                            ✓ Thibitisha
                          </button>
                          <button
                            onClick={() => onRejectPayment(p.id)}
                            className="px-3 py-1.5 rounded-xl font-bold text-xs bg-rose-900/60 text-rose-200 hover:bg-rose-900 transition-colors cursor-pointer"
                          >
                            Kataa
                          </button>
                        </>
                      ) : (
                        <span className="text-[11px] text-slate-500">Imekamilika</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: MANAGE STORIES */}
      {activeTab === 'stories' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-title font-bold text-xl text-white">
              Mkusanyiko wa Hadithi ({stories.length})
            </h3>
            <button
              onClick={() => setIsAddingStory(true)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-pink-600 text-white hover:bg-pink-500 flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Ongeza Story</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stories.map((story) => (
              <div 
                key={story.id} 
                className="p-4 rounded-2xl glass-panel border border-pink-500/20 flex gap-4 items-start justify-between"
              >
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="w-20 h-24 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold text-pink-400">
                    {story.category}
                  </span>
                  <h4 className="font-serif-title font-bold text-sm text-white truncate">
                    {story.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                    {story.teaser}
                  </p>
                  <p className="text-[11px] text-pink-300/70 mt-1">
                    Sura: {story.chapters?.length || 1} • TSh {story.priceTsh} • {story.views} Views
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => onDeleteStory(story.id)}
                    className="p-2 text-rose-400 hover:text-white hover:bg-rose-900/40 rounded-lg transition-colors cursor-pointer"
                    title="Futa Story"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: BROADCAST NOTIFICATIONS */}
      {activeTab === 'notifications' && (
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl glass-panel border border-pink-500/20">
          <div className="flex items-center gap-2 mb-6">
            <Bell className="w-6 h-6 text-amber-400 animate-pulse" />
            <h3 className="font-serif-title font-bold text-xl text-white">
              Tuma Arifa kwa Wasomaji Wote
            </h3>
          </div>

          {notifSentAlert && (
            <div className="p-3 mb-4 rounded-xl bg-emerald-900/50 border border-emerald-500/40 text-emerald-200 text-xs font-bold flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Arifa imetumwa kikamilifu kwa wasomaji wote wa Dada Marry!</span>
            </div>
          )}

          <form onSubmit={handleBroadcastNotification} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-pink-200 mb-1">
                Kichwa cha Arifa (Mfano: 🔥 Dada Marry ameachia chapter mpya!)
              </label>
              <input
                type="text"
                required
                value={notifTitle}
                onChange={(e) => setNotifTitle(e.target.value)}
                placeholder="🔥 Chapter 3 Imetoka Sasa Hivi!"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-pink-500/30 text-white text-sm focus:outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-pink-200 mb-1">
                Ujumbe Kamili
              </label>
              <textarea
                rows={4}
                required
                value={notifMessage}
                onChange={(e) => setNotifMessage(e.target.value)}
                placeholder="Ingia sasa usome jinsi mtego wa usiku wa harusi ulivyotua..."
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-pink-500/30 text-white text-sm focus:outline-none focus:border-pink-400 resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-pink-200 mb-1">
                Unganisha na Hadithi (Hiari)
              </label>
              <select
                value={notifStoryId}
                onChange={(e) => setNotifStoryId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#140728] border border-pink-500/30 text-white text-sm focus:outline-none focus:border-pink-400"
              >
                <option value="">-- Chagua Story --</option>
                {stories.map(s => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full font-bold text-xs text-white bg-gradient-to-r from-pink-500 via-rose-500 to-red-600 hover:from-pink-400 glow-button flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Tuma Arifa kwa Wasomaji Sasa</span>
            </button>
          </form>
        </div>
      )}

      {/* TAB 5: COMMENTS MODERATION */}
      {activeTab === 'comments' && (
        <div className="space-y-4">
          <h3 className="font-serif-title font-bold text-xl text-white mb-4">
            Simamia Maoni ya Wasomaji ({comments.length})
          </h3>

          <div className="space-y-3">
            {comments.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-2xl glass-panel border border-pink-500/20 flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={c.userAvatar}
                    alt={c.userName}
                    className="w-10 h-10 rounded-full object-cover border border-pink-500/30"
                  />
                  <div>
                    <h5 className="font-bold text-xs text-pink-300">{c.userName}</h5>
                    <p className="text-xs text-slate-200 mt-1">{c.text}</p>
                    <p className="text-[10px] text-slate-500 mt-1">{c.date} • {c.likes} Likes</p>
                  </div>
                </div>

                <button
                  onClick={() => onDeleteComment(c.id)}
                  className="p-2 text-rose-400 hover:text-rose-200 hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer"
                  title="Futa Maoni Haya"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ADD STORY MODAL */}
      {isAddingStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-pink-500/40 p-6 sm:p-8 bg-[#140728]/95 my-8">
            <h3 className="font-serif-title font-bold text-2xl text-white mb-4">
              Ongeza Hadithi Mpya ya Dada Marry 💕
            </h3>

            <form onSubmit={handleCreateStorySubmit} className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
              <div>
                <label className="block text-xs font-semibold text-pink-200 mb-1">
                  Jina la Hadithi (Title)
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Mfano: ❤️ PENZI LA GIZA LA TABORA"
                  className="w-full px-4 py-2 rounded-xl bg-black/40 border border-pink-500/30 text-white text-sm focus:outline-none focus:border-pink-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-pink-200 mb-1">
                    Kitengo (Category)
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-[#1a0a33] border border-pink-500/30 text-white text-sm focus:outline-none focus:border-pink-400"
                  >
                    {CATEGORIES.filter(c => c.id !== 'all').map(c => (
                      <option key={c.id} value={c.id}>{c.icon} {c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-pink-200 mb-1">
                    Bei ya Kufungua (TSh)
                  </label>
                  <input
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(Number(e.target.value))}
                    className="w-full px-4 py-2 rounded-xl bg-black/40 border border-pink-500/30 text-white text-sm focus:outline-none focus:border-pink-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-pink-200 mb-1">
                  Teaser / Maelezo Mafupi Yenye Kuvutia
                </label>
                <textarea
                  rows={2}
                  required
                  value={newTeaser}
                  onChange={(e) => setNewTeaser(e.target.value)}
                  placeholder="Kuanzia siku alipomwona kwa mara ya kwanza..."
                  className="w-full px-4 py-2 rounded-xl bg-black/40 border border-pink-500/30 text-white text-sm focus:outline-none focus:border-pink-400 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-pink-200 mb-1">
                  Cover Image URL (Picha ya jalada)
                </label>
                <input
                  type="url"
                  value={newCoverImage}
                  onChange={(e) => setNewCoverImage(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-black/40 border border-pink-500/30 text-white text-sm focus:outline-none focus:border-pink-400"
                />
              </div>

              <div className="p-4 rounded-2xl bg-black/30 border border-pink-500/20 space-y-3">
                <span className="text-xs font-bold text-pink-300">📖 Sura ya 1 (Free Preview)</span>
                <input
                  type="text"
                  value={newChapter1Title}
                  onChange={(e) => setNewChapter1Title(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-black/40 border border-pink-500/30 text-white text-xs"
                />
                <textarea
                  rows={4}
                  required
                  value={newChapter1Text}
                  onChange={(e) => setNewChapter1Text(e.target.value)}
                  placeholder="Andika sehemu ya kwanza ya hadithi hapa..."
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-pink-500/30 text-white text-xs"
                />
              </div>

              <div className="p-4 rounded-2xl bg-black/30 border border-amber-500/20 space-y-3">
                <span className="text-xs font-bold text-amber-300">🔐 Sura ya 2 (Premium Locked)</span>
                <input
                  type="text"
                  value={newChapter2Title}
                  onChange={(e) => setNewChapter2Title(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-black/40 border border-amber-500/30 text-white text-xs"
                />
                <textarea
                  rows={4}
                  value={newChapter2Text}
                  onChange={(e) => setNewChapter2Text(e.target.value)}
                  placeholder="Andika sehemu ya pili (itakayofunguliwa kwa TSh 300)..."
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-amber-500/30 text-white text-xs"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-pink-500/20">
                <button
                  type="button"
                  onClick={() => setIsAddingStory(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/15"
                >
                  Ghairi
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full font-bold text-xs text-white bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 glow-button"
                >
                  Chapisha Hadithi Hii 💕
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
