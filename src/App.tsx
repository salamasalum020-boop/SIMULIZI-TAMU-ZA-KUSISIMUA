import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Story, 
  UserAccount, 
  PaymentRecord, 
  Comment, 
  NotificationItem 
} from './types';
import { 
  INITIAL_STORIES, 
  INITIAL_COMMENTS, 
  INITIAL_NOTIFICATIONS, 
  INITIAL_PAYMENTS 
} from './data/sampleStories';
import { CATEGORIES } from './data/categories';

// Components
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StoryOfTheDay } from './components/StoryOfTheDay';
import { TrendingSection } from './components/TrendingSection';
import { SampleStoriesSection } from './components/SampleStoriesSection';
import { CategoryFilter } from './components/CategoryFilter';
import { StoryCard } from './components/StoryCard';
import { StoryReader } from './components/StoryReader';
import { PaywallModal } from './components/PaywallModal';
import { SearchModal } from './components/SearchModal';
import { UserAccountModal } from './components/UserAccountModal';
import { AdminDashboard } from './components/AdminDashboard';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { InfoModal } from './components/InfoModal';

export default function App() {
  // --- Persistent & In-memory State ---
  const [stories, setStories] = useState<Story[]>(() => {
    const saved = localStorage.getItem('dadamarry_stories');
    if (!saved) return INITIAL_STORIES;
    try {
      const parsed: Story[] = JSON.parse(saved);
      return INITIAL_STORIES.map(initStory => {
        const existing = parsed.find(s => s.id === initStory.id);
        if (!existing) return initStory;
        return {
          ...existing,
          coverImage: initStory.coverImage,
          chapters: initStory.chapters
        };
      });
    } catch {
      return INITIAL_STORIES;
    }
  });

  const [currentUser, setCurrentUser] = useState<UserAccount>(() => {
    const saved = localStorage.getItem('dadamarry_user');
    if (saved) return JSON.parse(saved);
    return {
      id: 'user-001',
      name: 'Salama Salum',
      phone: '0714902345',
      email: 'salamasalum020@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop',
      unlockedStoryIds: ['mapenzi-ya-siri-darasa-la-mwisho'], // 1 unlocked initially for immediate joy!
      bookmarks: ['ujumbe-uliokuja-usiku-wa-harusi'],
      favoriteStoryIds: ['mapenzi-ya-siri-darasa-la-mwisho', 'nilimuamini-kuliko-kila-mtu'],
      readingHistory: [
        {
          storyId: 'mapenzi-ya-siri-darasa-la-mwisho',
          chapterNumber: 1,
          progressPercent: 65,
          lastRead: 'Masaa 2 yaliyopita'
        }
      ]
    };
  });

  const [payments, setPayments] = useState<PaymentRecord[]>(() => {
    const saved = localStorage.getItem('dadamarry_payments');
    return saved ? JSON.parse(saved) : INITIAL_PAYMENTS;
  });

  const [notifications, setNotifications] = useState<NotificationItem[]>(() => {
    const saved = localStorage.getItem('dadamarry_notifications');
    return saved ? JSON.parse(saved) : INITIAL_NOTIFICATIONS;
  });

  const [comments, setComments] = useState<Comment[]>(() => {
    const saved = localStorage.getItem('dadamarry_comments');
    return saved ? JSON.parse(saved) : INITIAL_COMMENTS;
  });

  // UI state
  const [currentView, setCurrentView] = useState<'home' | 'trending' | 'categories' | 'search' | 'favorites' | 'account' | 'reader'>('home');
  const [readingStoryId, setReadingStoryId] = useState<string | null>(null);
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [paywallStory, setPaywallStory] = useState<Story | null>(null);
  const [infoModalType, setInfoModalType] = useState<string | null>(null);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('dadamarry_stories', JSON.stringify(stories));
  }, [stories]);

  useEffect(() => {
    localStorage.setItem('dadamarry_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('dadamarry_payments', JSON.stringify(payments));
  }, [payments]);

  useEffect(() => {
    localStorage.setItem('dadamarry_notifications', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem('dadamarry_comments', JSON.stringify(comments));
  }, [comments]);

  // Toast auto-clear
  useEffect(() => {
    if (successToast) {
      const timer = setTimeout(() => setSuccessToast(null), 4500);
      return () => clearTimeout(timer);
    }
  }, [successToast]);

  // --- Handlers ---
  const handleNavigate = (view: string, data?: any) => {
    setIsAdminMode(false);
    if (view === 'reader' && data?.storyId) {
      setReadingStoryId(data.storyId);
      // increment view count
      setStories(prev => prev.map(s => s.id === data.storyId ? { ...s, views: s.views + 1 } : s));
      setCurrentView('reader');
    } else {
      setCurrentView(view as any);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadStory = (storyId: string) => {
    setReadingStoryId(storyId);
    setStories(prev => prev.map(s => s.id === storyId ? { ...s, views: s.views + 1 } : s));
    setCurrentView('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLike = (storyId: string) => {
    const isLiked = currentUser.favoriteStoryIds.includes(storyId);
    if (isLiked) {
      setCurrentUser(prev => ({
        ...prev,
        favoriteStoryIds: prev.favoriteStoryIds.filter(id => id !== storyId)
      }));
      setStories(prev => prev.map(s => s.id === storyId ? { ...s, likes: Math.max(0, s.likes - 1) } : s));
    } else {
      setCurrentUser(prev => ({
        ...prev,
        favoriteStoryIds: [...prev.favoriteStoryIds, storyId]
      }));
      setStories(prev => prev.map(s => s.id === storyId ? { ...s, likes: s.likes + 1 } : s));
      // mini celebration
      confetti({ particleCount: 35, spread: 45, origin: { y: 0.8 } });
    }
  };

  const handleToggleBookmark = (storyId: string) => {
    const isBookmarked = currentUser.bookmarks.includes(storyId);
    if (isBookmarked) {
      setCurrentUser(prev => ({
        ...prev,
        bookmarks: prev.bookmarks.filter(id => id !== storyId)
      }));
      setSuccessToast('Hadithi imeondolewa kwenye bookmarks.');
    } else {
      setCurrentUser(prev => ({
        ...prev,
        bookmarks: [...prev.bookmarks, storyId]
      }));
      setSuccessToast('Hadithi imehifadhiwa kwenye bookmarks zako! ❤️');
    }
  };

  // Payment submission from reader
  const handleSubmitPayment = (paymentData: Omit<PaymentRecord, 'id' | 'createdAt' | 'status'>) => {
    const newRecord: PaymentRecord = {
      ...paymentData,
      id: `pay-${Date.now()}`,
      status: 'pending',
      createdAt: new Date().toLocaleString()
    };
    setPayments(prev => [newRecord, ...prev]);

    // Send admin notification
    setNotifications(prev => [
      {
        id: `notif-${Date.now()}`,
        title: '💳 Malipo Mapya Yametumwa!',
        message: `${paymentData.senderName} ametuma TSh ${paymentData.amountTsh} kwa ajili ya "${paymentData.storyTitle}". Thibitisha kwenye Admin.`,
        date: 'Sasa hivi',
        read: false,
        type: 'payment_verified'
      },
      ...prev
    ]);
  };

  // Instant demo unlock
  const handleInstantUnlockForDemo = (storyId: string) => {
    if (!currentUser.unlockedStoryIds.includes(storyId)) {
      setCurrentUser(prev => ({
        ...prev,
        unlockedStoryIds: [...prev.unlockedStoryIds, storyId]
      }));
    }
    setSuccessToast('🎉 Hongera! Story yako imefunguliwa. Furahia kusoma ❤️');
  };

  // Admin approves payment
  const handleApprovePayment = (paymentId: string) => {
    const targetPayment = payments.find(p => p.id === paymentId);
    if (!targetPayment) return;

    // Update payment status
    setPayments(prev => prev.map(p => 
      p.id === paymentId 
        ? { ...p, status: 'approved', verifiedAt: new Date().toLocaleString() } 
        : p
    ));

    // Unlock story for user
    if (!currentUser.unlockedStoryIds.includes(targetPayment.storyId)) {
      setCurrentUser(prev => ({
        ...prev,
        unlockedStoryIds: [...prev.unlockedStoryIds, targetPayment.storyId]
      }));
    }

    // Add celebration notification
    setNotifications(prev => [
      {
        id: `notif-${Date.now()}`,
        title: '🎉 Hongera! Story yako imefunguliwa!',
        message: `Malipo yako ya TSh ${targetPayment.amountTsh} kwa ajili ya "${targetPayment.storyTitle}" yamethibitishwa. Furahia kusoma ❤️`,
        date: 'Sasa hivi',
        read: false,
        type: 'payment_verified',
        storyId: targetPayment.storyId
      },
      ...prev
    ]);

    setSuccessToast(`🎉 Malipo ya ${targetPayment.senderName} yamethibitishwa na hadithi imefunguliwa! ❤️`);
  };

  // Admin rejects payment
  const handleRejectPayment = (paymentId: string) => {
    setPayments(prev => prev.map(p => 
      p.id === paymentId ? { ...p, status: 'rejected' } : p
    ));
    setSuccessToast('Muamala umekataliwa.');
  };

  // Admin Story CRUD
  const handleAddStory = (newStory: Story) => {
    setStories(prev => [newStory, ...prev]);
    // Notify users
    setNotifications(prev => [
      {
        id: `notif-${Date.now()}`,
        title: '🔥 Story mpya imeingia!',
        message: `Dada Marry ameachia simulizi mpya: "${newStory.title}". Ingia sasa kusoma!`,
        date: 'Sasa hivi',
        read: false,
        type: 'new_story',
        storyId: newStory.id
      },
      ...prev
    ]);
  };

  const handleUpdateStory = (updatedStory: Story) => {
    setStories(prev => prev.map(s => s.id === updatedStory.id ? updatedStory : s));
  };

  const handleDeleteStory = (storyId: string) => {
    if (confirm('Je, una uhakika unataka kufuta hadithi hii?')) {
      setStories(prev => prev.filter(s => s.id !== storyId));
      setSuccessToast('Hadithi imefutwa.');
    }
  };

  // Broadcast notification from admin
  const handleSendNotification = (title: string, message: string, storyId?: string) => {
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title,
      message,
      date: 'Sasa hivi',
      read: false,
      type: 'announcement',
      storyId
    };
    setNotifications(prev => [newNotif, ...prev]);
    setSuccessToast('Arifa imetumwa kwa wasomaji wote!');
  };

  // Comments
  const handleAddComment = (storyId: string, text: string, userName: string) => {
    const newComment: Comment = {
      id: `c-${Date.now()}`,
      storyId,
      userName,
      userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
      text,
      date: 'Sasa hivi',
      likes: 1,
      isLikedByUser: false
    };
    setComments(prev => [newComment, ...prev]);
    setSuccessToast('Maoni yako yametumwa kwa Dada Marry! ❤️');
  };

  const handleLikeComment = (commentId: string) => {
    setComments(prev => prev.map(c => {
      if (c.id === commentId) {
        return {
          ...c,
          likes: c.isLikedByUser ? c.likes - 1 : c.likes + 1,
          isLikedByUser: !c.isLikedByUser
        };
      }
      return c;
    }));
  };

  const handleDeleteComment = (commentId: string) => {
    setComments(prev => prev.filter(c => c.id !== commentId));
    setSuccessToast('Maoni yamefutwa.');
  };

  const handleMarkNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  // Current story being read
  const currentReadingStory = stories.find(s => s.id === readingStoryId) || stories[0];
  const isCurrentStoryUnlocked = readingStoryId ? currentUser.unlockedStoryIds.includes(readingStoryId) : false;
  const storyOfTheDay = stories.find(s => s.isStoryOfTheDay) || stories[0];

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-[#0d061c] text-slate-100 flex flex-col justify-between selection:bg-pink-500 selection:text-white">
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-xs sm:text-sm shadow-2xl border border-pink-300/40 animate-in fade-in slide-in-from-top-4 duration-300 flex items-center gap-2">
          <span>💕</span>
          <span>{successToast}</span>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        currentView={isAdminMode ? 'admin' : currentView}
        onNavigate={handleNavigate}
        unreadNotificationsCount={unreadNotificationsCount}
        notifications={notifications}
        onMarkNotificationsRead={handleMarkNotificationsRead}
        favoritesCount={currentUser.favoriteStoryIds.length}
        isAdmin={isAdminMode}
        onToggleAdmin={() => setIsAdminMode(!isAdminMode)}
      />

      {/* Content Rendering */}
      <div className="flex-1">
        {isAdminMode ? (
          <AdminDashboard
            stories={stories}
            payments={payments}
            comments={comments}
            onApprovePayment={handleApprovePayment}
            onRejectPayment={handleRejectPayment}
            onAddStory={handleAddStory}
            onUpdateStory={handleUpdateStory}
            onDeleteStory={handleDeleteStory}
            onSendNotification={handleSendNotification}
            onDeleteComment={handleDeleteComment}
          />
        ) : currentView === 'reader' ? (
          <StoryReader
            story={currentReadingStory}
            isUnlocked={isCurrentStoryUnlocked}
            onBack={() => setCurrentView('home')}
            onOpenPaywall={() => setPaywallStory(currentReadingStory)}
            onToggleBookmark={handleToggleBookmark}
            isBookmarked={currentUser.bookmarks.includes(currentReadingStory.id)}
            onToggleLike={handleToggleLike}
            isLiked={currentUser.favoriteStoryIds.includes(currentReadingStory.id)}
            comments={comments.filter(c => c.storyId === currentReadingStory.id)}
            onAddComment={handleAddComment}
            onLikeComment={handleLikeComment}
          />
        ) : currentView === 'search' ? (
          <SearchModal
            stories={stories}
            onReadStory={handleReadStory}
            onToggleLike={handleToggleLike}
            likedStoryIds={currentUser.favoriteStoryIds}
            onToggleBookmark={handleToggleBookmark}
            bookmarkedStoryIds={currentUser.bookmarks}
          />
        ) : currentView === 'account' ? (
          <UserAccountModal
            user={currentUser}
            onUpdateUser={(updated) => setCurrentUser(prev => ({ ...prev, ...updated }))}
            stories={stories}
            notifications={notifications}
            onReadStory={handleReadStory}
            onToggleBookmark={handleToggleBookmark}
            onToggleLike={handleToggleLike}
            likedStoryIds={currentUser.favoriteStoryIds}
          />
        ) : currentView === 'trending' ? (
          <div className="pt-4">
            <TrendingSection
              stories={stories}
              onReadStory={handleReadStory}
              onToggleLike={handleToggleLike}
              likedStoryIds={currentUser.favoriteStoryIds}
              onToggleBookmark={handleToggleBookmark}
              bookmarkedStoryIds={currentUser.bookmarks}
            />
          </div>
        ) : currentView === 'categories' ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <div className="mt-8">
              <h3 className="font-serif-title font-bold text-2xl text-white mb-6">
                Hadithi za Kitengo hiki ({selectedCategory === 'all' ? 'Zote' : selectedCategory.toUpperCase()})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {stories
                  .filter(s => selectedCategory === 'all' || s.category === selectedCategory)
                  .map(story => (
                    <StoryCard
                      key={story.id}
                      story={story}
                      onReadStory={handleReadStory}
                      onToggleLike={handleToggleLike}
                      isLiked={currentUser.favoriteStoryIds.includes(story.id)}
                      onToggleBookmark={handleToggleBookmark}
                      isBookmarked={currentUser.bookmarks.includes(story.id)}
                    />
                  ))}
              </div>
            </div>
          </div>
        ) : currentView === 'favorites' ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-serif-title font-extrabold text-3xl sm:text-4xl text-white">
                ❤️ Hadithi Zako za Moyoni (Vipendwa)
              </h2>
              <p className="text-sm text-pink-200/80 mt-2">
                Mkusanyiko wa hadithi zote zilizogusa hisia zako
              </p>
            </div>

            {currentUser.favoriteStoryIds.length === 0 ? (
              <div className="text-center py-16 glass-panel rounded-3xl p-8 max-w-md mx-auto">
                <p className="text-4xl mb-3">💔</p>
                <h4 className="font-serif-title font-bold text-lg text-white">Hujapenda hadithi yoyote bado</h4>
                <p className="text-xs text-pink-200/70 mt-1">
                  Bofya alama ya moyo ❤️ kwenye hadithi yoyote ili uiongeze hapa.
                </p>
                <button
                  onClick={() => setCurrentView('home')}
                  className="mt-5 px-6 py-2.5 rounded-full font-bold text-xs bg-pink-600 text-white"
                >
                  Gundua Hadithi Sasa
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {stories
                  .filter(s => currentUser.favoriteStoryIds.includes(s.id))
                  .map(story => (
                    <StoryCard
                      key={story.id}
                      story={story}
                      onReadStory={handleReadStory}
                      onToggleLike={handleToggleLike}
                      isLiked={true}
                      onToggleBookmark={handleToggleBookmark}
                      isBookmarked={currentUser.bookmarks.includes(story.id)}
                    />
                  ))}
              </div>
            )}
          </div>
        ) : (
          /* HOME VIEW */
          <div className="space-y-4">
            {/* Hero Section */}
            <HeroSection
              onStartReading={() => handleReadStory('mapenzi-ya-siri-darasa-la-mwisho')}
              onExploreStories={() => {
                const sampleSection = document.getElementById('sample-stories-section');
                if (sampleSection) {
                  sampleSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setCurrentView('trending');
                }
              }}
            />

            {/* Story of the Day (👑 Highlighted Card) */}
            <StoryOfTheDay
              story={storyOfTheDay}
              onReadStory={handleReadStory}
              onToggleLike={handleToggleLike}
              isLiked={currentUser.favoriteStoryIds.includes(storyOfTheDay.id)}
            />

            {/* Category Filter Pills */}
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={(catId) => {
                setSelectedCategory(catId);
                if (catId !== 'all') {
                  setCurrentView('categories');
                }
              }}
            />

            {/* Section: Stories Zinazovuma Leo */}
            <TrendingSection
              stories={stories}
              onReadStory={handleReadStory}
              onToggleLike={handleToggleLike}
              likedStoryIds={currentUser.favoriteStoryIds}
              onToggleBookmark={handleToggleBookmark}
              bookmarkedStoryIds={currentUser.bookmarks}
            />

            {/* Sample Stories Section (The 5 exact required Swahili Love Stories) */}
            <div id="sample-stories-section">
              <SampleStoriesSection
                stories={stories}
                onReadStory={handleReadStory}
                onToggleLike={handleToggleLike}
                likedStoryIds={currentUser.favoriteStoryIds}
                onToggleBookmark={handleToggleBookmark}
                bookmarkedStoryIds={currentUser.bookmarks}
              />
            </div>
          </div>
        )}
      </div>

      {/* Paywall Modal */}
      {paywallStory && (
        <PaywallModal
          isOpen={!!paywallStory}
          onClose={() => setPaywallStory(null)}
          story={paywallStory}
          onSubmitPayment={handleSubmitPayment}
          onInstantUnlockForDemo={handleInstantUnlockForDemo}
        />
      )}

      {/* Info / Policy Modal */}
      <InfoModal
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
      />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInfoModal={(type) => setInfoModalType(type)}
      />

      {/* Mobile Bottom Navigation (Home | Trending | Search | Favorites | Account) */}
      <MobileBottomNav
        currentView={currentView}
        onNavigate={handleNavigate}
        favoritesCount={currentUser.favoriteStoryIds.length}
      />
    </div>
  );
}
