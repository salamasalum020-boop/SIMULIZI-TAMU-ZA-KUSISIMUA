import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  Bookmark, 
  Share2, 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Lock, 
  Sparkles, 
  MessageCircle, 
  Send, 
  Sun, 
  Moon, 
  Type,
  ThumbsUp,
  Check,
  CreditCard,
  Eye,
  Clock,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Story, Comment } from '../types';

interface StoryReaderProps {
  story: Story;
  isUnlocked: boolean;
  onBack: () => void;
  onOpenPaywall: () => void;
  onToggleBookmark: (storyId: string) => void;
  isBookmarked: boolean;
  onToggleLike: (storyId: string) => void;
  isLiked: boolean;
  comments: Comment[];
  onAddComment: (storyId: string, text: string, userName: string) => void;
  onLikeComment: (commentId: string) => void;
}

export const StoryReader: React.FC<StoryReaderProps> = ({
  story,
  isUnlocked,
  onBack,
  onOpenPaywall,
  onToggleBookmark,
  isBookmarked,
  onToggleLike,
  isLiked,
  comments,
  onAddComment,
  onLikeComment
}) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [readingMode, setReadingMode] = useState<'cream' | 'dark' | 'sepia'>('cream');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('lg');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [newCommentText, setNewCommentText] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [copiedShare, setCopiedShare] = useState(false);

  const chapters = story.chapters || [];
  const currentChapter = chapters[currentChapterIndex] || {
    chapterNumber: 1,
    title: 'Sura ya Kwanza',
    content: story.teaser,
    isFreePreview: true
  };

  const isChapterLocked = !isUnlocked && currentChapterIndex > 0;

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentChapterIndex]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: story.title,
        text: `Soma hadithi hii tamu ya Dada Marry: ${story.title}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    const author = commentAuthor.trim() || 'Msomaji wa Dada Marry';
    onAddComment(story.id, newCommentText, author);
    setNewCommentText('');
  };

  // Font size classes
  const fontClasses = {
    sm: 'text-base leading-relaxed',
    base: 'text-lg leading-relaxed',
    lg: 'text-xl leading-loose',
    xl: 'text-2xl leading-loose'
  };

  // Theme styling
  const themeStyles = {
    cream: {
      wrapper: 'bg-[#faf7f2] text-[#2c1810]',
      card: 'bg-white/95 text-[#2c1810] shadow-md border-amber-900/10',
      header: 'bg-[#f5efe6]/90 border-amber-900/10 text-[#2c1810]',
      muted: 'text-[#6b584d]',
      divider: 'border-amber-900/10',
      button: 'bg-[#ede4d8] text-[#2c1810] hover:bg-[#e4d7c6]'
    },
    sepia: {
      wrapper: 'bg-[#f4ecd8] text-[#433422]',
      card: 'bg-[#ede2c8] text-[#433422] shadow-md border-[#cfbe9e]',
      header: 'bg-[#e8dcbf]/95 border-[#cfbe9e] text-[#433422]',
      muted: 'text-[#7d674f]',
      divider: 'border-[#cfbe9e]',
      button: 'bg-[#dfd0af] text-[#433422] hover:bg-[#d6c49f]'
    },
    dark: {
      wrapper: 'bg-[#0f0724] text-[#f1e9fc]',
      card: 'bg-[#180d38] text-[#f1e9fc] shadow-xl border-pink-500/20',
      header: 'bg-[#13092e]/95 border-pink-500/20 text-white',
      muted: 'text-pink-300/70',
      divider: 'border-pink-500/20',
      button: 'bg-white/10 text-white hover:bg-white/15'
    }
  };

  const currentTheme = themeStyles[readingMode];

  return (
    <div className={`min-h-screen transition-colors duration-300 pb-24 ${currentTheme.wrapper}`}>
      {/* Top sticky reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-black/10">
        <div 
          className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Reader Controls Bar */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b px-4 py-3 transition-colors ${currentTheme.header}`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          {/* Back button */}
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold hover:text-pink-500 transition-colors p-1.5 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Rudi Mwanzo</span>
          </button>

          {/* Title centered snippet */}
          <div className="text-center truncate px-2 max-w-[200px] sm:max-w-xs md:max-w-sm">
            <h4 className="font-serif-title font-bold text-xs sm:text-sm truncate">
              {story.title}
            </h4>
            <span className="text-[10px] opacity-75">
              Sura ya {currentChapter.chapterNumber} ya {chapters.length}
            </span>
          </div>

          {/* Reader controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Font size toggles */}
            <div className="flex items-center bg-black/5 rounded-lg p-0.5">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-1.5 py-0.5 text-xs font-bold rounded ${fontSize === 'sm' ? 'bg-pink-500 text-white' : 'opacity-70'}`}
                title="Font Ndogo"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-1.5 py-0.5 text-xs font-bold rounded ${fontSize === 'base' ? 'bg-pink-500 text-white' : 'opacity-70'}`}
                title="Font ya Kawaida"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-1.5 py-0.5 text-xs font-bold rounded ${fontSize === 'lg' ? 'bg-pink-500 text-white' : 'opacity-70'}`}
                title="Font Kubwa"
              >
                A+
              </button>
            </div>

            {/* Reading Mode / Theme Toggle */}
            <div className="flex items-center bg-black/5 rounded-lg p-0.5">
              <button
                onClick={() => setReadingMode('cream')}
                className={`p-1.5 rounded text-xs ${readingMode === 'cream' ? 'bg-amber-100 text-amber-950 font-bold shadow-sm' : 'opacity-70'}`}
                title="Soft Cream (Kusoma mchana bila kuchosha macho)"
              >
                <Sun className="w-3.5 h-3.5 text-amber-600" />
              </button>
              <button
                onClick={() => setReadingMode('sepia')}
                className={`p-1.5 rounded text-xs ${readingMode === 'sepia' ? 'bg-amber-200 text-amber-950 font-bold shadow-sm' : 'opacity-70'}`}
                title="Sepia"
              >
                <span className="text-[11px] font-serif font-bold">Sep</span>
              </button>
              <button
                onClick={() => setReadingMode('dark')}
                className={`p-1.5 rounded text-xs ${readingMode === 'dark' ? 'bg-purple-900 text-white font-bold shadow-sm' : 'opacity-70'}`}
                title="Romantic Dark Mode"
              >
                <Moon className="w-3.5 h-3.5 text-purple-300" />
              </button>
            </div>

            {/* Bookmark */}
            <button
              onClick={() => onToggleBookmark(story.id)}
              className={`p-1.5 rounded-lg transition-colors ${isBookmarked ? 'text-pink-500 bg-pink-500/10' : 'opacity-70 hover:opacity-100'}`}
              title={isBookmarked ? 'Umehifadhi' : 'Hifadhi'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg opacity-70 hover:opacity-100 transition-colors relative"
              title="Shiriki na Marafiki"
            >
              {copiedShare ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Reader Container */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        {/* Story Cover Banner & Header */}
        <div className="relative rounded-3xl overflow-hidden mb-8 shadow-xl border border-black/10">
          <img
            src={story.coverImage}
            alt={story.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-pink-600 text-white mb-2 self-start uppercase tracking-wider">
              {story.category.replace('-', ' ')}
            </span>
            
            <h1 className="font-serif-title font-extrabold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
              {story.title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-pink-200/90">
              <span className="font-semibold text-pink-300">✍️ Mwandishi: {story.author}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {story.readingTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-purple-300" />
                {story.views.toLocaleString()} Wasomaji
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-rose-300">
                <Heart className="w-3.5 h-3.5 fill-current" />
                {story.likes} Likes
              </span>
            </div>
          </div>
        </div>

        {/* Chapter Selection Pill Buttons */}
        {chapters.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
            {chapters.map((chap, idx) => {
              const isChapUnlocked = isUnlocked || idx === 0;
              const isCurrent = idx === currentChapterIndex;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (!isChapUnlocked) {
                      onOpenPaywall();
                    } else {
                      setCurrentChapterIndex(idx);
                    }
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isCurrent
                      ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md'
                      : isChapUnlocked
                      ? currentTheme.button
                      : 'bg-black/20 text-slate-400 border border-black/10'
                  }`}
                >
                  {!isChapUnlocked && <Lock className="w-3 h-3 text-amber-500" />}
                  <span>Sura ya {chap.chapterNumber}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Story Chapter Content Box */}
        <article className={`p-6 sm:p-10 rounded-3xl border transition-colors ${currentTheme.card}`}>
          {/* Chapter Title */}
          <div className="mb-6 pb-4 border-b border-current/10">
            <h2 className="font-serif-title font-bold text-2xl sm:text-3xl text-pink-600">
              {currentChapter.title}
            </h2>
            <p className={`text-xs mt-1 ${currentTheme.muted}`}>
              Dada Marry Stories • Kila neno lina hisia
            </p>
          </div>

          {/* Chapter Scene Love Photo */}
          {currentChapter.chapterImage && !isChapterLocked && (
            <div className="mb-6 rounded-2xl overflow-hidden border border-pink-500/30 shadow-xl relative group">
              <img
                src={currentChapter.chapterImage}
                alt={currentChapter.title}
                className="w-full h-56 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4 sm:p-5">
                <p className="text-xs sm:text-sm text-pink-200 font-medium italic drop-shadow-md flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                  <span>“Wakati mwingine, kuangalia tu machoni kunatosha kusema kila kitu...”</span>
                </p>
              </div>
            </div>
          )}

          {/* Chapter Text */}
          {isChapterLocked ? (
            /* Locked Paywall Card within reader */
            <div className="text-center py-10 px-4 rounded-2xl bg-gradient-to-br from-pink-900/10 via-purple-900/20 to-rose-900/10 border-2 border-dashed border-pink-500/40">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-rose-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-500/30 animate-pulse">
                <Lock className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-pink-500">
                🔐 STORY HII NI PREMIUM
              </span>

              <h3 className="font-serif-title font-extrabold text-2xl sm:text-3xl mt-2 text-current">
                “Umefika sehemu tamu zaidi ya story 😍”
              </h3>

              <p className="mt-3 text-sm max-w-md mx-auto leading-relaxed opacity-90">
                Sura hii inashikilia siri nzito zaidi! Usikose kujua nini kilitokea kati ya wapendanao hawa. Fungua hadithi yote kamili sasa hivi.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-black/10 max-w-xs mx-auto border border-pink-500/30">
                <p className="text-xs font-semibold text-pink-500">Kima cha chini cha kuanzia:</p>
                <p className="text-3xl font-black text-amber-500 mt-0.5">TSh 300</p>
                <p className="text-[11px] opacity-75 mt-1">Lipa kupitia 0716614099</p>
              </div>

              <div className="mt-6">
                <button
                  id="btn-unlock-story-reader"
                  onClick={onOpenPaywall}
                  className="px-8 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-pink-500 via-rose-500 to-red-600 hover:from-pink-400 hover:to-rose-500 shadow-xl shadow-pink-500/40 transform hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  💗 FUNGUA STORY NZIMA SAA HII
                </button>
              </div>
            </div>
          ) : (
            /* Actual Chapter Text */
            <div className={`font-reader whitespace-pre-line text-justify tracking-normal ${fontClasses[fontSize]}`}>
              {currentChapter.content}
            </div>
          )}

          {/* Chapter Navigation Buttons */}
          <div className="mt-10 pt-6 border-t border-current/15 flex items-center justify-between gap-4">
            <button
              disabled={currentChapterIndex === 0}
              onClick={() => setCurrentChapterIndex(prev => Math.max(0, prev - 1))}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                currentChapterIndex === 0 
                  ? 'opacity-40 cursor-not-allowed bg-black/5' 
                  : currentTheme.button
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sura Iliyopita</span>
            </button>

            {/* Like story button in reader */}
            <button
              onClick={() => onToggleLike(story.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                isLiked 
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30' 
                  : 'bg-rose-500/10 text-rose-500 hover:bg-rose-500/20'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
              <span>{isLiked ? 'Umeipenda ❤️' : 'Penda Hadithi'}</span>
            </button>

            <button
              disabled={currentChapterIndex === chapters.length - 1}
              onClick={() => {
                const nextIdx = currentChapterIndex + 1;
                if (!isUnlocked && nextIdx > 0) {
                  onOpenPaywall();
                } else {
                  setCurrentChapterIndex(nextIdx);
                }
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                currentChapterIndex === chapters.length - 1
                  ? 'opacity-40 cursor-not-allowed bg-black/5'
                  : 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md'
              }`}
            >
              <span>Sura Inayofuata</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </article>

        {/* Comment Section */}
        <section className={`mt-10 p-6 sm:p-8 rounded-3xl border transition-colors ${currentTheme.card}`}>
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-current/15">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-pink-500" />
              <h3 className="font-serif-title font-bold text-xl text-current">
                Maoni ya Wasomaji ({comments.length})
              </h3>
            </div>
            <span className="text-xs text-pink-500 font-semibold">Tuma maoni yako hapa</span>
          </div>

          {/* New Comment Input Form */}
          <form onSubmit={handleCommentSubmit} className="mb-8 space-y-3">
            <div>
              <input
                type="text"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                placeholder="Jina lako (Mfano: Neema Charles)..."
                className="w-full px-4 py-2.5 rounded-xl text-xs bg-black/5 border border-current/20 focus:outline-none focus:border-pink-500 text-current placeholder-current/40"
              />
            </div>
            <div className="relative">
              <textarea
                rows={3}
                required
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder="Andika maoni yako kuhusu hadithi hii tamu ya Dada Marry..."
                className="w-full px-4 py-3 rounded-xl text-sm bg-black/5 border border-current/20 focus:outline-none focus:border-pink-500 text-current placeholder-current/40 resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full font-bold text-xs text-white bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 shadow-md flex items-center gap-2 ml-auto cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Tuma Maoni Yako</span>
            </button>
          </form>

          {/* List of comments */}
          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-center py-6 text-sm opacity-60">Kuwa wa kwanza kutoa maoni kwa Dada Marry!</p>
            ) : (
              comments.map((comment) => (
                <div 
                  key={comment.id}
                  className="p-4 rounded-2xl bg-black/5 border border-current/10 flex items-start gap-3.5"
                >
                  <img
                    src={comment.userAvatar}
                    alt={comment.userName}
                    className="w-10 h-10 rounded-full object-cover border border-pink-500/40 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold text-pink-600">{comment.userName}</h5>
                      <span className="text-[10px] opacity-60">{comment.date}</span>
                    </div>
                    <p className="text-xs sm:text-sm mt-1.5 leading-relaxed opacity-90">
                      {comment.text}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-[11px] opacity-70">
                      <button
                        onClick={() => onLikeComment(comment.id)}
                        className={`flex items-center gap-1 hover:text-pink-500 transition-colors cursor-pointer ${
                          comment.isLikedByUser ? 'text-pink-600 font-bold' : ''
                        }`}
                      >
                        <ThumbsUp className="w-3 h-3" />
                        <span>{comment.likes} Likes</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};
