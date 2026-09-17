import React, { useState } from 'react';
import { Search, X, Filter, Sparkles, Flame, Heart, Eye, ArrowRight } from 'lucide-react';
import { Story } from '../types';
import { CATEGORIES } from '../data/categories';
import { StoryCard } from './StoryCard';

interface SearchModalProps {
  stories: Story[];
  onReadStory: (storyId: string) => void;
  onToggleLike: (storyId: string) => void;
  likedStoryIds: string[];
  onToggleBookmark: (storyId: string) => void;
  bookmarkedStoryIds: string[];
  initialQuery?: string;
  onClose?: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  stories,
  onReadStory,
  onToggleLike,
  likedStoryIds,
  onToggleBookmark,
  bookmarkedStoryIds,
  initialQuery = '',
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'likes'>('popular');

  // Filter logic: Title, Category, Author, Keyword/Tags
  const filteredStories = stories.filter((story) => {
    const term = searchTerm.toLowerCase().trim();
    const matchesCategory = selectedCategory === 'all' || story.category === selectedCategory;
    
    if (!term) return matchesCategory;

    const matchesTitle = story.title.toLowerCase().includes(term);
    const matchesTeaser = story.teaser.toLowerCase().includes(term);
    const matchesAuthor = story.author.toLowerCase().includes(term);
    const matchesCategoryName = story.category.toLowerCase().includes(term);
    const matchesTags = story.tags?.some(tag => tag.toLowerCase().includes(term));

    return matchesCategory && (matchesTitle || matchesTeaser || matchesAuthor || matchesCategoryName || matchesTags);
  });

  // Sort logic
  filteredStories.sort((a, b) => {
    if (sortBy === 'popular') return b.views - a.views;
    if (sortBy === 'likes') return b.likes - a.likes;
    if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 text-pink-300 text-xs font-semibold mb-3 border border-pink-500/20">
          <Search className="w-3.5 h-3.5" />
          <span>UTAFUTAJI WA HARAKA</span>
        </div>
        <h2 className="font-serif-title font-extrabold text-3xl sm:text-4xl text-white">
          Tafuta Hadithi ya Kusisimua
        </h2>
        <p className="text-sm text-pink-200/80 mt-2">
          Tafuta hadithi kwa jina, kitengo, mwandishi, au neno lolote la siri
        </p>
      </div>

      {/* Big Search Bar */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="relative flex items-center">
          <Search className="absolute left-5 w-6 h-6 text-pink-400 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tafuta story unayotaka kusoma..."
            className="w-full pl-14 pr-12 py-4 rounded-3xl bg-[#17092e] border-2 border-pink-500/40 focus:border-pink-400 text-white placeholder-pink-300/40 text-base shadow-[0_0_30px_rgba(236,72,153,0.15)] focus:outline-none transition-all"
            autoFocus
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick search tags */}
        <div className="mt-3 flex items-center flex-wrap gap-2 text-xs text-pink-300/80 px-2">
          <span className="font-semibold">Maneno maarufu:</span>
          {['Darasa la mwisho', 'Harusi', 'Kijana wa stendi', 'Chuki', 'Heartbreak', 'Ndoa'].map((k) => (
            <button
              key={k}
              onClick={() => setSearchTerm(k)}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-pink-500/20 border border-pink-500/20 text-pink-200 transition-colors cursor-pointer"
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      {/* Filters & Sorting Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 p-4 rounded-2xl glass-panel border border-pink-500/20">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <Filter className="w-4 h-4 text-pink-400 flex-shrink-0" />
          <span className="text-xs font-semibold text-slate-300 flex-shrink-0">Kitengo:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-black/40 border border-pink-500/30 text-pink-200 text-xs rounded-xl px-3 py-1.5 focus:outline-none focus:border-pink-400"
          >
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id} className="bg-[#120726] text-white">
                {c.icon} {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <span className="text-xs font-semibold text-slate-300">Panga kwa:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-black/40 border border-pink-500/30 text-pink-200 text-xs rounded-xl px-3 py-1.5 focus:outline-none focus:border-pink-400"
          >
            <option value="popular" className="bg-[#120726] text-white">Zinazosomwa Zaidi</option>
            <option value="likes" className="bg-[#120726] text-white">Zenye Likes Nyingi</option>
            <option value="newest" className="bg-[#120726] text-white">Hadithi Mpya</option>
          </select>

          <span className="text-xs text-pink-300 font-bold ml-2">
            ({filteredStories.length} Matokeo)
          </span>
        </div>
      </div>

      {/* Search Results Grid */}
      {filteredStories.length === 0 ? (
        <div className="text-center py-16 glass-panel rounded-3xl border border-pink-500/20 p-8 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-pink-900/40 text-pink-400 flex items-center justify-center mx-auto mb-4 text-2xl">
            💔
          </div>
          <h4 className="font-serif-title font-bold text-xl text-white">
            Hakuna hadithi iliyopatikana
          </h4>
          <p className="text-sm text-pink-200/70 mt-2">
            Hatujapata hadithi inayofanana na "{searchTerm}". Jaribu kutafuta kwa neno lingine au badilisha kitengo.
          </p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
            className="mt-6 px-6 py-2.5 rounded-full font-bold text-xs bg-pink-600 text-white hover:bg-pink-500 transition-colors cursor-pointer"
          >
            Onyesha Hadithi Zote
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onReadStory={onReadStory}
              onToggleLike={onToggleLike}
              isLiked={likedStoryIds.includes(story.id)}
              onToggleBookmark={onToggleBookmark}
              isBookmarked={bookmarkedStoryIds.includes(story.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
