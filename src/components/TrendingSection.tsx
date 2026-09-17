import React, { useState } from 'react';
import { Flame, Heart, Eye, Sparkles, TrendingUp } from 'lucide-react';
import { Story } from '../types';
import { StoryCard } from './StoryCard';

interface TrendingSectionProps {
  stories: Story[];
  onReadStory: (storyId: string) => void;
  onToggleLike: (storyId: string) => void;
  likedStoryIds: string[];
  onToggleBookmark: (storyId: string) => void;
  bookmarkedStoryIds: string[];
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({
  stories,
  onReadStory,
  onToggleLike,
  likedStoryIds,
  onToggleBookmark,
  bookmarkedStoryIds
}) => {
  const [filter, setFilter] = useState<'all' | 'most_read' | 'most_loved'>('all');

  let displayedStories = [...stories];
  if (filter === 'most_read') {
    displayedStories.sort((a, b) => b.views - a.views);
  } else if (filter === 'most_loved') {
    displayedStories.sort((a, b) => b.likes - a.likes);
  } else {
    displayedStories = displayedStories.filter(s => s.isTrending);
    if (displayedStories.length < 3) {
      displayedStories = [...stories];
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading & Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-pink-500/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/15 border border-orange-400/30 text-orange-300 text-xs font-bold mb-2">
            <Flame className="w-4 h-4 text-orange-400 animate-bounce" />
            <span>WASOMAJI WAKO HAPA</span>
          </div>
          <h2 className="font-serif-title font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight flex items-center gap-3">
            <span>🔥 STORIES ZINAZOVUMA LEO</span>
          </h2>
          <p className="mt-2 text-sm text-pink-200/80">
            Hadithi zilizoshika chati na kupendwa zaidi na maelfu ya wasomaji wetu.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-[#140827] p-1.5 rounded-2xl border border-pink-500/20">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            🔥 Zote Zinazovuma
          </button>

          <button
            onClick={() => setFilter('most_read')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              filter === 'most_read'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>MOST READ</span>
          </button>

          <button
            onClick={() => setFilter('most_loved')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              filter === 'most_loved'
                ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>MOST LOVED</span>
          </button>
        </div>
      </div>

      {/* Grid of stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedStories.slice(0, 6).map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            onReadStory={onReadStory}
            onToggleLike={onToggleLike}
            isLiked={likedStoryIds.includes(story.id)}
            onToggleBookmark={onToggleBookmark}
            isBookmarked={bookmarkedStoryIds.includes(story.id)}
            badge={filter === 'most_loved' ? '❤️ KIPENZI CHA WENGI' : filter === 'most_read' ? '👁️ INASOMWA SANA' : '🔥 INAVUMA'}
          />
        ))}
      </div>
    </section>
  );
};
