import React from 'react';
import { Heart, Eye, Clock, Bookmark, Sparkles, Lock, ArrowRight } from 'lucide-react';
import { Story } from '../types';

interface StoryCardProps {
  story: Story;
  onReadStory: (storyId: string) => void;
  onToggleLike: (storyId: string) => void;
  isLiked?: boolean;
  onToggleBookmark: (storyId: string) => void;
  isBookmarked?: boolean;
  customButtonLabel?: string;
  badge?: string;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  story,
  onReadStory,
  onToggleLike,
  isLiked = false,
  onToggleBookmark,
  isBookmarked = false,
  customButtonLabel,
  badge
}) => {
  return (
    <div 
      id={`story-card-${story.id}`}
      className="group relative rounded-3xl overflow-hidden glass-panel border border-pink-500/20 hover:border-pink-400/60 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] bg-gradient-to-b from-[#190933]/90 via-[#130728]/95 to-[#0e041f]"
    >
      {/* Top Media Container */}
      <div className="relative h-56 sm:h-60 w-full overflow-hidden">
        <img
          src={story.coverImage}
          alt={story.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-105"
          loading="lazy"
        />
        
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e041f] via-transparent to-black/40" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 pointer-events-auto">
            {badge && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {badge}
              </span>
            )}
            {story.isPremium && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-pink-900/80 backdrop-blur-md text-pink-200 border border-pink-400/40 flex items-center gap-1">
                <Lock className="w-3 h-3 text-pink-300" />
                TSh {story.priceTsh}
              </span>
            )}
          </div>

          {/* Bookmark Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(story.id);
            }}
            className={`pointer-events-auto p-2 rounded-full backdrop-blur-md transition-all ${
              isBookmarked 
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/40' 
                : 'bg-black/50 text-slate-200 hover:text-white hover:bg-black/70'
            }`}
            title={isBookmarked ? 'Ondoa kwenye bookmarks' : 'Hifadhi hadithi hii'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Category Pill on bottom of image */}
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/90 text-pink-300 border border-pink-500/30 backdrop-blur-sm">
            {story.category.replace('-', ' ').toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Author & Reading Time */}
          <div className="flex items-center justify-between text-xs text-pink-300/70 mb-2">
            <span className="font-medium text-pink-200">✍️ {story.author}</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              {story.readingTime}
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onReadStory(story.id)}
            className="font-serif-title font-bold text-lg sm:text-xl text-white group-hover:text-pink-300 transition-colors line-clamp-2 cursor-pointer leading-snug"
          >
            {story.title}
          </h3>

          {/* Short Teaser Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-slate-300/90 line-clamp-3 leading-relaxed">
            {story.teaser}
          </p>
        </div>

        {/* Stats & Actions Bottom Bar */}
        <div className="mt-5 pt-4 border-t border-pink-500/15">
          <div className="flex items-center justify-between mb-4 text-xs text-slate-400">
            {/* Likes */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleLike(story.id);
              }}
              className={`flex items-center gap-1.5 transition-colors group/like cursor-pointer ${
                isLiked ? 'text-rose-400 font-bold' : 'hover:text-rose-400'
              }`}
            >
              <Heart 
                className={`w-4 h-4 transition-transform group-hover/like:scale-125 ${
                  isLiked ? 'fill-rose-500 text-rose-500' : 'text-slate-400'
                }`} 
              />
              <span>{story.likes + (isLiked ? 1 : 0)} Likes</span>
            </button>

            {/* Views */}
            <span className="flex items-center gap-1.5 text-slate-400">
              <Eye className="w-4 h-4 text-purple-400" />
              <span>{story.views.toLocaleString()} Wasomaji</span>
            </span>
          </div>

          {/* Main Action Button */}
          <button
            id={`btn-read-${story.id}`}
            onClick={() => onReadStory(story.id)}
            className="w-full py-2.5 px-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-rose-500 shadow-[0_4px_15px_rgba(236,72,153,0.3)] transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{customButtonLabel || story.buttonLabel || 'SOMA STORY'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
